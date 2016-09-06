//
//  CMSBeaconManager.swift
//  AndyWarholAccessibilityProject
//
//  Created by Ruben Niculcea on 5/24/16.
//  Copyright © 2016 Carnegie Museums of Pittsburgh Innovation Studio.
//  All rights reserved.
//

import Foundation

enum CMSBeaconManagerEvents:String {
  case BeaconManagerBeaconPing
  case BluetoothStatusChanged
  case LocationServicesAllowedChanged
}

enum CMSBeaconManagerLocationServicesStatus:String {
  case NotDetermined = "LOCATION_SERVICES_STATUS_NOTDETERMINED"
  case Denied = "LOCATION_SERVICES_STATUS_DENIED"
  case Authorized = "LOCATION_SERVICES_STATUS_AUTHORIZED"
}

@objc(CMSBeaconManager)
class CMSBeaconManager: RCTEventEmitter, CBPeripheralManagerDelegate, ESTBeaconManagerDelegate {
  
  let beaconManager = ESTBeaconManager()
  var beaconRegion = CLBeaconRegion()
  var hasAlwaysAuthorization = false
  
  var bluetoothPeripheralManager: CBPeripheralManager?
  var bluetoothActive = false
  
  var jsResolveCallback:RCTPromiseResolveBlock?
  var jsRejectCallback:RCTPromiseRejectBlock?
  
  override init() {
    super.init()
  }
  
  override func constantsToExport() -> [String: AnyObject] {
    let BeaconManagerBeaconPing = CMSBeaconManagerEvents.BeaconManagerBeaconPing.rawValue
    let BluetoothStatusChanged = CMSBeaconManagerEvents.BluetoothStatusChanged.rawValue
    let LocationServicesAllowedChanged = CMSBeaconManagerEvents.LocationServicesAllowedChanged.rawValue
    
    return [
      "Events": [
        BeaconManagerBeaconPing: BeaconManagerBeaconPing,
        BluetoothStatusChanged: BluetoothStatusChanged,
        LocationServicesAllowedChanged: LocationServicesAllowedChanged,
      ]
    ]
  }
  
  override func supportedEvents() -> [String] {
    let BeaconManagerBeaconPing = CMSBeaconManagerEvents.BeaconManagerBeaconPing.rawValue
    let BluetoothStatusChanged = CMSBeaconManagerEvents.BluetoothStatusChanged.rawValue
    let LocationServicesAllowedChanged = CMSBeaconManagerEvents.LocationServicesAllowedChanged.rawValue
    
    return [
      BeaconManagerBeaconPing,
      BluetoothStatusChanged,
      LocationServicesAllowedChanged,
    ]
  }
  
  @objc func beginBluetoothAndLocationServicesEvents() {
    let options = [CBCentralManagerOptionShowPowerAlertKey: 0] // Don't show bluetooth popover
    bluetoothPeripheralManager = CBPeripheralManager(delegate: self, queue: nil, options: options)
    
    beaconManager.delegate = self
    
    // Location servies status does not send inital value like bluetooth does
    sendLocationServicesEvent(ESTBeaconManager.authorizationStatus())
  }
  
  @objc func requestLocationServicesAuthorization() {
    beaconManager.requestWhenInUseAuthorization()
  }
  
  @objc func startTracking(uuid: String,
                           identifier: String,
                           resolve:RCTPromiseResolveBlock,
                           reject:RCTPromiseRejectBlock) {
    if let nsuuid = NSUUID(UUIDString: uuid) {
      beaconRegion = CLBeaconRegion(proximityUUID: nsuuid, identifier: identifier)
      
      jsRejectCallback = reject
      jsResolveCallback = resolve
      
      //Ranging Beacons
      beaconManager.avoidUnknownStateBeacons = true
      beaconManager.startRangingBeaconsInRegion(beaconRegion)
    } else {
      reject("Beacon Scanning failed", "uuidString is invalid", nil)
    }
  }
  
  @objc func stopTracking() {
    beaconManager.stopRangingBeaconsInRegion(self.beaconRegion)
  }
  
  func sendBluetoothStatusEvent(bluetoothOn: Bool) {
    let eventName = CMSBeaconManagerEvents.BluetoothStatusChanged.rawValue
    
    self.sendEventWithName(eventName, body: ["bluetoothOn": bluetoothOn])
  }
  
  func sendLocationServicesEvent(status: CLAuthorizationStatus) {
    hasAlwaysAuthorization = beaconManager.isAuthorizedForRanging()
    
    let locationServicesStatus:CMSBeaconManagerLocationServicesStatus
    
    switch status {
      case .NotDetermined:
        locationServicesStatus = .NotDetermined
      case .Restricted, .Denied:
        locationServicesStatus = .Denied
      case .AuthorizedAlways, .AuthorizedWhenInUse:
        locationServicesStatus = .Authorized
    }
    
    let eventName = CMSBeaconManagerEvents.LocationServicesAllowedChanged.rawValue
    self.sendEventWithName(eventName, body: ["locationServicesStatus": locationServicesStatus.rawValue])
  }
  
  // MARK: - ESTBeaconManagerDelegate functions
  
  func beaconManager(manager: AnyObject, didStartMonitoringForRegion region: CLBeaconRegion) {
    if let resolve = jsResolveCallback {
      resolve(nil)
    }
  }
  
  func beaconManager(manager: AnyObject, rangingBeaconsDidFailForRegion region: CLBeaconRegion?, withError error: NSError) {
    if let reject = jsRejectCallback {
      reject("Beacon Scanning failed", error.localizedDescription, nil)
    }
  }
  
  func beaconManager(manager: AnyObject, didRangeBeacons beacons: [CLBeacon], inRegion region: CLBeaconRegion) {
    var beaconsJSON = [String]()
    
    for beacon in beacons {
      beaconsJSON.append("\(beacon.major):\(beacon.minor)")
    }
    
    let eventName = CMSBeaconManagerEvents.BeaconManagerBeaconPing.rawValue
    
    self.sendEventWithName(eventName, body: beaconsJSON)
  }
  
  func beaconManager(manager: AnyObject, didChangeAuthorizationStatus status: CLAuthorizationStatus) {
    sendLocationServicesEvent(status)
  }
  
  // MARK: - CBPeripheralManagerDelegate functions
  
  func peripheralManagerDidUpdateState(peripheral: CBPeripheralManager) {
    
    switch peripheral.state {
    case .Unknown, .Resetting, .PoweredOff:
      bluetoothActive = false
    case .Unsupported:
      // This is never hit as every modern iOS device has bluetooth
      break
    case .Unauthorized:
      // This is never hit as we only use bluetooth for location
      break
    case .PoweredOn:
      bluetoothActive = true
    }
    
    sendBluetoothStatusEvent(bluetoothActive)
  }
}

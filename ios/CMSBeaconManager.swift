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
class CMSBeaconManager: RCTEventEmitter {
  
  var beaconManager = ESTBeaconManager()
  var beaconRegion:CLBeaconRegion?

  var locationManager: CLLocationManager!
  var bluetoothPeripheralManager: CBPeripheralManager?
  
  var jsResolveCallback:RCTPromiseResolveBlock?
  var jsRejectCallback:RCTPromiseRejectBlock?
  
  override init() {
    super.init()
    
    beaconManager.delegate = self
    beaconManager.avoidUnknownStateBeacons = true
  }
  
  override func constantsToExport() -> [String: Any] {
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
    
    self.locationManager = CLLocationManager()
    self.locationManager.delegate = self
  }
  
  @objc func requestLocationServicesAuthorization() {
    locationManager.requestWhenInUseAuthorization()
  }
  
  @objc func startTracking(_ uuid: String,
                           identifier: String,
                           resolve:@escaping RCTPromiseResolveBlock,
                           reject:@escaping RCTPromiseRejectBlock) {
    if let nsuuid = UUID(uuidString: uuid) {
      beaconRegion = CLBeaconRegion(proximityUUID: nsuuid, identifier: identifier)
      
      if beaconManager.rangedRegions.contains(beaconRegion!) {
        resolve(nil)
        return
      }
      
      jsRejectCallback = reject
      jsResolveCallback = resolve
      
      beaconManager.startRangingBeacons(in: beaconRegion!)
    } else {
      reject("Beacon Scanning failed", "uuidString is invalid", nil)
    }
  }
  
  @objc func stopTracking() {
    if let _beaconRegion = beaconRegion {
      beaconManager.stopRangingBeacons(in: _beaconRegion)
    }
  }
  
  func clearJSCallbacks() {
    jsResolveCallback = nil
    jsRejectCallback = nil
  }
}

extension CMSBeaconManager: ESTBeaconManagerDelegate {
  func beaconManager(_ manager: Any, didRangeBeacons beacons: [CLBeacon], in region: CLBeaconRegion) {
    if let resolve = jsResolveCallback {
      clearJSCallbacks()
      resolve(nil)
    }
    
    var beaconsJSON = [String]()
    
    for beacon in beacons {
      beaconsJSON.append("\(beacon.major):\(beacon.minor)")
    }
    
    let eventName = CMSBeaconManagerEvents.BeaconManagerBeaconPing.rawValue
    
    self.sendEvent(withName: eventName, body: beaconsJSON)
  }
  
  func beaconManager(_ manager: Any, rangingBeaconsDidFailFor region: CLBeaconRegion?, withError error: Error) {
    if let reject = jsRejectCallback {
      clearJSCallbacks()
      reject("Beacon Scanning failed", error.localizedDescription, nil)
    }
  }
}

extension CMSBeaconManager: CBPeripheralManagerDelegate {
  func peripheralManagerDidUpdateState(_ peripheral: CBPeripheralManager) {
    var bluetoothActive = false
    
    switch peripheral.state {
    case .unknown, .resetting, .poweredOff:
      bluetoothActive = false
    case .unsupported:
      // This is never hit as every modern iOS device has bluetooth
      break
    case .unauthorized:
      // This is never hit as we only use bluetooth for location
      break
    case .poweredOn:
      bluetoothActive = true
    }
    
    sendBluetoothStatusEvent(bluetoothActive)
  }
  
  func sendBluetoothStatusEvent(_ bluetoothOn: Bool) {
    let eventName = CMSBeaconManagerEvents.BluetoothStatusChanged.rawValue
    self.sendEvent(withName: eventName, body: ["bluetoothOn": bluetoothOn])
  }
}

extension CMSBeaconManager: CLLocationManagerDelegate {
  func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
    let locationServicesStatus:CMSBeaconManagerLocationServicesStatus
    
    switch status {
    case .notDetermined:
      locationServicesStatus = .NotDetermined
    case .restricted, .denied:
      locationServicesStatus = .Denied
    case .authorizedAlways, .authorizedWhenInUse:
      locationServicesStatus = .Authorized
    }
    
    sendLocationServicesEvent(locationServicesStatus)
  }
  
  func sendLocationServicesEvent(_ status: CMSBeaconManagerLocationServicesStatus) {
    let eventName = CMSBeaconManagerEvents.LocationServicesAllowedChanged.rawValue
    self.sendEvent(withName: eventName, body: ["locationServicesStatus": status.rawValue])
  }
}

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
class CMSBeaconManager: RCTEventEmitter, CBPeripheralManagerDelegate, CLLocationManagerDelegate,
 ESTBeaconManagerDelegate {
  
  let beaconManager = ESTBeaconManager()
  var beaconRegion:CLBeaconRegion?

  var locationManager: CLLocationManager!
  var hasAlwaysAuthorization = false
  
  var bluetoothPeripheralManager: CBPeripheralManager?
  var bluetoothActive = false
  
  var jsResolveCallback:RCTPromiseResolveBlock?
  var jsRejectCallback:RCTPromiseRejectBlock?
  
  override init() {
    super.init()
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
  
  func mainThread(_ closure:@escaping () -> ()) {
    DispatchQueue.main.async {
      closure()
    }
  }
  
  @objc func beginBluetoothAndLocationServicesEvents() {
    let options = [CBCentralManagerOptionShowPowerAlertKey: 0] // Don't show bluetooth popover
    bluetoothPeripheralManager = CBPeripheralManager(delegate: self, queue: nil, options: options)
    beaconManager.delegate = self
    
    mainThread() {
      self.locationManager = CLLocationManager()
      self.locationManager.delegate = self
    }
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
      
      jsRejectCallback = reject
      jsResolveCallback = resolve
      
      //Ranging Beacons
      beaconManager.avoidUnknownStateBeacons = true
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
  
  func sendBluetoothStatusEvent(_ bluetoothOn: Bool) {
    let eventName = CMSBeaconManagerEvents.BluetoothStatusChanged.rawValue
    
    self.sendEvent(withName: eventName, body: ["bluetoothOn": bluetoothOn])
  }
  
  func sendLocationServicesEvent(_ status: CLAuthorizationStatus) {
    hasAlwaysAuthorization = beaconManager.isAuthorizedForRanging()
    
    let locationServicesStatus:CMSBeaconManagerLocationServicesStatus
    
    switch status {
      case .notDetermined:
        locationServicesStatus = .NotDetermined
      case .restricted, .denied:
        locationServicesStatus = .Denied
      case .authorizedAlways, .authorizedWhenInUse:
        locationServicesStatus = .Authorized
    }
    
    let eventName = CMSBeaconManagerEvents.LocationServicesAllowedChanged.rawValue
    self.sendEvent(withName: eventName, body: ["locationServicesStatus": locationServicesStatus.rawValue])
  }
  
  // MARK: - ESTBeaconManagerDelegate functions
  
  private func beaconManager(_ manager: AnyObject, didStartMonitoringFor region: CLBeaconRegion) {
    if let resolve = jsResolveCallback {
      resolve(nil)
    }
  }
  
  private func beaconManager(_ manager: AnyObject, rangingBeaconsDidFailFor region: CLBeaconRegion?, withError error: NSError) {
    if let reject = jsRejectCallback {
      reject("Beacon Scanning failed", error.localizedDescription, nil)
    }
  }
  
  private func beaconManager(_ manager: AnyObject, didRangeBeacons beacons: [CLBeacon], in region: CLBeaconRegion) {
    var beaconsJSON = [String]()
    
    for beacon in beacons {
      beaconsJSON.append("\(beacon.major):\(beacon.minor)")
    }
    
    let eventName = CMSBeaconManagerEvents.BeaconManagerBeaconPing.rawValue
    
    self.sendEvent(withName: eventName, body: beaconsJSON)
  }
  
  // MARK: - CBPeripheralManagerDelegate functions
  
  func peripheralManagerDidUpdateState(_ peripheral: CBPeripheralManager) {
    
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
  
  // MARK: - CLLocationManagerDelegate functions
  
  public func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
    sendLocationServicesEvent(status)
  }
}

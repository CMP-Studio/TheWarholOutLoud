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
    
    let options = [CBCentralManagerOptionShowPowerAlertKey:0] // Don't show bluetooth popover
    bluetoothPeripheralManager = CBPeripheralManager(delegate: self, queue: nil, options: options)
    
    beaconManager.delegate = self
    beaconManager.requestWhenInUseAuthorization()
    hasAlwaysAuthorization = beaconManager.isAuthorizedForRanging()
  }
  
  override func constantsToExport() -> [String: AnyObject] {
    let BeaconManagerBeaconPing = CMSBeaconManagerEvents.BeaconManagerBeaconPing.rawValue
    
    return [
      "Events": [
        BeaconManagerBeaconPing: BeaconManagerBeaconPing,
      ]
    ]
  }
  
  override func supportedEvents() -> [String] {
    let BeaconManagerBeaconPing = CMSBeaconManagerEvents.BeaconManagerBeaconPing.rawValue
    
    return [
      BeaconManagerBeaconPing,
    ]
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
    hasAlwaysAuthorization = beaconManager.isAuthorizedForRanging()
  }
  
  // MARK: - CBPeripheralManagerDelegate functions
  
  func peripheralManagerDidUpdateState(peripheral: CBPeripheralManager) {
    if peripheral.state == CBPeripheralManagerState.PoweredOn {
      bluetoothActive = true
    } else if peripheral.state == CBPeripheralManagerState.PoweredOff {
      bluetoothActive = false
    } else if peripheral.state == CBPeripheralManagerState.Unsupported {
      // This is never hit as every modern iOS device has bluetooth
    } else if peripheral.state == CBPeripheralManagerState.Unauthorized {
      // This is never hit as we only use bluetooth for location
    }
  }
}

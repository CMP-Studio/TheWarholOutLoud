//
//  CMSAccessibilityManager.swift
//  AndyWarholAccessibilityProject
//
//  Created by Ruben Niculcea on 6/22/16.
//  Copyright © 2016 Carnegie Museums of Pittsburgh Innovation Studio. 
//  All rights reserved.
//

import Foundation
import UIKit

enum CMSAccessibilityManagerEvents:String {
  case screenReaderStatusChanged
}

@objc(CMSAccessibilityManager)
class CMSAccessibilityManager: RCTEventEmitter {
  
  override func constantsToExport() -> [String: Any] {
    let screenReaderStatusChanged = CMSAccessibilityManagerEvents.screenReaderStatusChanged.rawValue
    
    return [
      "Events": [
        screenReaderStatusChanged: screenReaderStatusChanged,
      ]
    ]
  }
  
  override func supportedEvents() -> [String] {
    let screenReaderStatusChanged = CMSAccessibilityManagerEvents.screenReaderStatusChanged.rawValue
    
    return [
      screenReaderStatusChanged,
    ]
  }

  @objc func screenReaderSpeak(_ text:String) {
    mainThread() {
      UIAccessibilityPostNotification(UIAccessibilityAnnouncementNotification, text);
    }
  }
  
  @objc func screenReaderScreenChanged(_ text:String) {
    mainThread() {
      UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, text)
    }
  }
  
  @objc func screenReaderForceFocus(_ reactTag:Int) {
    mainThread() {
      // How to find the reactTag in JS:
      // const reactTag = ReactNative.findNodeHandle(this.refs.testView);
      // !! Note: This is true for react 0.28 but bound to change in the future !!
      let view = self.bridge.uiManager.view(forReactTag: reactTag as NSNumber!)
      
      UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, view)
    }
  }
  
  @objc func screenReaderReloadLayout() {
    mainThread() {
      UIAccessibilityPostNotification(UIAccessibilityLayoutChangedNotification, nil);
    }
  }
  
  @objc func screenReaderStatus(_ resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) {
    let screenReaderStatus = UIAccessibilityIsVoiceOverRunning()
    
    // This function will never reject but I want to be able
    // to use promises to make for cleaner JS code
    resolve([screenReaderStatus])
  }
  
  override func startObserving() {
    NotificationCenter.default.addObserver(self, selector:#selector(CMSAccessibilityManager.screenReaderStatusChanged), name: NSNotification.Name(rawValue: UIAccessibilityVoiceOverStatusChanged), object: nil)
  }
  
  func screenReaderStatusChanged() {
    let screenReaderStatus = UIAccessibilityIsVoiceOverRunning()
    let eventName = CMSAccessibilityManagerEvents.screenReaderStatusChanged.rawValue
    
    let eventData = [
      "screenReaderStatus": screenReaderStatus,
    ]
    
    self.sendEvent(withName: eventName, body: eventData)
  }
  
  func mainThread(_ closure:@escaping () -> ()) {
    DispatchQueue.main.async {
      closure()
    }
  }
}

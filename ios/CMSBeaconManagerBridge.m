//
//  CMSBeaconManagerBridge.swift
//  AndyWarholAccessibilityProject
//
//  Created by Ruben Niculcea on 5/24/16.
//  Copyright © 2016 Carnegie Museums of Pittsburgh Innovation Studio.
//  All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCTBridgeModule.h"
#import "RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(CMSBeaconManager, RCTEventEmitter)

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

RCT_EXTERN_METHOD(beginBluetoothAndLocationServicesEvents)
RCT_EXTERN_METHOD(requestLocationServicesAuthorization)

RCT_EXTERN_METHOD(startTracking:(NSString *)uuidString
                  identifier:(NSString *)identifier
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(stopTracking)

@end

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

RCT_EXTERN_METHOD(startTracking:(NSString *)uuidString
                  identifier:(NSString *)identifier
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(stopTracking)

@end

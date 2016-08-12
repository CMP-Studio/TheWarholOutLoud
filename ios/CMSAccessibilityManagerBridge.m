//
//  CMSAccessibilityManagerBridge.m
//  AndyWarholAccessibilityProject
//
//  Created by Ruben Niculcea on 6/22/16.
//  Copyright © 2016 Carnegie Museums of Pittsburgh Innovation Studio.
//  All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCTBridgeModule.h"
#import "RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(CMSAccessibilityManager, RCTEventEmitter)

RCT_EXTERN_METHOD(screenReaderSpeak:(NSString *)text)
RCT_EXTERN_METHOD(screenReaderStatus:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(screenReaderReloadLayout)
RCT_EXTERN_METHOD(screenReaderForceFocus:(NSInteger)reactTag)
RCT_EXTERN_METHOD(screenReaderScreenChanged:(NSString *)text)

@end

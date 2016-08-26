//
//  CMSAudioManagerBridge.m
//  AndyWarholAccessibilityProject
//
//  Created by Ruben Niculcea on 5/24/16.
//  Copyright © 2016 Carnegie Museums of Pittsburgh Innovation Studio.
//  All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCTBridgeModule.h"
#import "RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(CMSAudioManager, RCTEventEmitter)

RCT_EXTERN_METHOD(loadLocalAudio:(NSString *)audioURL
                  audioUUID:(NSString *)audioUUID
                  playAudioAfterLoad:(BOOL)playAudioAfterLoad
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(loadRemoteAudio:(NSString *)audioURL
                  audioUUID:(NSString *)audioUUID
                  playAudioAfterLoad:(BOOL)playAudioAfterLoad
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(unloadAudio)

RCT_EXTERN_METHOD(play)
RCT_EXTERN_METHOD(pause)
RCT_EXTERN_METHOD(replay)
RCT_EXTERN_METHOD(togglePlayPause)

RCT_EXTERN_METHOD(seekToTime:(double)time)
RCT_EXTERN_METHOD(changeRate:(float)rate)
RCT_EXTERN_METHOD(rewind:(double)secondsToRewindBy)

@end

//
//  CMSAudioManager.swift
//  AndyWarholAccessibilityProject
//
//  Created by Ruben Niculcea on 5/24/16.
//  Copyright © 2016 Carnegie Museums of Pittsburgh Innovation Studio.
//  All rights reserved.
//

import UIKit
import AVFoundation

enum CMSAudioManagerEvents:String {
  case AudioManagerDidUpdateTime
  case AudioManagerDidFinishPlaying
}

@objc(CMSAudioManager)
class CMSAudioManager: RCTEventEmitter {

  var player = AVPlayer()
  var playerRate:Float = 1.0
  var duration:Double = 0.0

  var playerStatusObserving = false
  var playbackTimeObserver:AnyObject?

  var jsResolveCallback:RCTPromiseResolveBlock?
  var jsRejectCallback:RCTPromiseRejectBlock?

  var uuid = NSString()

  override init() {
    super.init()

    // TODO: Handle error
    try! AVAudioSession.sharedInstance().setCategory(AVAudioSessionCategoryPlayback)
  }

  override func constantsToExport() -> [String: AnyObject] {
    let AudioManagerDidUpdateTime = CMSAudioManagerEvents.AudioManagerDidUpdateTime.rawValue
    let AudioManagerDidFinishPlaying = CMSAudioManagerEvents.AudioManagerDidFinishPlaying.rawValue

    return [
      "Events": [
        AudioManagerDidUpdateTime: AudioManagerDidUpdateTime,
        AudioManagerDidFinishPlaying: AudioManagerDidFinishPlaying,
      ]
    ]
  }

  override func supportedEvents() -> [String] {
    let AudioManagerDidUpdateTime = CMSAudioManagerEvents.AudioManagerDidUpdateTime.rawValue
    let AudioManagerDidFinishPlaying = CMSAudioManagerEvents.AudioManagerDidFinishPlaying.rawValue

    return [
      AudioManagerDidUpdateTime,
      AudioManagerDidFinishPlaying,
    ]
  }

  @objc func loadLocalAudio(audioURL:String,
                            audioUUID:String,
                            resolve:RCTPromiseResolveBlock,
                            reject:RCTPromiseRejectBlock) {
    if let localPath = NSBundle.mainBundle().pathForResource(audioURL, ofType: "mp3") {
      let url = NSURL(fileURLWithPath:localPath)
      let asset = AVURLAsset(URL: url)

      uuid = audioUUID
      jsResolveCallback = resolve
      jsRejectCallback = reject
      loadAudio(asset)
    } else {
      reject("Audio playback failed", "Could not find local file", nil)
    }
  }

  @objc func loadRemoteAudio(audioURL:String,
                             audioUUID:String,
                             resolve:RCTPromiseResolveBlock,
                             reject:RCTPromiseRejectBlock) {
    if let url = NSURL(string:audioURL) {
      let asset = AVURLAsset(URL: url)

      uuid = audioUUID
      jsResolveCallback = resolve
      jsRejectCallback = reject
      loadAudio(asset)
    } else {
      reject("Audio playback failed", "Remote file URL is malformed", nil)
    }
  }

  func loadAudio(audioURLAsset:AVURLAsset) {
    if playerStatusObserving {
      unloadAudio()
    }

    duration = CMTimeGetSeconds(audioURLAsset.duration)
    let playerItem = AVPlayerItem(asset: audioURLAsset)

    player.replaceCurrentItemWithPlayerItem(playerItem)

    player.addObserver(self,
                       forKeyPath: "status",
                       options: NSKeyValueObservingOptions.New,
                       context: nil)
    playerStatusObserving = true
  }

  @objc func unloadAudio() {
    if let timeObserver = playbackTimeObserver {
      player.removeTimeObserver(timeObserver)
      playbackTimeObserver = nil
    }

    if (playerStatusObserving) {
      player.removeObserver(self, forKeyPath: "status")
      playerStatusObserving = false
    }

    NSNotificationCenter.defaultCenter().removeObserver(self)
    player = AVPlayer()
  }

  override func observeValueForKeyPath(keyPath: String?, ofObject object: AnyObject?, change: [String : AnyObject]?, context: UnsafeMutablePointer<Void>) {
    if keyPath == "status" {
      switch player.status {
      case .Unknown:
        if let reject = jsRejectCallback{
          let error = player.error
          reject("Audio playback failed", "Audio player failed with unknown error", error)
        }

      case .ReadyToPlay:
        player.actionAtItemEnd = .Pause
        player.rate = self.playerRate

        let interval = CMTimeMakeWithSeconds(1, Int32(NSEC_PER_SEC))
        playbackTimeObserver = player.addPeriodicTimeObserverForInterval(interval,
                                                                         queue: nil,
                                                                         usingBlock: {(time) in
          let eventName = CMSAudioManagerEvents.AudioManagerDidUpdateTime.rawValue
          let newTime = CMTimeGetSeconds(time)

          let eventData = [
            "uuid": self.uuid,
            "time": NSNumber(double: newTime),
          ]

          self.sendEventWithName(eventName, body: eventData)
        })

        NSNotificationCenter.defaultCenter()
          .addObserver(self,
                       selector: #selector(CMSAudioManager.itemDidFinishPlayingNotification),
                       name: AVPlayerItemDidPlayToEndTimeNotification,
                       object: nil)

        if let resolve = jsResolveCallback {
          resolve([uuid, duration])
        }

      case .Failed:
        if let reject = jsRejectCallback {
          let error = player.error
          reject("Audio playback failed", "Audio player failed to initialize", error)
        }
      }
    }
  }

  func itemDidFinishPlayingNotification() {
    let eventName = CMSAudioManagerEvents.AudioManagerDidFinishPlaying.rawValue

    let eventData = [
      "uuid": self.uuid,
      ]

    self.sendEventWithName(eventName, body: eventData)
  }

  @objc func play() {
    guard player.currentItem != nil else {
      return
    }

    player.rate = playerRate
  }

  @objc func pause() {
    guard player.currentItem != nil else {
      return
    }

    player.pause()
  }

  @objc func replay() {
    guard player.currentItem != nil else {
      return
    }

    let time = CMTimeMakeWithSeconds(0, 1)
    player.seekToTime(time) { (finished) in
      if finished {
        self.play()
      }
    }
  }

  @objc func togglePlayPause() {
    guard player.currentItem != nil else {
      return
    }

    if (player.rate == 0) {
      play()
    } else {
      pause()
    }
  }

  @objc func seekToTime(time:Double) {
    guard player.currentItem != nil else {
      return
    }

    let timeScale = player.currentItem!.asset.duration.timescale;

    let seekToTime = CMTimeMakeWithSeconds(time, timeScale)
    player.seekToTime(seekToTime)
  }

  @objc func changeRate(rate:Float) {
    guard player.currentItem != nil else {
      return
    }

    playerRate = rate

    if (player.rate != 0) {
      player.rate = rate
    }
  }

  @objc func rewind(secondsToRewindBy:Double) {
    guard player.currentItem != nil else {
      return
    }

    let currentTime = CMTimeGetSeconds(player.currentItem!.currentTime())
    let rewindToTime = CMTimeMakeWithSeconds(currentTime - secondsToRewindBy, Int32(NSEC_PER_SEC))
    player.seekToTime(rewindToTime)
  }

}

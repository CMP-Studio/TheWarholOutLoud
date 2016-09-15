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
  var playAudioAfterLoad = false
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

  override func constantsToExport() -> [String: Any] {
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

  @objc func loadLocalAudio(_ audioURL:String,
                            audioUUID:String,
                            playAudioAfterLoad:Bool,
                            resolve:@escaping RCTPromiseResolveBlock,
                            reject:@escaping RCTPromiseRejectBlock) {
    if let localPath = Bundle.main.path(forResource: audioURL, ofType: "mp3") {
      let url = URL(fileURLWithPath:localPath)
      let asset = AVURLAsset(url: url)

      self.playAudioAfterLoad = playAudioAfterLoad
      uuid = audioUUID as NSString
      jsResolveCallback = resolve
      jsRejectCallback = reject
      loadAudio(asset)
    } else {
      reject("Audio playback failed", "Could not find local file", nil)
    }
  }

  @objc func loadRemoteAudio(_ audioURL:String,
                             audioUUID:String,
                             playAudioAfterLoad:Bool,
                             resolve:@escaping RCTPromiseResolveBlock,
                             reject:@escaping RCTPromiseRejectBlock) {
    if let url = URL(string:audioURL) {
      let asset = AVURLAsset(url: url)

      self.playAudioAfterLoad = playAudioAfterLoad
      uuid = audioUUID as NSString
      jsResolveCallback = resolve
      jsRejectCallback = reject
      loadAudio(asset)
    } else {
      reject("Audio playback failed", "Remote file URL is malformed", nil)
    }
  }

  func loadAudio(_ audioURLAsset:AVURLAsset) {
    if playerStatusObserving {
      unloadAudio()
    }

    duration = CMTimeGetSeconds(audioURLAsset.duration)
    let playerItem = AVPlayerItem(asset: audioURLAsset)

    player.replaceCurrentItem(with: playerItem)

    player.addObserver(self,
                       forKeyPath: "status",
                       options: NSKeyValueObservingOptions.new,
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

    NotificationCenter.default.removeObserver(self)
    player = AVPlayer()
  }

  override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
    if keyPath == "status" {
      switch player.status {
      case .unknown:
        if let reject = jsRejectCallback{
          let error = player.error
          reject("Audio playback failed", "Audio player failed with unknown error", error)
        }

      case .readyToPlay:
        player.actionAtItemEnd = .pause
        
        if playAudioAfterLoad {
          player.rate = self.playerRate
        }

        let interval = CMTimeMakeWithSeconds(1, Int32(NSEC_PER_SEC))
        playbackTimeObserver = player.addPeriodicTimeObserver(forInterval: interval,
                                                                         queue: nil,
                                                                         using: {(time) in
          let eventName = CMSAudioManagerEvents.AudioManagerDidUpdateTime.rawValue
          let newTime = CMTimeGetSeconds(time)

          let eventData = [
            "uuid": self.uuid,
            "time": NSNumber(value: newTime as Double),
          ] as [String : Any]

          self.sendEvent(withName: eventName, body: eventData)
        }) as AnyObject?

        NotificationCenter.default
          .addObserver(self,
                       selector: #selector(CMSAudioManager.itemDidFinishPlayingNotification),
                       name: NSNotification.Name.AVPlayerItemDidPlayToEndTime,
                       object: nil)

        if let resolve = jsResolveCallback {
          resolve([uuid, duration])
        }

      case .failed:
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
      "time": self.duration,
      ] as [String : Any]

    self.sendEvent(withName: eventName, body: eventData)
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
    player.seek(to: time, completionHandler: { (finished) in
      if finished {
        self.play()
      }
    }) 
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

  @objc func seekToTime(_ time:Double) {
    guard player.currentItem != nil else {
      return
    }

    let timeScale = player.currentItem!.asset.duration.timescale;

    let seekToTime = CMTimeMakeWithSeconds(time, timeScale)
    player.seek(to: seekToTime)
  }

  @objc func changeRate(_ rate:Float) {
    guard player.currentItem != nil else {
      return
    }

    playerRate = rate

    if (player.rate != 0) {
      player.rate = rate
    }
  }

  @objc func rewind(_ secondsToRewindBy:Double) {
    guard player.currentItem != nil else {
      return
    }

    let currentTime = CMTimeGetSeconds(player.currentItem!.currentTime())
    let rewindToTime = CMTimeMakeWithSeconds(currentTime - secondsToRewindBy, Int32(NSEC_PER_SEC))
    player.seek(to: rewindToTime)
  }

}

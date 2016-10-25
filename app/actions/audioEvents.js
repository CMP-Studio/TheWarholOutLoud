
import {
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

import {
  updateAudioCurrentTime,
  audioDidFinishPlaying,
} from './audio';

import {
  startTimer,
} from './audioTimer';

const AudioManager = NativeModules.CMSAudioManager;
const AudioManagerObserver = new NativeEventEmitter(AudioManager);

const {
  AudioManagerDidUpdateTime,
  AudioManagerDidFinishPlaying,
} = AudioManager.Events;

// *** AudioManager Native Module Events ***
let updateTimeListener;
let didFinishPlayingListener;

function addEventListeners(dispatch, autoplayOn, nextAudioExists) {
  updateTimeListener = AudioManagerObserver
    .addListener(AudioManagerDidUpdateTime, (body) => {
      dispatch(
        updateAudioCurrentTime(body.uuid, body.time),
      );
    });

  didFinishPlayingListener = AudioManagerObserver
    .addListener(AudioManagerDidFinishPlaying, (body) => {
      if (autoplayOn && nextAudioExists) {
        startTimer(dispatch);
      }

      // Rounded because it's the duration
      dispatch(
        audioDidFinishPlaying(body.uuid, Math.round(body.time)),
      );
    });
}

export function removeAudioManagerEventListeners() {
  if (updateTimeListener) {
    updateTimeListener.remove();
  }

  if (didFinishPlayingListener) {
    didFinishPlayingListener.remove();
  }
}

export function setAudioManagerEventListeners(
  dispatch,
  autoplayOn,
  nextAudioExists
) {
  removeAudioManagerEventListeners();
  addEventListeners(dispatch, autoplayOn, nextAudioExists);
}

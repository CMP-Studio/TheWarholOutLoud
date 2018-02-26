
import {
  NativeModules,
} from 'react-native';

import {
  setAudioManagerEventListeners,
} from './audioEvents';

import {
  clearTimer,
  stopTimer,
} from './audioTimer';

import {
  updateLocalPreferences,
} from './preferences';

import {
  analyticsTrackDeviceAutoPlay,
  analyticsTrackContentOpened,
  analyticsTrackAudioPartialListen,
} from './analytics';

const AudioManager = NativeModules.CMSAudioManager;

import { _ } from 'lodash';

// *** Action Types ***
export const TOGGLE_PAUSE_PLAY = 'TOGGLE_PAUSE_PLAY';
export const PAUSE_AUDIO = 'PAUSE_AUDIO';
export const PLAY_AUDIO = 'PLAY_AUDIO';
export const TOGGLE_TRANSCRIPT = 'TOGGLE_TRANSCRIPT';
export const CYCLE_AUDIO_SPEED = 'CYCLE_AUDIO_SPEED';
export const REWIND_AUDIO = 'REWIND_AUDIO';
export const SEEK_AUDIO_TO_TIME = 'SEEK_AUDIO_TO_TIME';
export const REPLAY_AUDIO = 'REPLAY_AUDIO';
export const UPDATE_PREV_UUIDS = 'UPDATE_PREV_UUIDS';
export const UPDATE_CURRENT_AUDIO_ROUTE = 'UPDATE_CURRENT_AUDIO_ROUTE';

export const TOGGLE_AUDIO_TRANSCRIPT = 'TOGGLE_AUDIO_TRANSCRIPT';

export const LOAD_AUDIO_FAILURE = 'LOAD_AUDIO_FAILURE';
export const LOAD_AUDIO_SUCCESS = 'LOAD_AUDIO_SUCCESS';

export const UPDATE_AUDIO_CURRENT_TIME = 'UPDATE_AUDIO_CURRENT_TIME';
export const AUDIO_DID_FINISH_PLAYING = 'AUDIO_DID_FINISH_PLAYING';

export const TOGGLE_AUTOPLAY = 'TOGGLE_AUTOPLAY';

// *** Play Rate Types ***
export const PLAY_RATE_NORMAL = 'PLAY_RATE_NORMAL';
export const PLAY_RATE_FAST = 'PLAY_RATE_FAST';
export const PLAY_RATE_FASTEST = 'PLAY_RATE_FASTEST';

// *** Player Status Types ***
export const PLAYER_STATUS_PLAY = 'PLAYER_STATUS_PLAY';
export const PLAYER_STATUS_PAUSE = 'PLAYER_STATUS_PAUSE';
export const PLAYER_STATUS_FINISHED = 'PLAYER_STATUS_FINISHED';
export const PLAYER_STATUS_NOTLOADED = 'PLAYER_STATUS_NOTLOADED';
export const PLAYER_STATUS_UNLOADED = 'PLAYER_STATUS_UNLOADED';
export const PLAYER_STATUS_LOADING = 'PLAYER_STATUS_LOADING';
export const PLAYER_STATUS_ERROR = 'PLAYER_STATUS_ERROR';

export const AUDIO_CONTENT_DONE = 'AUDIO_CONTENT_DONE';

// *** Action Creators ***
export function audioDone() {
  return {
    type: AUDIO_CONTENT_DONE,
  };
}

export function loadingAudio(audioContent, uuid, time) {
  return {
    type: PLAYER_STATUS_LOADING,
    audioContent,
    uuid,
    time,
  };
}

function loadAudioSuccess(
  content,
  activeAudio,
  activeAudioIndex,
  nextUUID,
  replaceAudioContent,
  stopTitle,
  stopUUID,
) {
  return {
    type: LOAD_AUDIO_SUCCESS,
    content,
    activeAudio,
    activeAudioIndex,
    nextUUID,
    replaceAudioContent,
    stopTitle,
    stopUUID,
  };
}

function loadAudioFailure(error) {
  return {
    type: LOAD_AUDIO_FAILURE,
  };
}

async function fireAudioAction(
  audioContent,
  activeAudio,
  dispatch,
  replaceAudioContent,
  autoplayOn,
  stopTitle,
  stopUUID,
  playAudioAfterLoad = true,
) {
  const activeAudioIndex = audioContent.findIndex((content, index) => {
    return content.uuid === activeAudio.uuid;
  });

  let nextUUID = null;
  if (activeAudioIndex + 1 < audioContent.length) {
    nextUUID = audioContent[activeAudioIndex + 1].uuid;
  }

  setAudioManagerEventListeners(dispatch, autoplayOn, nextUUID !== null);
  try {
    const [, duration] = await AudioManager.loadLocalAudio(
      activeAudio.audioURL,
      activeAudio.uuid,
      playAudioAfterLoad,
    );

    // eslint-disable-next-line no-param-reassign
    activeAudio.duration = Math.round(duration);

    clearTimer();
    dispatch(
      loadAudioSuccess(
        audioContent,
        activeAudio,
        activeAudioIndex,
        nextUUID,
        replaceAudioContent,
        stopTitle,
        stopUUID,
      )
    );
  } catch (e) {
    clearTimer();
    dispatch(
      loadAudioFailure(e)
    );
  }
}

export function unloadAudio() {
  AudioManager.unloadAudio();
  return {
    type: PLAYER_STATUS_UNLOADED,
  };
}

function swapElementsInArray(array, indexOne, indexTwo) {
  const temp = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = temp;
}

function preferenceSorter(globalPreferences, categories) {
  return categories.sort((categoryA, categoryB) => {
    preferencePercentageA = globalPreferences.filter((pref) => { return pref.category === categoryA; })[0].percentage;
    preferencePercentageB = globalPreferences.filter((pref) => { return pref.category === categoryB; })[0].percentage;
    if (preferencePercentageA > preferencePercentageB) return -1;
    else if (preferencePercentageA < preferencePercentageB) return 1;
    else return 0;
  });
}

export function loadAudioContent(
  audioContent,
  initialAudio,
  autoplayOn,
  stopTitle,
  stopUUID,
  globalPreferences,
  currentUUID,
  timeListened,
  screenReaderOn,
) {
  AudioManager.unloadAudio();

  return async (dispatch) => {
    dispatch(
      loadingAudio(audioContent, currentUUID, timeListened),
    );

    analyticsTrackContentOpened(stopTitle);

    let contentCategories = [];

    // get unique content categories in intial order
    for (var i = 0; i < audioContent.length; i++) {
      let c = audioContent[i].category;
      if (contentCategories.indexOf(c) === -1) {
        contentCategories.push(c);
      }
    }

    // We sort the audio categories based on three cases:
    let sortedCategories = [];

    // 1) If its a tactile experience
    if (contentCategories.indexOf('TACTILE_EXPERIENCE') !== -1) {
      sortedCategories.push(initialAudio);
      sortedCategories.push('TACTILE_EXPERIENCE');
      sortedCategories.push('VISUAL_DESCRIPTION');

      var remainingCategories = contentCategories.filter((c) => { return (c !== initialAudio && c !== 'TACTILE_EXPERIENCE' && c !== 'VISUAL_DESCRIPTION'); });
      sortedCategories = sortedCategories.concat(preferenceSorter(globalPreferences, remainingCategories));
    }
    // 2) Non-tactile tour stop, screenreader on
    else if (screenReaderOn) {
      sortedCategories.push(initialAudio);
      sortedCategories.push('VISUAL_DESCRIPTION');

      var remainingCategories = contentCategories.filter((c) => { return (c !== initialAudio && c !== 'VISUAL_DESCRIPTION'); });
      sortedCategories = sortedCategories.concat(preferenceSorter(globalPreferences, remainingCategories));
    } 
    // 3) Non-tactile tour stop, screenreader off
    else {
      sortedCategories.push(initialAudio);
      var remainingCategories = contentCategories.filter((c) => { return (c !== initialAudio); })
      sortedCategories = sortedCategories.concat(preferenceSorter(globalPreferences, remainingCategories));
    }

    // then arrange the content to match the sorting of categories 
    // keep in mind branching content may have a different category from parent, 
    // But should always be under parent
    let sortedAudioContent = [];
    for (var i=0; i<sortedCategories.length; i++) {
      let category = sortedCategories[i];
      sortedAudioContent = sortedAudioContent.concat(audioContent.filter((content) => { return content.category === category }));
    }   

    if (sortedAudioContent.length < 1) {
      dispatch(loadAudioFailure());
      return;
    } else {
      fireAudioAction(
        sortedAudioContent,
        sortedAudioContent[0],
        dispatch,
        true,
        autoplayOn,
        stopTitle,
        stopUUID,
        false,
      );
    }
  };
}


export function loadAudio(
  audioContent,
  activeAudio,
  autoplayOn,
  currentUUID,
  timeListened,
  stopTitle,
) {
  return async (dispatch) => {
    for (const content of audioContent) {
      if (content.uuid === currentUUID) {
        analyticsTrackAudioPartialListen(
          stopTitle,
          content.title,
          timeListened / content.duration,
        );

        break;
      }
    }

    dispatch(
      updateLocalPreferences(currentUUID, timeListened)
    );

    fireAudioAction(
      audioContent, activeAudio, dispatch, false, autoplayOn, stopTitle
    );
  };
}


export function loadNextAudio(
  audioContent,
  currentUUID,
  activeAudioIndex,
  timeListened,
  autoplayOn,
  stopTitle,
) {
  return async (dispatch) => {
    for (const content of audioContent) {
      if (content.uuid === currentUUID) {
        analyticsTrackAudioPartialListen(
          stopTitle,
          content.title,
          timeListened / content.duration,
        );

        break;
      }
    }

    dispatch(
      updateLocalPreferences(currentUUID, timeListened)
    );

    let newAudioIndex = null;
    let i = 1;

    while (newAudioIndex === null &&
           activeAudioIndex + i < audioContent.length) {
      // If the next item is the same depth then move to it
      // If the next item decrease the depth then move to it
      // Otherwise, continue traversing
      if (audioContent[activeAudioIndex + i].depth <=
          audioContent[activeAudioIndex].depth) {
        newAudioIndex = activeAudioIndex + i;
      } else {
        i++;
      }
    }

    if (newAudioIndex === null) {
      dispatch(audioDone);
      return;
    }

    const newActiveAudio = audioContent[activeAudioIndex + i];

    fireAudioAction(
      audioContent, newActiveAudio, dispatch, false, autoplayOn, stopTitle
    );
  };
}


export function loadNextAutoplayAudio(
  audioContent,
  currentUUID,
  activeAudioIndex,
  autoplayOn,
  stopTitle
) {
  return async (dispatch) => {
    if (activeAudioIndex + 1 >= audioContent.length) {
      dispatch(audioDone);
      return;
    }

    const newActiveAudio = audioContent[activeAudioIndex + 1];

    fireAudioAction(
      audioContent, newActiveAudio, dispatch, false, autoplayOn, stopTitle
    );
  };
}


export function loadPrevAudio(
  audioContent,
  currentUUID,
  activeAudioIndex,
  timeListened,
  autoplayOn,
  stopTitle
) {
  return async (dispatch) => {
    for (const content of audioContent) {
      if (content.uuid === currentUUID) {
        analyticsTrackAudioPartialListen(
          stopTitle,
          content.title,
          timeListened / content.duration,
        );

        break;
      }
    }

    dispatch(
      updateLocalPreferences(currentUUID, timeListened)
    );

    let newAudioIndex = null;
    let i = 1;

    while (newAudioIndex === null &&
           activeAudioIndex - i >= 0) {
      // If the prev item is the same depth then move to it
      // If the prev item decrease the depth then move to it
      // Otherwise, continue traversing
      if (audioContent[activeAudioIndex - i].depth <=
          audioContent[activeAudioIndex].depth) {
        newAudioIndex = activeAudioIndex - i;
      } else {
        i++;
      }
    }

    if (newAudioIndex === null) {
      return;
    }

    const newActiveAudio = audioContent[activeAudioIndex - i];

    fireAudioAction(
      audioContent, newActiveAudio, dispatch, false, autoplayOn, stopTitle
    );
  };
}

export function updateCurrentAudioRoute(route) {
  return {
    type: UPDATE_CURRENT_AUDIO_ROUTE,
    route,
  };
}

export function updateAudioCurrentTime(uuid, time) {
  return {
    type: UPDATE_AUDIO_CURRENT_TIME,
    uuid,
    time,
  };
}

export function audioDidFinishPlaying(uuid, time) {
  return {
    type: AUDIO_DID_FINISH_PLAYING,
    uuid,
    time,
  };
}

export function toggleAutoplaySuccess(autoplayOn) {
  analyticsTrackDeviceAutoPlay(autoplayOn);

  return {
    type: TOGGLE_AUTOPLAY,
    autoplayOn,
  };
}

export function toggleAutoplay(autoplayOn, timerActive) {
  return async (dispatch) => {
    const newAutoplayStatus = !autoplayOn;

    if (autoplayOn && timerActive) {
      dispatch(
        stopTimer()
      );
    }

    setAudioManagerEventListeners(dispatch, newAutoplayStatus, true);

    dispatch(
      toggleAutoplaySuccess(newAutoplayStatus)
    );
  };
}

export function togglePausePlay() {
  AudioManager.togglePlayPause();

  return {
    type: TOGGLE_PAUSE_PLAY,
  };
}

export function pauseAudio() {
  AudioManager.pause();

  return {
    type: PAUSE_AUDIO,
  };
}

export function playAudio() {
  AudioManager.play();

  return {
    type: PLAY_AUDIO,
  };
}

export function toggleTranscript() {
  return {
    type: TOGGLE_TRANSCRIPT,
  };
}

export function toggleAudioTranscript(uuid) {
  return {
    type: TOGGLE_AUDIO_TRANSCRIPT,
    uuid,
  };
}

export function cycleAudioSpeed(currentPlayRate) {
  let newRate;

  switch (currentPlayRate) {
    case PLAY_RATE_NORMAL: {
      newRate = PLAY_RATE_FAST;
      AudioManager.changeRate(1.5);
      break;
    }

    case PLAY_RATE_FAST: {
      newRate = PLAY_RATE_FASTEST;
      AudioManager.changeRate(2);
      break;
    }

    case PLAY_RATE_FASTEST: {
      newRate = PLAY_RATE_NORMAL;
      AudioManager.changeRate(1);
      break;
    }

    // no default
  }

  return {
    type: CYCLE_AUDIO_SPEED,
    playRate: newRate,
  };
}

export function rewindAudio(seconds) {
  AudioManager.rewind(seconds);

  return {
    type: REWIND_AUDIO,
    seconds,
  };
}

export function seekAudioToTime(time) {
  AudioManager.seekToTime(time);

  return {
    type: SEEK_AUDIO_TO_TIME,
    time,
  };
}

export function replayAudio() {
  AudioManager.replay();

  return {
    type: REPLAY_AUDIO,
  };
}

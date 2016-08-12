
import React, { PropTypes } from 'react';

import {
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';

import {
   screenReaderReloadLayout,
 } from '../actions/accessibility';

import {
  PLAYER_STATUS_FINISHED,
  PLAYER_STATUS_ERROR,
  PLAYER_STATUS_NOTLOADED,
  PLAYER_STATUS_UNLOADED,
  PLAYER_STATUS_LOADING,
} from '../actions/audio';

import ControlsView from './controlsView';
import TimeProgressView from './timeProgressView';
import AutoplayProgressView from './autoplayProgressView';
import ClosePlayerView from './closePlayerView';

import { BOTTOMBARHEIGHT } from './rootScreen';

import { OFF_BLACK } from '../styles';

export const BOTTOMPLAYERHEIGHT = 105;

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
  },
});

function nextAudioTitle(audioContent, nextUUID, defaultTitle) {
  if (nextUUID !== null) {
    return audioContent
      .filter((content) => {
        return content.uuid === nextUUID;
      })
      [0]
      .title;
  }
  return defaultTitle;
}

export const BottomPlayer = (props) => {
  const {
    togglePausePlay,
    rewindAudio,
    cycleAudioSpeed,
    unloadAudio,
    loadNextAudio,
    loadNextAutoplayAudio,
    loadPrevAudio,
    replayAudio,
    toggleAutoplay,
  } = props.actions;

  // Force the screen reader to update with bottom player
  screenReaderReloadLayout();

  const width = Dimensions.get('window').width;

  if (props.playerStatus === PLAYER_STATUS_ERROR ||
      props.playerStatus === PLAYER_STATUS_NOTLOADED ||
      props.playerStatus === PLAYER_STATUS_LOADING ||
      props.playerStatus === PLAYER_STATUS_UNLOADED) {
    // We don't want the bottom player:
    return null;
  }

  let progress;

  if (props.playerStatus === PLAYER_STATUS_FINISHED &&
      props.nextUUID === null) {
    return (
      <View
        style={[styles.bottomBar,
                { width, height: BOTTOMPLAYERHEIGHT,
                  bottom: BOTTOMBARHEIGHT,
                  backgroundColor: OFF_BLACK,
                 }]}
      >
        <ClosePlayerView
          stopTitle={props.stopTitle}
          closePlayer={() => { unloadAudio(); }}
          navToTourStop={() => { props.navToTourStop(); }}
        />
      </View>
    );
  } else if (props.playerStatus === PLAYER_STATUS_FINISHED &&
      props.nextUUID !== null) {
    // display the autoplay progress
    progress = (<AutoplayProgressView
      time={props.time}
      duration={props.duration}
      playerStatus={props.playerStatus}

      timerActive={props.timerActive}
      timerStartAt={props.timerStartAt}
      timerNumber={props.timerNumber}
      autoplayOn={props.autoplayOn}
      nextUUID={props.nextUUID}
      actions={{
        toggleAutoplay,
        loadNextAutoplayAudio: () => {
          loadNextAutoplayAudio(
            props.audioContent,
            props.currentUUID,
            props.index,
            props.time,
            props.autoplayOn
          );
        },
      }}
    />);
  } else {
    // display the time progress
    progress = (<TimeProgressView
      time={props.time}
      duration={props.duration}
    />);
  }

  let prevDisabled = false;
  let nextDisabled = false;
  const activeAudioIndex = props.audioContent.findIndex((content, index) => {
    return content.uuid === props.currentUUID;
  });

  if ((activeAudioIndex - 1) < 0) {
    prevDisabled = true;
  }
  if (activeAudioIndex + 1 >= props.audioContent.length) {
    nextDisabled = true;
  }

  return (
    <View
      style={[styles.bottomBar,
              { width, height: BOTTOMPLAYERHEIGHT,
                bottom: BOTTOMBARHEIGHT,
                backgroundColor: OFF_BLACK,
               }]}
      // Rerender when PLAYER_STATUS_FINISHED begins and ends
      key={props.playerStatus === PLAYER_STATUS_FINISHED}
    >
      {progress}
      <ControlsView
        stopTitle={props.stopTitle}
        audioTitle={props.audioTitle}
        nextAudioTitle={nextAudioTitle(props.audioContent, props.nextUUID, props.audioTitle)}
        time={props.time}
        playerStatus={props.playerStatus}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
        playRate={props.playRate}
        actions={{
          togglePausePlay,
          replayAudio,
          rewindAudio,
          cycleAudioSpeed,
          navToTourStop: props.navToTourStop,
          loadNextAudio: () => {
            loadNextAudio(
              props.audioContent,
              props.currentUUID,
              props.index,
              props.time,
              props.autoplayOn
            );
          },
          loadNextAutoplayAudio: () => {
            loadNextAutoplayAudio(
              props.audioContent,
              props.currentUUID,
              props.index,
              props.time,
              props.autoplayOn
            );
          },
          loadPrevAudio: () => {
            const { audioContent } = props;
            loadPrevAudio(
              audioContent,
              props.currentUUID,
              props.index,
              props.time,
              props.autoplayOn
            );
          },
        }}
      />
    </View>
  );
};

BottomPlayer.propTypes = {
  currentUUID: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  currentAudioRoute: PropTypes.object.isRequired,
  navToTourStop: PropTypes.func.isRequired,
  nextUUID: PropTypes.string,
  stopTitle: PropTypes.string.isRequired,
  audioTitle: PropTypes.string.isRequired,
  audioContent: PropTypes.array.isRequired,
  time: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  playRate: PropTypes.string.isRequired,
  playerStatus: PropTypes.string.isRequired,
  timerActive: PropTypes.bool.isRequired,
  timerStartAt: PropTypes.number.isRequired,
  timerNumber: PropTypes.number.isRequired,
  autoplayOn: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    togglePausePlay: PropTypes.func.isRequired,
    replayAudio: PropTypes.func.isRequired,
    rewindAudio: PropTypes.func.isRequired,
    cycleAudioSpeed: PropTypes.func.isRequired,
    loadNextAudio: PropTypes.func.isRequired,
    loadNextAutoplayAudio: PropTypes.func.isRequired,
    loadPrevAudio: PropTypes.func.isRequired,
    toggleAutoplay: PropTypes.func.isRequired,
  }).isRequired,
};

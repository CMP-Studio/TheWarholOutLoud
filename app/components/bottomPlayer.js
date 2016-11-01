
import React, { Component, PropTypes } from 'react';

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
  PLAYER_STATUS_PLAY,
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

class BottomPlayer extends Component {
  static propTypes = {
    currentUUID: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
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
      unloadAudio: PropTypes.func.isRequired,
      playAudio: PropTypes.func.isRequired,
    }).isRequired,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.playerStatus === PLAYER_STATUS_LOADING &&
        nextProps.playerStatus === PLAYER_STATUS_PLAY) {
      this.props.actions.playAudio();
    }
  }

  render() {
    const {
      currentUUID,
      index,
      navToTourStop,
      nextUUID,
      stopTitle,
      audioTitle,
      audioContent,
      time,
      duration,
      playRate,
      playerStatus,
      timerActive,
      timerStartAt,
      timerNumber,
      autoplayOn,
    } = this.props;

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
    } = this.props.actions;

    // Force the screen reader to update with bottom player
    screenReaderReloadLayout();

    const width = Dimensions.get('window').width;

    if (playerStatus === PLAYER_STATUS_ERROR ||
        playerStatus === PLAYER_STATUS_NOTLOADED ||
        playerStatus === PLAYER_STATUS_LOADING ||
        playerStatus === PLAYER_STATUS_UNLOADED) {
      // We don't want the bottom player:
      return null;
    }

    let progress;

    if (playerStatus === PLAYER_STATUS_FINISHED && nextUUID === null) {
      return (
        <View
          style={[styles.bottomBar,
                  { width, height: BOTTOMPLAYERHEIGHT,
                    bottom: BOTTOMBARHEIGHT,
                    backgroundColor: OFF_BLACK,
                   }]}
        >
          <ClosePlayerView
            stopTitle={stopTitle}
            closePlayer={() => { unloadAudio(); }}
            navToTourStop={() => { navToTourStop(); }}
          />
        </View>
      );
    } else if (playerStatus === PLAYER_STATUS_FINISHED &&
               nextUUID !== null) {
      // display the autoplay progress
      progress = (<AutoplayProgressView
        time={time}
        duration={duration}
        playerStatus={playerStatus}

        timerActive={timerActive}
        timerStartAt={timerStartAt}
        timerNumber={timerNumber}
        autoplayOn={autoplayOn}
        nextUUID={nextUUID}
        actions={{
          toggleAutoplay,
          loadNextAutoplayAudio: () => {
            loadNextAutoplayAudio(
              audioContent,
              currentUUID,
              index,
              autoplayOn
            );
          },
        }}
      />);
    } else {
      // display the time progress
      progress = (<TimeProgressView
        time={time}
        duration={duration}
      />);
    }

    let prevDisabled = false;
    let nextDisabled = false;
    const activeAudioIndex = audioContent.findIndex((content) => {
      return content.uuid === currentUUID;
    });

    if ((activeAudioIndex - 1) < 0) {
      prevDisabled = true;
    }
    if (activeAudioIndex + 1 >= audioContent.length) {
      nextDisabled = true;
    }

    return (
      <View
        style={[
          styles.bottomBar,
          {
            width,
            height: BOTTOMPLAYERHEIGHT,
            bottom: BOTTOMBARHEIGHT,
            backgroundColor: OFF_BLACK,
          },
        ]}
        // Rerender when PLAYER_STATUS_FINISHED begins and ends
        key={playerStatus === PLAYER_STATUS_FINISHED}
      >
        {progress}
        <ControlsView
          stopTitle={stopTitle}
          audioTitle={audioTitle}
          nextAudioTitle={nextAudioTitle(audioContent, nextUUID, audioTitle)}
          time={time}
          playerStatus={playerStatus}
          prevDisabled={prevDisabled}
          nextDisabled={nextDisabled}
          playRate={playRate}
          autoplayOn={autoplayOn}
          actions={{
            togglePausePlay,
            replayAudio,
            rewindAudio,
            cycleAudioSpeed,
            navToTourStop,
            loadNextAudio: () => {
              loadNextAudio(
                audioContent,
                currentUUID,
                index,
                time,
                autoplayOn
              );
            },
            loadNextAutoplayAudio: () => {
              loadNextAutoplayAudio(
                audioContent,
                currentUUID,
                index,
                autoplayOn
              );
            },
            loadPrevAudio: () => {
              loadPrevAudio(
                audioContent,
                currentUUID,
                index,
                time,
                autoplayOn
              );
            },
          }}
        />
      </View>
    );
  }
}

export default BottomPlayer;

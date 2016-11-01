
import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  PLAYER_STATUS_FINISHED,
 } from '../actions/audio';

import {
   parseDisplayText,
   parseVoiceoverText,
 } from '../utilities';

import { globalStyles } from '../styles';

import PlayPauseButton from './buttons/playPauseButton';
import PrevButton from './buttons/previousButton';
import NextButton from './buttons/nextButton';
import RewindButton from './buttons/rewindButton';
import ToggleSpeedButton from './buttons/toggleSpeedButton';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    position: 'relative',
  },
  titleRow: {
    justifyContent: 'center',
    marginBottom: 7,
  },
  titleText: {
    marginLeft: 3,
    marginRight: 3,
  },
  controlsRow: {
    justifyContent: 'space-around',
  },
});

class ControlsView extends Component {
  static propTypes = {
    stopTitle: PropTypes.string.isRequired,
    audioTitle: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    nextAudioTitle: PropTypes.string.isRequired,
    playRate: PropTypes.string.isRequired,
    playerStatus: PropTypes.string.isRequired,
    prevDisabled: PropTypes.bool.isRequired,
    nextDisabled: PropTypes.bool.isRequired,
    // autoplayOn is only used to figure out if rerender is nessecary
    autoplayOn: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      navToTourStop: PropTypes.func.isRequired,
      togglePausePlay: PropTypes.func.isRequired,
      replayAudio: PropTypes.func.isRequired,
      rewindAudio: PropTypes.func.isRequired,
      cycleAudioSpeed: PropTypes.func.isRequired,
      loadNextAudio: PropTypes.func.isRequired,
      loadNextAutoplayAudio: PropTypes.func.isRequired,
      loadPrevAudio: PropTypes.func.isRequired,
    }).isRequired,
  }

  shouldComponentUpdate(nextProps, nextState) {
    const statusChanged = this.props.playerStatus !== nextProps.playerStatus;
    const rateChanged = this.props.playRate !== nextProps.playRate;
    const titleChanged = this.props.audioTitle !== nextProps.audioTitle;
    const autoplayChanged = this.props.autoplayOn !== nextProps.autoplayOn;

    return statusChanged || rateChanged || titleChanged || autoplayChanged;
  }

  render() {
    const {
      navToTourStop,
      togglePausePlay,
      replayAudio,
      rewindAudio,
      cycleAudioSpeed,
      loadNextAudio,
      loadNextAutoplayAudio,
      loadPrevAudio,
    } = this.props.actions;

    const {
      playerStatus,
      nextAudioTitle,
      stopTitle,
      audioTitle,
      prevDisabled,
      nextDisabled,
      playRate,
    } = this.props;

    let title;
    let controlsDisabled = false;
    //
    if (playerStatus === PLAYER_STATUS_FINISHED) {
      // The player is in next up state:
      title = nextAudioTitle;
      controlsDisabled = true;
    } else {
      // The player is in play state:
      title = audioTitle;
    }

    return (
      <View style={styles.container}>
        {/* Title of stop and audio file */}
        <TouchableOpacity
          onPress={navToTourStop}
          accessible={true}
          accessibilityTraits={['button', 'header']}
          accessibilityLabel={`${parseVoiceoverText(title)}, ${stopTitle}. Double tap to return to the chapter listing for this story.`}
        >
          <View style={[styles.row, styles.titleRow]}>
            <Text style={[globalStyles.h2, { fontWeight: '300' }]}>
              {stopTitle}
            </Text>
            <Text style={[globalStyles.h2, { fontWeight: '500' }]}>
              &nbsp; {parseDisplayText(title)}
            </Text>
          </View>
        </TouchableOpacity>
        {/* Controls */}
        {/* Previous  */}
        <View style={[styles.row, styles.controlsRow]}>
          <View>
            <PrevButton
              disabled={controlsDisabled}
              onPress={() => {
                if (prevDisabled ||
                    this.props.time > 5) {
                  replayAudio();
                } else {
                  loadPrevAudio();
                }
              }}
            />
          </View>
          {/* Rewind */}
          <View>
            <RewindButton
              disabled={controlsDisabled}
              onPress={() => { rewindAudio(5); }}
            />
          </View>
          {/* Play/Pause */}
          <View>
            <PlayPauseButton
              playerStatus={playerStatus}
              onPress={() => {
                if (playerStatus === PLAYER_STATUS_FINISHED && nextDisabled) {
                  replayAudio();
                } else if (playerStatus === PLAYER_STATUS_FINISHED && !nextDisabled) {
                  loadNextAutoplayAudio();
                } else {
                  togglePausePlay();
                }
              }}
            />
          </View>
          {/* Speed */}
          <View>
            <ToggleSpeedButton
              disabled={controlsDisabled}
              onPress={() => { cycleAudioSpeed(playRate); }}
              playRate={playRate}
            />
          </View>
          {/* Next */}
          <View>
            <NextButton
              disabled={nextDisabled || controlsDisabled}
              onPress={() => { loadNextAudio(); }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default ControlsView;

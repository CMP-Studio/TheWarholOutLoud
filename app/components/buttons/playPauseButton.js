
import React, { PropTypes } from 'react';

import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import { OFF_WHITE } from '../../styles';

import {
  PLAYER_STATUS_PAUSE,
  PLAYER_STATUS_PLAY,
  PLAYER_STATUS_FINISHED,
  PLAYER_STATUS_NOTLOADED,
 } from '../../actions/audio';

const styles = StyleSheet.create({
  pausePlayButton: {
    width: 35,
    height: 35,
  },
});

const PlayPauseButton = (props) => {
  let accessibilityLabel;
  let accessibilityTraits;
  let source;

  switch (props.playerStatus) {
    case PLAYER_STATUS_NOTLOADED:
    case PLAYER_STATUS_FINISHED:
    case PLAYER_STATUS_PAUSE: {
      source = require('../../assets/PlayButton.png');
      accessibilityLabel = 'Play';
      accessibilityTraits = ['button', 'startsMedia'];
      break;
    }

    case PLAYER_STATUS_PLAY: {
      source = require('../../assets/PauseButton.png');
      accessibilityLabel = 'Pause';
      accessibilityTraits = ['button'];
      break;
    }

    // no default
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      accessible={true}
      accessibilityTraits={accessibilityTraits}
      accessibilityLabel={accessibilityLabel}
    >
      <Image
        resizeMode={'contain'}
        style={[styles.pausePlayButton, { tintColor: OFF_WHITE }]}
        source={source}
      />
    </TouchableOpacity>
  );
};

PlayPauseButton.propTypes = {
  playerStatus: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default PlayPauseButton;

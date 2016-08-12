
import React, { PropTypes } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import ProgressBar from './progressBar';
import SwitchButton from './buttons/switchButton';

import { globalStyles } from '../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    position: 'relative',
  },
  autoplayRow: {
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 3,
    height: 16,
  },
  autoplayText: {
    marginLeft: 5,
    marginRight: 5,
  },
  autoplaySwitch: {
    marginRight: 5,
    marginLeft: 5,
    flexDirection: 'row',
  },
});

const AutoplayProgressView = (props) => {
  const {
    toggleAutoplay,
    loadNextAutoplayAudio,
  } = props.actions;

  const {
    timerActive,
    timerNumber,
    autoplayOn,
    timerStartAt,
  } = props;

  // If autoplay has reached 0, trigger next audio
  // (Can this be moved somewhere else?)
  if (timerActive && timerNumber <= 0) {
    loadNextAutoplayAudio();
  }

  // Percentage
  let progressBarPercentage = 0;
  if (autoplayOn && timerActive) {
    progressBarPercentage = (timerStartAt - timerNumber) / timerStartAt;
  }

  // Countdown text
  let countDownText = '';
  if (timerActive && autoplayOn) {
    if (timerNumber === 1) {
      countDownText = 'Starts in 1 second';
    } else {
      countDownText = `Starts in ${timerNumber} seconds`;
    }
  }

  let autoplayVoiceoverMessage;
  if (autoplayOn) {
    autoplayVoiceoverMessage = 'Autoplay, on. Double tap to turn off.';
  } else {
    autoplayVoiceoverMessage = 'Autoplay, off. Double tap to turn on.';
  }

  return (
    <View style={styles.container}>
      <ProgressBar
        percentage={progressBarPercentage}
      />
      <View
        style={[styles.row, styles.autoplayRow]}
        accessible={true}
        accessibilityLabel={autoplayVoiceoverMessage}
        onAccessibilityTap={() => {
          toggleAutoplay(autoplayOn, timerActive);
        }}
      >
        <View>
          <Text style={[styles.autoplayText, globalStyles.progressLabel]}>
            {countDownText}
          </Text>
        </View>
        <View style={styles.autoplaySwitch}>
          <Text style={[styles.autoplayText, globalStyles.progressLabel]}>
            Autoplay
          </Text>
          <SwitchButton
            width={28}
            height={16}
            onPress={() => {
              toggleAutoplay(autoplayOn, timerActive);
            }}
            value={autoplayOn}
          />
        </View>
      </View>
    </View>
  );
};

AutoplayProgressView.propTypes = {
  timerActive: PropTypes.bool.isRequired,
  timerStartAt: PropTypes.number.isRequired,
  timerNumber: PropTypes.number.isRequired,
  autoplayOn: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    toggleAutoplay: PropTypes.func.isRequired,
    loadNextAutoplayAudio: PropTypes.func.isRequired,
  }).isRequired,
};

export default AutoplayProgressView;


import React, { PropTypes } from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  PLAY_RATE_NORMAL,
  PLAY_RATE_FAST,
  PLAY_RATE_FASTEST,
 } from '../../actions/audio';

import { OFF_WHITE, GRAY } from '../../styles';

const styles = StyleSheet.create({
  toggleSpeedLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  toggleSpeedText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});

const ToggleSpeedButton = (props) => {
  let rateText;
  let accessibilityLabel;

  switch (props.playRate) {
    case PLAY_RATE_NORMAL: {
      rateText = '1';
      accessibilityLabel = 'Speed 1x.';
      break;
    }

    case PLAY_RATE_FAST: {
      rateText = '1.5';
      accessibilityLabel = 'Speed 1.5x.';
      break;
    }

    case PLAY_RATE_FASTEST: {
      rateText = '2';
      accessibilityLabel = 'Speed 2x.';
      break;
    }

    // no default
  }

  if (props.disabled) {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        accessible={true}
        accessibilityTraits={['button', 'disabled']}
        accessibilityLabel={accessibilityLabel}
      >
        <View style={styles.toggleSpeedLabel}>
          <Text style={[styles.toggleSpeedText, { color: GRAY }]}>
            {rateText}
          </Text>
          <Text
            allowFontScaling={false}
            style={[styles.toggleSpeedText, {
              fontSize: 16,
              marginLeft: 2,
              color: GRAY,
            }]}
          >
            x
          </Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    accessibilityLabel += ' Double tap to change audio speed.';
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={props.onPress}
        accessible={true}
        accessibilityTraits={'button'}
        accessibilityLabel={accessibilityLabel}
      >
        <View style={styles.toggleSpeedLabel}>
          <Text style={[styles.toggleSpeedText, { color: OFF_WHITE }]}>
            {rateText}
          </Text>
          <Text
            style={[styles.toggleSpeedText, {
              fontSize: 16,
              marginLeft: 2,
              color: OFF_WHITE,
            }]}
          >
            x
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
};

ToggleSpeedButton.propTypes = {
  playRate: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default ToggleSpeedButton;

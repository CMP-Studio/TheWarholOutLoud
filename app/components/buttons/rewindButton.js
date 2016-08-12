
import React, { PropTypes } from 'react';

import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import { OFF_WHITE, GRAY } from '../../styles';

const styles = StyleSheet.create({
  rewindButton: {
    width: 40,
    height: 40,
  },
  rewindLabel: {
    fontSize: 13,
    fontWeight: '500',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 13,
    left: 16,
  },
});

const RewindButton = (props) => {
  let accessibilityTraits;

  if (props.disabled) {
    accessibilityTraits = ['button', 'disabled'];
  } else {
    accessibilityTraits = 'button';
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      accessible={true}
      accessibilityTraits={accessibilityTraits}
      accessibilityLabel={'Rewind 5 seconds'}
    >
      <Image
        resizeMode={'contain'}
        style={[styles.rewindButton, {
          tintColor: props.disabled ? GRAY : OFF_WHITE,
        }]}
        source={require('../../assets/RewindButton.png')}
      />
      <Text
        allowFontScaling={false}
        style={[styles.rewindLabel, {
          color: props.disabled ? GRAY : OFF_WHITE,
        }]}
      >
        5
      </Text>
    </TouchableOpacity>
  );
};

RewindButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export default RewindButton;

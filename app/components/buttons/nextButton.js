
import React, { PropTypes } from 'react';

import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import { OFF_WHITE, GRAY } from '../../styles';

const styles = StyleSheet.create({
  nextButtonImage: {
    width: 40,
    height: 40,
  },
});

const NextButton = (props) => {
  if (props.disabled) {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        accessible={true}
        accessibilityTraits={['button', 'disabled']}
        accessibilityLabel={'Next'}
      >
        <Image
          style={[styles.nextButtonImage, { tintColor: GRAY }]}
          source={require('../../assets/SkipButton.png')}
        />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={props.onPress}
        accessible={true}
        accessibilityTraits={['button', 'startsMedia']}
        accessibilityLabel={'Next'}
      >
        <Image
          style={[styles.nextButtonImage, { tintColor: OFF_WHITE }]}
          source={require('../../assets/SkipButton.png')}
        />
      </TouchableOpacity>
    );
  }
};

NextButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export default NextButton;

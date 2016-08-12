
import React, { PropTypes } from 'react';

import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import { OFF_WHITE, GRAY } from '../../styles';

const styles = StyleSheet.create({
  backButtonImage: {
    width: 40,
    height: 40,
  },
});

const BackButton = (props) => {
  if (props.disabled) {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        accessible={true}
        accessibilityTraits={['button', 'disabled']}
        accessibilityLabel={'Previous'}
      >
        <Image
          style={[styles.backButtonImage, { tintColor: GRAY }]}
          source={require('../../assets/BackButton.png')}
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
        accessibilityLabel={'Previous'}
      >
        <Image
          style={[styles.backButtonImage, { tintColor: OFF_WHITE }]}
          source={require('../../assets/BackButton.png')}
        />
      </TouchableOpacity>
    );
  }
};

BackButton.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export default BackButton;

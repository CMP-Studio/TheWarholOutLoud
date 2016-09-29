
import React, { PropTypes } from 'react';

import {
  View,
  TouchableOpacity,
} from 'react-native';

import { OFF_WHITE, GREEN, GRAY } from '../../styles';

const SwitchButton = (props) => {
  if (props.value) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={props.onPress}
      >
        <View
          style={{
            backgroundColor: GREEN,
            width: props.width,
            height: props.height + 2,
            borderRadius: props.height / 2,
            alignItems: 'flex-end',
          }}
        >
          <View
            style={{
              backgroundColor: OFF_WHITE,
              borderWidth: 1,
              borderColor: GREEN,
              width: props.height,
              height: props.height,
              borderRadius: props.height / 2,
              position: 'relative',
              top: 1,
              right: 1,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.onPress}
    >
      <View
        style={{
          backgroundColor: '#DADADA',
          borderWidth: 1,
          borderColor: GRAY,
          width: props.width,
          height: props.height + 2,
          borderRadius: props.height / 2,
          alignItems: 'flex-start',
        }}
      >
        <View
          style={{
            backgroundColor: OFF_WHITE,
            borderWidth: 1,
            borderColor: GRAY,
            width: props.height,
            height: props.height,
            borderRadius: props.height / 2,
            position: 'relative',
            left: -1,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

SwitchButton.propTypes = {
  value: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default SwitchButton;

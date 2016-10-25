
import React, { PropTypes } from 'react';

import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

import { globalStyles } from '../../styles';

const styles = StyleSheet.create({
  wideButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    height: 45,
  },
});

const WideButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      styles={styles.container}
      disabled={props.disabled || false}
    >
      <View style={[styles.wideButton, props.style]}>
        <Text style={[globalStyles.h1, props.textStyle, { flex: 1 }]}>
          {props.text}
        </Text>
        {props.accessoryView}
      </View>
    </TouchableOpacity>
  );
};

WideButton.propTypes = {
  style: PropTypes.oneOfType([
    View.propTypes.style,
    PropTypes.object,
  ]),
  textStyle: PropTypes.oneOfType([
    Text.propTypes.style,
    PropTypes.object,
  ]),
  disabled: PropTypes.bool,
  accessoryView: PropTypes.object,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default WideButton;


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
  style: PropTypes.object,
  textStyle: PropTypes.object,
  accessoryView: PropTypes.object,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default WideButton;

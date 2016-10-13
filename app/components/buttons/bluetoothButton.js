
import React, { PropTypes } from 'react';

import {
  Image,
  Alert,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import WideButton from './wideButton';

import { OFF_WHITE, OFF_BLACK, TURQUOISE } from '../../styles';

const styles = StyleSheet.create({
  onStyle: {
    borderColor: OFF_BLACK,
  },
  offStyle: {
    backgroundColor: TURQUOISE,
    borderWidth: 0,
    marginBottom: 0,
  },
  offTextStyle: {
    color: OFF_WHITE,
  },
});

const BluetoothButton = (props) => {
  let bluetoothButton;

  if (props.bluetoothOn) {
    bluetoothButton = (<WideButton
      style={[styles.onStyle, props.style]}
      textStyle={props.textStyle}
      text={"Bluetooth is on"}
      disabled={true}
      accessoryView={
        <Image
          source={require('../../assets/checkmark.png')}
        />
      }
    />);
  } else {
    bluetoothButton = (<WideButton
      style={[styles.offStyle, props.style]}
      textStyle={[styles.offTextStyle, props.textStyle]}
      text={'Turn Bluetooth on'}
      onPress={() => {
        Alert.alert(
          'Bluetooth',
          'Go to Settings, then Bluetooth to turn on Bluetooth.',
        );
      }}
    />);
  }

  return bluetoothButton;
};

BluetoothButton.propTypes = {
  bluetoothOn: PropTypes.bool.isRequired,
  style: PropTypes.oneOfType([
    View.propTypes.style,
    PropTypes.object,
  ]),
  textStyle: PropTypes.oneOfType([
    Text.propTypes.style,
    PropTypes.object,
  ]),
};

export default BluetoothButton;


import React, { PropTypes } from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Alert,
} from 'react-native';

import SwitchButton from './buttons/switchButton';
import WideButton from './buttons/wideButton';

import { BOTTOMBARHEIGHT } from './rootScreen';
import { BOTTOMPLAYERHEIGHT } from './bottomPlayer';

import {
  globalStyles,
  OFF_WHITE,
  LIGHT_BLUE,
  TURQUOISE,
  OFF_BLACK,
} from '../styles';

import {
  LOCATION_SERVICES_STATUS_NOTDETERMINED,
  LOCATION_SERVICES_STATUS_AUTHORIZED,
  LOCATION_SERVICES_STATUS_DENIED,
  requestLocationServicesAuthorization,
} from '../actions/beacon';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    marginTop: 65,
  },
  cell: {
    flexDirection: 'column',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  cellTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  },
  cellBody: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: LIGHT_BLUE,
  },
});

const SettingsScreen = (props) => {
  const {
    timerActive,
    autoplayOn,
    bluetoothOn,
    locationServicesStatus,
  } = props;

  const {
    toggleAutoplay,
  } = props.actions;

  let autoplayVoiceoverMessage;
  if (autoplayOn) {
    autoplayVoiceoverMessage = 'Autoplay, on. Double tap to turn off.';
  } else {
    autoplayVoiceoverMessage = 'Autoplay, off. Double tap to turn on.';
  }

  let bluetoothButton;

  if (bluetoothOn) {
    bluetoothButton = (<WideButton
      style={{
        borderColor: OFF_BLACK,
      }}
      text={"Bluetooth is on"}
      disabled={true}
      accessoryView={
        <Image
          source={require('../assets/checkmark.png')}
        />
      }
    />);
  } else {
    bluetoothButton = (<WideButton
      style={{
        backgroundColor: TURQUOISE,
        borderWidth: 0,
        marginBottom: 0,
      }}
      textStyle={{
        color: OFF_WHITE,
      }}
      text={'Turn Bluetooth on'}
      onPress={() => {
        Alert.alert(
          'Bluetooth',
          'Go to settings to turn bluetooth on.',
        );
      }}
    />);
  }

  let locationServicesButton;

  switch (locationServicesStatus) {
    case LOCATION_SERVICES_STATUS_NOTDETERMINED:
      locationServicesButton = (<WideButton
        style={{
          backgroundColor: TURQUOISE,
          borderWidth: 0,
          marginBottom: 0,
        }}
        textStyle={{
          color: OFF_WHITE,
        }}
        text={'Allow location access'}
        onPress={() => {
          requestLocationServicesAuthorization();
        }}
      />);
      break;

    case LOCATION_SERVICES_STATUS_DENIED:
      locationServicesButton = (<WideButton
        style={{
          backgroundColor: TURQUOISE,
          borderWidth: 0,
          marginBottom: 0,
        }}
        textStyle={{
          color: OFF_WHITE,
        }}
        text={'Location access denied'}
        onPress={() => {
          Alert.alert(
            'Location Access',
            'Go to settings to allow The Warhol location access.',
          );
        }}
      />);
      break;

    case LOCATION_SERVICES_STATUS_AUTHORIZED:
      locationServicesButton = (<WideButton
        style={{
          borderColor: OFF_BLACK,
          marginBottom: 0,
        }}
        text={'Location access allowed'}
        disabled={true}
        accessoryView={
          <Image
            source={require('../assets/checkmark.png')}
          />
        }
      />);
      break;

    // no default
  }

  return (
    <View style={[styles.container, { marginBottom: BOTTOMBARHEIGHT }]}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 10,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: BOTTOMPLAYERHEIGHT + 10,
        }}
        automaticallyAdjustContentInsets={false}
      >
        <View style={styles.cell}>
          <View style={styles.cellTitle}>
            <Text style={globalStyles.disclosure}>
              Near Me
            </Text>
          </View>
          <View style={styles.cellBody}>
            <Text style={[globalStyles.body, { marginBottom: 5 }]}>
              {'At the museum, we show you stories based on what’s near you.'
               + '\n\n' +
              'To use this feature, we’ll need two things from you…'}
            </Text>
            {locationServicesButton}
            {bluetoothButton}
          </View>
        </View>
        <View style={styles.cell}>
          <View
            style={styles.cellTitle}
            accessible={true}
            accessibilityLabel={autoplayVoiceoverMessage}
            onAccessibilityTap={() => {
              toggleAutoplay(autoplayOn, timerActive);
            }}
          >
            <Text style={[globalStyles.disclosure, { flex: 1 }]}>
              Autoplay
            </Text>
            <SwitchButton
              width={40}
              height={25}
              onPress={() => {
                toggleAutoplay(autoplayOn, timerActive);
              }}
              value={autoplayOn}
            />
          </View>
          <View style={styles.cellBody}>
            <Text style={globalStyles.body}>
              {'Out Loud is organized into stories. Each story contains multiple audio files, or chapters, related to one theme or artwork.'
               + '\n\n' +
              'If you turn on autoplay, we’ll automatically play all chapters within a story.'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

SettingsScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
  timerActive: PropTypes.bool.isRequired,
  autoplayOn: PropTypes.bool.isRequired,
  bluetoothOn: PropTypes.bool.isRequired,
  locationServicesStatus: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    toggleAutoplay: PropTypes.func.isRequired,
  }),
};

export default SettingsScreen;

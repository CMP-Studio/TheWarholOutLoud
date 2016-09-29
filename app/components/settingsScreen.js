
import React, { PropTypes } from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

import SwitchButton from './buttons/switchButton';

import BluetoothButton from './buttons/bluetoothButton';
import LocationServicesButton from './buttons/locationServicesButton';

import { BOTTOMBARHEIGHT } from './rootScreen';
import { BOTTOMPLAYERHEIGHT } from './bottomPlayer';

import {
  globalStyles,
  LIGHT_BLUE,
} from '../styles';

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
            <LocationServicesButton
              locationServicesStatus={locationServicesStatus}
            />
            <BluetoothButton
              bluetoothOn={bluetoothOn}
            />
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

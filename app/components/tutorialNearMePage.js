
import React, { PropTypes } from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import BluetoothButton from './buttons/bluetoothButton';
import LocationServicesButton from './buttons/locationServicesButton';

import {
  LOCATION_SERVICES_STATUS_AUTHORIZED,
} from '../actions/beacon';

import { OFF_WHITE, TURQUOISE, LIGHT_GRAY } from '../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 15,
  },
  titleRow: {
    flexDirection: 'row',
    marginBottom: 35,
  },
  titleLogo: {
    tintColor: TURQUOISE,
  },
  titleText: {
    marginHorizontal: 15,
    alignSelf: 'flex-end',
    fontWeight: '500',
  },
  text: {
    color: OFF_WHITE,
    fontSize: 18,
  },
  buttonsContainer: {
    marginTop: 60,
  },
  firstButtonsContainer: {
    marginBottom: 10,
  },
});

const TutorialNearMePage = (props) => {
  const {
    bluetoothOn,
    locationServicesStatus,
  } = props;

  return (
    <View style={[styles.container]}>
      <View style={styles.titleRow}>
        <Image
          style={styles.titleLogo}
          source={require('../assets/nearTab.png')}
        />
        <Text style={[styles.titleText, styles.text]}>
          Near Me
        </Text>
      </View>
      <Text style={styles.text}>
        {'While at the museum, we show you stories based on what’s near you.'
         + '\n\n' +
        'To use this feature, we’ll need two things from you…'}
      </Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.firstButtonsContainer}>
          <LocationServicesButton
            locationServicesStatus={locationServicesStatus}
            style={locationServicesStatus === LOCATION_SERVICES_STATUS_AUTHORIZED ? {
              borderColor: LIGHT_GRAY,
              backgroundColor: LIGHT_GRAY,
            } : {}}
          />
        </View>
        <BluetoothButton
          bluetoothOn={bluetoothOn}
          style={bluetoothOn ? {
            borderColor: LIGHT_GRAY,
            backgroundColor: LIGHT_GRAY,
          } : {}}
        />
      </View>
    </View>
  );
};

TutorialNearMePage.propTypes = {
  bluetoothOn: PropTypes.bool.isRequired,
  locationServicesStatus: PropTypes.string.isRequired,
};

export default TutorialNearMePage;

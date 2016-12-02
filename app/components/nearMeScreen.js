
import React, { Component, PropTypes } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import NavigationBar from './navigationBar';
import Grid from './grid';
import AmenitiesItem from './amenitiesItem';
import TourStop from '../containers/tourStop';

import { BOTTOMBARHEIGHT } from './rootScreen';
import { BOTTOMPLAYERHEIGHT } from './bottomPlayer';
import { TAB_NEARME } from '../actions/navigation';
import { PLAYER_STATUS_PLAY } from '../actions/audio';

import BluetoothButton from './buttons/bluetoothButton';
import LocationServicesButton from './buttons/locationServicesButton';

import {
   screenReaderScreenChanged,
 } from '../actions/accessibility';

 import {
    analyticsTrackBeaconRegion,
  } from '../actions/analytics';

import { globalStyles, TEAL, OFF_BLACK, LIGHT_BLUE } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginTop: 65,
    marginBottom: 100,
  },
  messageContainer: {
    flex: 1,
    marginHorizontal: 10,
    paddingTop: 25,
    paddingBottom: 15,
  },
  amenitiesContainer: {
    margin: 10,
    marginTop: 25,
    padding: 10,
    paddingBottom: 0,
  },
  amenitiesTitle: {
    marginBottom: 10,
  },
  buttonsContainer: {
    marginTop: 15,
  },
  settingContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: LIGHT_BLUE,
  },
});

// I tried to do this through state but couldn't...
let lastSeenNumber = 0;

class NearMeScreen extends Component {
  static title = 'Near Me'

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    playerOpen: PropTypes.bool.isRequired,
    closeTourStops: PropTypes.object.isRequired,
    regions: PropTypes.array.isRequired,
    amenities: PropTypes.array.isRequired,
    timerActive: PropTypes.bool.isRequired,
    activeTab: PropTypes.string.isRequired,
    screenReader: PropTypes.bool.isRequired,
    atNearMeRoot: PropTypes.bool.isRequired,
    playerStatus: PropTypes.string.isRequired,
    floor: PropTypes.number,
    tracking: PropTypes.bool,
    bluetoothOn: PropTypes.bool.isRequired,
    locationServicesStatus: PropTypes.string.isRequired,
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.activeTab === TAB_NEARME && nextProps.atNearMeRoot;
  }

  render() {
    const tourStops = this.props.closeTourStops;
    const tourStopsNum = tourStops.length || 0;

    let contentView;
    let debugView;

    if (this.props.tracking === false) {
      contentView = (
        <View style={[styles.messageContainer, styles.settingContainer]}>
          <Text style={globalStyles.body}>
            {'While at the museum, we show you stories based on what’s near you.'
             + '\n\n' +
            'To use this feature, we’ll need two things from you…'}
          </Text>
          <View style={styles.buttonsContainer}>
            <LocationServicesButton
              locationServicesStatus={this.props.locationServicesStatus}
            />
            <BluetoothButton
              bluetoothOn={this.props.bluetoothOn}
            />
          </View>
        </View>
      );
    } else if (this.props.tracking === true) {
      let storiesMessage;

      if (this.props.floor === null) {
        storiesMessage = 'While at the museum, we show you stories based on what’s near you.';
      } else if (this.props.floor === 7) {
        if (tourStopsNum === 0) {
          storiesMessage = 'There are no stories near you.';
        } else if (tourStopsNum === 1) {
          storiesMessage = 'There is one story near you.';
        } else {
          storiesMessage = `There are ${tourStopsNum} stories near you.`;
        }
      } else {
        storiesMessage = 'Stories are available on floor 7.';
      }

      // Only announce changes when:
      // 1. The Near Me Tab is active
      // 2. The navigator is at the root view
      // 3. The number of stops has changed
      // 4. The autoplay timer is not active
      // 5. The player is not currently playing
      if (this.props.activeTab === TAB_NEARME &&
          this.props.atNearMeRoot &&
          lastSeenNumber !== tourStopsNum &&
          !this.props.timerActive &&
          this.props.playerStatus !== PLAYER_STATUS_PLAY
      ) {
        lastSeenNumber = tourStopsNum;
        screenReaderScreenChanged(storiesMessage);
      }

      const regionsDetected = this.props.regions ? this.props.regions.join(', ') : '';

      if (regionsDetected) {
        analyticsTrackBeaconRegion(regionsDetected);

        if (__DEV__) {
          debugView = (
            <View
              style={{
                height: 25,
                backgroundColor: LIGHT_BLUE,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                }}
              >
                {`Regions: ${regionsDetected}`}
              </Text>
            </View>
          );
        }
      }

      let amenitiesList;
      if (this.props.amenities.length !== 0) {
        amenitiesList = (
          <View style={[styles.amenitiesContainer, { backgroundColor: LIGHT_BLUE }]}>
            <Text
              allowFontScaling={false}
              style={[styles.amenitiesTitle, globalStyles.h1]}
            >
              Amenities
            </Text>
            {this.props.amenities.map((amenity, index) => {
              return (
                <AmenitiesItem
                  key={amenity.uuid}
                  amenity={amenity}
                  border={index !== (this.props.amenities.length - 1)}
                />
              );
            })}
          </View>
        );
      }

      contentView = (
        <View>
          <View style={styles.messageContainer}>
            <Text style={globalStyles.body}>
              {storiesMessage}
            </Text>
          </View>
          <Grid
            items={tourStops}
            screenReader={this.props.screenReader}
            onCellPress={(item) => {
              this.props.navigator.push({
                title: item.shortTitle,
                component: TourStop,
                barTintColor: '#ffffff',
                tintColor: TEAL,
                titleTextColor: OFF_BLACK,
                shadowHidden: true,
                passProps: {
                  tab: TAB_NEARME,
                  tourStop: item,
                  initialCategory: item.initialAudio,
                  imageURL: item.imageURL,
                },
              });
            }}
          />
          {amenitiesList}
        </View>
      );
    }

    let floor;
    if (this.props.floor === null) {
      floor = 'Near Me';
    } else if (this.props.floor === 0) {
      floor = 'Underground';
    } else if (this.props.floor === 1) {
      floor = 'Entrance Space';
    } else {
      floor = `Floor ${this.props.floor}`;
    }

    let containerMargin = BOTTOMBARHEIGHT;
    if (this.props.playerOpen) {
      containerMargin = BOTTOMPLAYERHEIGHT + BOTTOMBARHEIGHT;
    }

    return (
      <View style={{ flex: 1 }}>
        <NavigationBar
          label={floor}
          labelStyle={{
            color: OFF_BLACK,
          }}
          barStyle={{
            backgroundColor: '#ffffff',
            height: 44,
          }}
        />
        <View
          style={[styles.container, { marginBottom: containerMargin }]}
        >
          {debugView}
          <ScrollView
            automaticallyAdjustContentInsets={false}
          >
            {contentView}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default NearMeScreen;

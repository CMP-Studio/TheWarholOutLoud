
import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import Grid from './grid';
import TourStop from '../containers/tourStop';

import { BOTTOMBARHEIGHT } from './rootScreen';
import { BOTTOMPLAYERHEIGHT } from './bottomPlayer';
import { TAB_STORIES } from '../actions/navigation';

import { TEAL, OFF_BLACK } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

class EverythingScreen extends Component {
  static title = 'Everything';

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    playerOpen: PropTypes.bool.isRequired,
    tourStops: PropTypes.object.isRequired,
    screenReader: PropTypes.bool.isRequired,
    currentStopUUID: PropTypes.string.isRequired,
  }

  render() {
    let containerMargin = BOTTOMBARHEIGHT;
    if (this.props.playerOpen) {
      containerMargin = BOTTOMPLAYERHEIGHT + BOTTOMBARHEIGHT;
    }

    return (
      <View
        style={[styles.container, { marginBottom: containerMargin }]}
      >
        <ScrollView
          automaticallyAdjustContentInsets={false}
        >
          <Grid
            items={this.props.tourStops}
            selected={this.props.currentStopUUID}
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
                  tab: TAB_STORIES,
                  tourStop: item,
                  initialCategory: item.initialAudio,
                  imageURL: item.imageURL,
                },
              });
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

export default EverythingScreen;

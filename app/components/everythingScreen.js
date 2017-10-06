
import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import GridList from './gridList';

import { BOTTOMBARHEIGHT } from './rootScreen';
import { BOTTOMPLAYERHEIGHT } from './bottomPlayer';

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
        <GridList
          items={this.props.tourStops}
          selected={this.props.currentStopUUID}
          screenReader={this.props.screenReader}
          navigator={this.props.navigator}
        />
      </View>
    );
  }
}

export default EverythingScreen;

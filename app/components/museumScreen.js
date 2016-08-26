
import React, { Component, PropTypes } from 'react';

import {
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import DisclosureCell from './disclosureCell';
import AmenitiesScreen from '../containers/amenities';
import AboutScreen from './aboutScreen';
import HowToScreen from './howToScreen';
import CreditsScreen from './creditsScreen';
import AccessibilityScreen from './accessibilityScreen';

import { BOTTOMBARHEIGHT } from './rootScreen';
import { BOTTOMPLAYERHEIGHT } from './bottomPlayer';

import { OFF_BLACK, TEAL, LIGHT_BLUE } from '../styles';

const styles = StyleSheet.create({
  container: {
    marginBottom: BOTTOMBARHEIGHT,
    alignItems: 'stretch',
    flex: 1,
  },
  header: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  list: {
    position: 'absolute',
    flex: 0,
    flexDirection: 'column',
  },
  statusBar: {
    height: 20,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

class MuseumScreen extends Component {
  static title = 'Museum'

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    playerOpen: PropTypes.bool.isRequired,
    screenReader: PropTypes.bool.isRequired,
  }

  render() {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    let bottomOffset = BOTTOMBARHEIGHT;
    if (this.props.playerOpen) {
      bottomOffset += BOTTOMPLAYERHEIGHT;
    }

    let cellColor = 'rgba(255, 255, 255, .85);';
    let cellHighlightColor = 'rgba(255, 255, 255, .75);';
    let cellBorderColor = LIGHT_BLUE;

    return (
      <View style={[styles.container]}>
        <View style={styles.header}>
          <Image
            accessible={true}
            accessibilityLabel={'The Andy Warhol Museum'}
            accessibilityTraits={'image'}
            resizeMode={'cover'}
            style={[styles.image, { width, height }]}
            source={{ uri: 'museumBackground.png' }}
          />
        </View>
        <View
          style={[styles.list, { width, bottom: bottomOffset }]}
        >
          <View>
            <DisclosureCell
              accessibility={{
                traits: ['button'],
                label: 'About The Andy Warhol Museum.',
              }}
              border={true}
              borderColor={cellBorderColor}
              color={cellColor}
              highlightColor={cellHighlightColor}
              title="About The Andy Warhol Museum"
              onPress={() => {
                this.props.navigator.push({
                  title: 'About',
                  component: AboutScreen,
                  barTintColor: '#ffffff',
                  tintColor: TEAL,
                  titleTextColor: OFF_BLACK,
                  shadowHidden: true,
                  passProps: {
                    navigator: this.props.navigator,
                  },
                });
              }}
            />
            <DisclosureCell
              accessibility={{
                traits: ['button'],
                label: 'Accessibility at The Warhol.',
              }}
              border={true}
              borderColor={cellBorderColor}
              color={cellColor}
              highlightColor={cellHighlightColor}
              title="Accessibility at The Warhol"
              onPress={() => {
                this.props.navigator.push({
                  title: 'Accessibility',
                  component: AccessibilityScreen,
                  barTintColor: '#ffffff',
                  tintColor: TEAL,
                  titleTextColor: OFF_BLACK,
                  shadowHidden: true,
                  passProps: {
                    navigator: this.props.navigator,
                  },
                });
              }}
            />
            <DisclosureCell
              accessibility={{
                traits: ['button'],
                label: 'Museum Amenities.',
              }}
              border={true}
              borderColor={cellBorderColor}
              color={cellColor}
              highlightColor={cellHighlightColor}
              title="Museum amenities"
              onPress={() => {
                this.props.navigator.push({
                  title: 'Amenities',
                  component: AmenitiesScreen,
                  barTintColor: '#ffffff',
                  tintColor: TEAL,
                  titleTextColor: OFF_BLACK,
                  shadowHidden: true,
                  passProps: {
                    navigator: this.props.navigator,
                  },
                });
              }}
            />
            <DisclosureCell
              accessibility={{
                traits: ['button'],
                label: 'How to use this app.',
              }}
              border={true}
              borderColor={cellBorderColor}
              color={cellColor}
              highlightColor={cellHighlightColor}
              title="How to use this app"
              onPress={() => {
                this.props.navigator.push({
                  title: 'How to use this app',
                  component: HowToScreen,
                  barTintColor: '#ffffff',
                  tintColor: TEAL,
                  titleTextColor: OFF_BLACK,
                  shadowHidden: true,
                  passProps: {
                    navigator: this.props.navigator,
                  },
                });
              }}
            />
            <DisclosureCell
              accessibility={{
                traits: ['button'],
                label: 'Credits.',
              }}
              border={false}
              borderColor={cellBorderColor}
              color={cellColor}
              highlightColor={cellHighlightColor}
              title="Credits"
              onPress={() => {
                this.props.navigator.push({
                  title: 'Credits',
                  component: CreditsScreen,
                  barTintColor: '#ffffff',
                  tintColor: TEAL,
                  titleTextColor: OFF_BLACK,
                  shadowHidden: true,
                  passProps: {
                    navigator: this.props.navigator,
                  },
                });
              }}
            />
          </View>
        </View>
        <View
          style={[styles.statusBar,
            {
              width,
              backgroundColor: 'rgba(255, 255, 255, .85);',
            },
          ]}
        />
      </View>
    );
  }
}


export default MuseumScreen;

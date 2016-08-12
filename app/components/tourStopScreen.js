
import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { TourStop } from '../models/tourStop';

import { BOTTOMBARHEIGHT } from './rootScreen';
import { BOTTOMPLAYERHEIGHT } from './bottomPlayer';
import AudioContentList from './audioContentList';
import ImageDetailScreen from './imageDetailScreen';

import { globalStyles } from '../styles.js';

const HEADER_IMAGE_MAX_DIMENSION = 100;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width,
  },
  headerImage: {
    margin: 12.5,
    height: 10,
    width: 100,
    resizeMode: 'contain',
  },
  headerText: {
    marginRight: 12.5,
    flex: 1,
  },
  imageTitle: {
    fontStyle: 'italic',
  },
});

class TourStopScreen extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    tab: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
    tourStop: PropTypes.object.isRequired,
    audioContent: PropTypes.array,
    currentAudio: PropTypes.string,
    currentAudioTime: PropTypes.number,
    autoplayOn: PropTypes.bool.isRequired,
    screenReader: PropTypes.bool.isRequired,
    playerStatus: PropTypes.string.isRequired,
    playerOpen: PropTypes.bool.isRequired,
    initialCategory: PropTypes.string.isRequired,
    currentStopUUID: PropTypes.string.isRequired,
    preferences: PropTypes.object.isRequired,
    actions: PropTypes.shape({
      toggleAudioTranscript: PropTypes.func.isRequired,
      loadAudio: PropTypes.func.isRequired,
      updateCurrentAudioRoute: PropTypes.func.isRequired,
      togglePausePlay: PropTypes.func.isRequired,
      updateNearMeRootStatus: PropTypes.func.isRequired,
      loadAudioContent: PropTypes.func.isRequired,
    }),
  }

  componentWillMount() {
    const currentRoute = this.props.navigator.navigationContext.currentRoute;
    this.props.actions.updateCurrentAudioRoute(currentRoute, this.props.tab);
  }

  componentDidMount() {
    const {
      shortTitle,
      uuid,
    } = this.props.tourStop;

    // TODO: Only play after bottom bar has loaded
    if (uuid !== this.props.currentStopUUID) {
      this.props.actions.loadAudioContent(
        TourStop.jsonAudioContent(this.props.tourStop),
        this.props.initialCategory,
        this.props.autoplayOn,
        shortTitle,
        uuid,
        this.props.preferences.global,
        this.props.currentAudio,
        this.props.currentAudioTime,
        this.props.screenReader,
      );
    }
  }

  componentWillUnmount() {
    this.props.actions.updateNearMeRootStatus(true);
  }

  render() {
    const {
      toggleAudioTranscript,
      loadAudio,
      togglePausePlay,
    } = this.props.actions;

    const {
      imageWidth,
      imageHeight,
    } = this.props.tourStop;

    let containerMargin = BOTTOMBARHEIGHT;
    if (this.props.playerOpen) {
      containerMargin = BOTTOMPLAYERHEIGHT + BOTTOMBARHEIGHT;
    }

    let headerImageWidth;
    let headerImageHeight;
    if (imageHeight > imageWidth) {
      headerImageHeight = HEADER_IMAGE_MAX_DIMENSION;
      headerImageWidth = (imageWidth / imageHeight) * HEADER_IMAGE_MAX_DIMENSION;
    } else {
      headerImageWidth = HEADER_IMAGE_MAX_DIMENSION;
      headerImageHeight = (imageHeight / imageWidth) * HEADER_IMAGE_MAX_DIMENSION;
    }

    return (
      <View
        style={[styles.container, { marginBottom: containerMargin }]}
      >
        <ScrollView
          automaticallyAdjustContentInsets={false}
        >
          <TouchableOpacity
            accessibilityTraits={['header', 'button']}
            accessibilityLabel={`Artwork Information. ${this.props.tourStop.shortCredit}. Double tap to go to long credits.`}
            onPress={() => {
              this.props.navigator.push({
                title: 'Artwork',
                component: ImageDetailScreen,
                barTintColor: '#ffffff',
                tintColor: '#097D8D',
                titleTextColor: '#4D4D4D',
                shadowHidden: true,
                passProps: {
                  navigator: this.props.navigator,
                  imageURL: this.props.imageURL,
                  imageHeight,
                  imageWidth,
                  longCopyright: this.props.tourStop.longCredit,
                  containerMargin,
                },
              });
            }}
          >
            <View style={styles.header}>
              <Image
                // TODO: Use accessibilityLabel
                // accessible={true}
                // accessibilityTraits={'image'}
                // accessibilityLabel={this.props.tourStop.imageAccessibilityLabel}
                style={[styles.headerImage, { width: headerImageWidth, height: headerImageHeight }]}
                source={{ uri: this.props.imageURL }}
              />
              <View
                style={styles.headerText}
                accessible={true}
                accessibilityTraits={['text']}
                accessibilityLabel={
                  this.props.tourStop.shortCreditAccessibilityLabel
                  || this.props.tourStop.shortCredit
                }
              >
                <Text style={globalStyles.body}>
                  {this.props.tourStop.shortCredit}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <AudioContentList
            audioContent={this.props.audioContent}
            currentAudio={this.props.currentAudio}
            currentAudioTime={this.props.currentAudioTime}
            autoplayOn={this.props.autoplayOn}
            playerStatus={this.props.playerStatus}
            screenReader={this.props.screenReader}
            actions={{
              toggleAudioTranscript,
              loadAudio,
              togglePausePlay,
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

export default TourStopScreen;

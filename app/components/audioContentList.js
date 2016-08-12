
import React, { PropTypes } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import {
  PLAYER_STATUS_LOADING,
  PLAYER_STATUS_ERROR,
  PLAYER_STATUS_UNLOADED,
  PLAYER_STATUS_FINISHED,
} from '../actions/audio';

import AudioContentItem from './audioContentItem';

import { globalStyles } from '../styles';

const SCROLLMARGINS = 15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SCROLLMARGINS,
    marginTop: 15,
  },
  chaptersHeader: {
    marginBottom: 5,
  },
  betaMessage: {
    textAlign: 'center',
  },
});

const AudioContentList = (props) => {
  const {
    toggleAudioTranscript,
    loadAudio,
    togglePausePlay,
  } = props.actions;

  const width = Dimensions.get('window').width;
  let renderView;

  if (props.playerStatus === PLAYER_STATUS_LOADING) {
    renderView = (
      <ActivityIndicator
        animating={true}
        style={{ alignSelf: 'center', height: 80 }}
        size="large"
      />
    );
  } else if (props.playerStatus === PLAYER_STATUS_ERROR) {
    renderView = (
      <View>
        <Text style={[styles.betaMessage, globalStyles.body]}>
          This is app is in beta.
        </Text>
        <Text style={[styles.betaMessage, globalStyles.body]}>
          We're still working on this story.
        </Text>
      </View>
    );
  } else {
    const contentList = props.audioContent.map((content, index, array) => {
      return (
        <View key={content.title}>
          <AudioContentItem
            audioContent={content}
            screenReader={props.screenReader}
            index={index}
            listLength={props.audioContent.length}
            contentWidth={width - SCROLLMARGINS * 2}
            actions={{
              toggleAudioTranscript,
              audioAction: () => {
                if (props.currentAudio === content.uuid &&
                    props.playerStatus !== PLAYER_STATUS_UNLOADED &&
                    props.playerStatus !== PLAYER_STATUS_FINISHED) {
                  togglePausePlay();
                } else {
                  loadAudio(
                    props.audioContent,
                    content, props.autoplayOn,
                    props.currentAudio,
                    props.currentAudioTime
                  );
                }
              },
            }}
          />
          <View
            style={index !== array.length - 1 ? styles.bottomBorder : {}}
          />
        </View>
      );
    });

    let chapterPlural = 'Chapters';

    if (props.audioContent.length === 1) {
      chapterPlural = 'Chapter';
    }

    renderView = (
      <View>
        <View
          accessible={true}
          accessibilityTraits={['text', 'header']}
          accessibilityLabel={`${props.audioContent.length} ${chapterPlural}.`}
        >
          <Text style={[styles.chaptersHeader, globalStyles.h1]}>
            Chapters
          </Text>
        </View>
        <View>
          {contentList}
        </View>
      </View>
    );
  }

  return (
    <View
      style={styles.container}
      automaticallyAdjustContentInsets={false}
      showsVerticalScrollIndicator={true}
    >
      {renderView}
    </View>
  );
};

AudioContentList.propTypes = {
  audioContent: PropTypes.array,
  currentAudio: PropTypes.string,
  currentAudioTime: PropTypes.number,
  autoplayOn: PropTypes.bool.isRequired,
  screenReader: PropTypes.bool.isRequired,
  playerStatus: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    toggleAudioTranscript: PropTypes.func.isRequired,
    loadAudio: PropTypes.func.isRequired,
    togglePausePlay: PropTypes.func.isRequired,
  }),
};

export default AudioContentList;

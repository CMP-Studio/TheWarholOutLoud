
import React, { Component, PropTypes } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Collapsible from 'react-native-collapsible';

import TranscriptButton from './buttons/transcriptButton';

import {
  parseDisplayText,
  parseVoiceoverText,
} from '../utilities';

import { globalStyles, TURQUOISE } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  rowOne: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 5,
  },
  rowTwo: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F0F0F0',
    height: 5,
  },
  progressBar: {
    overflow: 'hidden',
  },
  progressBarActive: {
    overflow: 'hidden',
  },
  seconds: {
    paddingLeft: 25,
    fontWeight: '200',
    fontSize: 14,
  },
  transcriptContainer: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  audioItemStatus: {
    flex: 1,
  },
});

function breakIntoParagraphTextComponents(text) {
  const paragraphs = text.split('\n\n');

  return paragraphs.map((paragraph, index) => {
    return (
      <Text
        key={index}
        style={[globalStyles.body, globalStyles.paragraph]}
      >
        {parseDisplayText(paragraph)}
      </Text>
    );
  });
}

function progressWidthStyle(eleWidth, progress) {
  return {
    width: eleWidth * progress,
  };
}

function getPercentage(a, b) {
  return Math.round(a) / Math.round(b);
}

class AudioContentItem extends Component {
  static propTypes = {
    audioContent: PropTypes.object.isRequired,
    screenReader: PropTypes.bool.isRequired,
    contentWidth: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    listLength: PropTypes.number.isRequired,
    actions: PropTypes.shape({
      toggleAudioTranscript: PropTypes.func.isRequired,
      audioAction: PropTypes.func.isRequired,
    }),
  }

  render() {
    const {
      audioContent,
      screenReader,
      contentWidth,
      index,
      listLength,
    } = this.props;

    const {
      toggleAudioTranscript,
      audioAction,
    } = this.props.actions;

    const audioPercentage = getPercentage(
      audioContent.lastPlayedTime,
      audioContent.duration
    );

    const active = audioContent.active;

    let collapsibleDuration;
    if (screenReader) {
      collapsibleDuration = 0;
    } else {
      collapsibleDuration = 500;
    }

    let audioDurationFormatted;

    if (audioContent.duration < 10) {
      audioDurationFormatted = `0:0${audioContent.duration}`;
    } else if (audioContent.duration < 60) {
      audioDurationFormatted = `0:${audioContent.duration}`;
    } else {
      const minutes = Math.floor((audioContent.duration / 60) % 60);
      const seconds = audioContent.duration - (60 * minutes);

      if (seconds < 10) {
        audioDurationFormatted = `${minutes}:0${seconds}`;
      } else {
        audioDurationFormatted = `${minutes}:${seconds}`;
      }
    }

    const indent = audioContent.depth * 30;
    const transcriptContainerWidth = 35;

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View
            style={[
              styles.audioItemStatus,
              { paddingLeft: indent },
            ]}
          >
            <View style={[styles.row, styles.rowOne]}>
              <TouchableOpacity
                style={{ flex: 2 }}
                activeOpacity={0.6}
                onPress={() => {
                  audioAction();
                }}
                accessible={true}
                accessibilityTraits={['button', 'startsMedia']}
                accessibilityLabel={
                  `${parseVoiceoverText(audioContent.title)}. ${(index + 1)} of ` +
                  `${listLength}. ${audioContent.duration} seconds`
                }
              >
                <View>
                  <Text
                    style={[
                      globalStyles.disclosure,
                      active ? { fontWeight: '500' } : {},
                    ]}
                  >
                    {parseDisplayText(audioContent.title)}
                    <Text style={styles.seconds}>
                      {`  ${audioDurationFormatted}`}
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.row, styles.rowTwo]}>
              <View
                style={[
                  active ? styles.progressBarActive : styles.progressBar,
                  { backgroundColor: TURQUOISE, opacity: active ? 1 : 0.3 },
                  progressWidthStyle(
                    (contentWidth - indent - transcriptContainerWidth),
                    audioPercentage
                   ),
                ]}
              />
            </View>
          </View>
          <TranscriptButton
            styles={{
              width: transcriptContainerWidth,
            }}
            accessibilityLabel={parseVoiceoverText(audioContent.title)}
            onPress={() => { toggleAudioTranscript(); }}
            showTranscript={audioContent.showTranscript}
          />
        </View>

        <Collapsible
          style={audioContent.showTranscript ? styles.transcript : {}}
          collapsed={!audioContent.showTranscript}
          duration={collapsibleDuration}
        >
          <View style={styles.transcriptContainer}>
            {breakIntoParagraphTextComponents(audioContent.transcript)}
          </View>
        </Collapsible>
      </View>
    );
  }
}

export default AudioContentItem;

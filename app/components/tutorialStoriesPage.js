
import React, { PropTypes } from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import SwitchButton from './buttons/switchButton';

import { globalStyles, OFF_WHITE, TURQUOISE, GRAY } from '../styles';

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
  cell: {
    flexDirection: 'column',
    backgroundColor: GRAY,
    marginVertical: 20,
  },
  cellTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    height: 44,
  },
  cellText: {
    flex: 1,
    color: OFF_WHITE,
  },
});

const TutorialStoriesPage = (props) => {
  const {
    timerActive,
    autoplayOn,
  } = props;

  const {
    toggleAutoplay,
  } = props.actions;

  let autoplayMessage;
  let autoplayVoiceoverMessage;

  if (autoplayOn) {
    autoplayMessage = 'Autoplay is on';
    autoplayVoiceoverMessage = 'Autoplay, on. Double tap to turn off.';
  } else {
    autoplayMessage = 'Autoplay is off';
    autoplayVoiceoverMessage = 'Autoplay, off. Double tap to turn on.';
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.titleRow}>
        <Image
          style={styles.titleLogo}
          source={require('../assets/storiesTab.png')}
        />
        <Text style={[styles.titleText, styles.text]}>
          Stories
        </Text>
      </View>
      <Text style={styles.text}>
        {'Out Loud is organized into stories. Each story contains multiple audio files, or chapters, related to one theme or artwork.'
         + '\n\n' +
        'If you turn on autoplay, we’ll automatically play all chapters for you.'}
      </Text>
      <View style={styles.cell}>
        <TouchableOpacity
          style={styles.cellTitle}
          accessible={true}
          accessibilityLabel={autoplayVoiceoverMessage}
          onPress={() => {
            toggleAutoplay(autoplayOn, timerActive);
          }}
        >
          <Text style={[globalStyles.h1, styles.cellText]}>
            {autoplayMessage}
          </Text>
          <SwitchButton
            width={40}
            height={25}
            onPress={() => {
              toggleAutoplay(autoplayOn, timerActive);
            }}
            value={autoplayOn}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        Don’t worry—you can change these preferences later.
      </Text>
    </View>
  );
};

TutorialStoriesPage.propTypes = {
  timerActive: PropTypes.bool.isRequired,
  autoplayOn: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    toggleAutoplay: PropTypes.func.isRequired,
  }),
};

export default TutorialStoriesPage;

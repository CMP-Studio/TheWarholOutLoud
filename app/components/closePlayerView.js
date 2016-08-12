
import React, { PropTypes } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import ProgressBar from './progressBar';

import { globalStyles, TURQUOISE } from '../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 15,
  },
  closePlayerButton: {
    marginTop: 5,
  },
  progressRow: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 9,
  },
});

const ClosePlayerView = (props) => {
  return (
    <View style={styles.container}>
      <ProgressBar
        style={styles.progressRow}
        percentage={1}
      />
      <View style={styles.textContainer}>
        <TouchableOpacity
          onPress={props.navToTourStop}
          accessible={true}
          accessibilityTraits={['button', 'header']}
          accessibilityLabel={`You've reached the end of ${props.stopTitle}. Double tap to return to the chapter listing for this story.`}
        >
          <Text style={[globalStyles.h2, { fontWeight: '300' }]}>
            You've reached the end of
          </Text>
          <Text
            style={[
              globalStyles.h2,
              {
                fontWeight: '500',
                textAlign: 'center',
              }]
            }
          >
            {props.stopTitle}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.closePlayerButton}
          onPress={props.closePlayer}
          accessible={true}
          accessibilityTraits={'button'}
          accessibilityLabel={'Close Player'}
        >
          <Text style={[globalStyles.disclosure, { color: TURQUOISE }]}>
           Close Player
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

ClosePlayerView.propTypes = {
  stopTitle: PropTypes.string.isRequired,
  closePlayer: PropTypes.func.isRequired,
  navToTourStop: PropTypes.func.isRequired,
};

export default ClosePlayerView;

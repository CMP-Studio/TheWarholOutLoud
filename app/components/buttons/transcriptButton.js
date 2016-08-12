
import React, { PropTypes } from 'react';

import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import { TURQUOISE } from '../../styles';

const styles = StyleSheet.create({
  transcriptButton: {
    width: 30,
    height: 30,
  },
  transcriptLabel: {
    textAlign: 'center',
  },
});

const TranscriptButton = (props) => {
  let accessibilityLabel = `${props.accessibilityLabel} transcript`;

  if (props.showTranscript) {
    accessibilityLabel += ' opened.';
  } else {
    accessibilityLabel += ' closed.';
  }

  accessibilityLabel += ' Double tap to ';

  if (props.showTranscript) {
    accessibilityLabel += 'close.';
  } else {
    accessibilityLabel += 'open.';
  }

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      accessibilityTraits={'button'}
    >
      <Image
        resizeMode={'contain'}
        style={[
          styles.transcriptButton,
          props.showTranscript ? { tintColor: TURQUOISE } : {},
        ]}
        source={require('../../assets//Transcript.png')}
      />
    </TouchableOpacity>
  );
};

TranscriptButton.propTypes = {
  showTranscript: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  accessibilityLabel: PropTypes.string.isRequired,
};

export default TranscriptButton;

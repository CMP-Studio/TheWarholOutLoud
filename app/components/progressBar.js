
import React, { PropTypes } from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import { TURQUOISE, GRAY } from '../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    position: 'relative',
  },
  progressRow: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 9,
  },
});

const progressWidthStyle = (total, percentage) => {
  return {
    width: total * percentage,
  };
};

const ProgressBar = (props) => {
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View
        style={[styles.row, styles.progressRow, { backgroundColor: GRAY }]}
      >
        <View
          style={[
            styles.progressBar,
            progressWidthStyle(width, props.percentage),
            { backgroundColor: TURQUOISE },
          ]}
        />
      </View>
    </View>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;

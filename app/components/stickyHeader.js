
import React, { PropTypes } from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { globalStyles, OFF_WHITE, TURQUOISE } from '../styles';

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: OFF_WHITE,
    backgroundColor: TURQUOISE,
  },
  cellTitle: {
    flex: 1,
    color: OFF_WHITE,
  },
});

const StickyHeader = (props) => {
  const { numberOfObjects, objectSingular, objectPlural } = props;
  let label = `${props.title}.`;

  const objectPlurality = numberOfObjects > 1 ? objectPlural : objectSingular;

  label += ` ${numberOfObjects} ${objectPlurality}.`;

  return (
    <View
      style={styles.cell}
      accessibilityTraits={['header']}
      accessibilityLabel={label}
    >
      <Text style={[globalStyles.h1, styles.cellTitle]}>
        {props.title}
      </Text>
    </View>
  );
};

StickyHeader.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfObjects: PropTypes.number.isRequired,
  objectSingular: PropTypes.string.isRequired,
  objectPlural: PropTypes.string.isRequired,
};

export default StickyHeader;

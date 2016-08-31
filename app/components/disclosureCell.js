
import React, { PropTypes } from 'react';

import {
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';

import { globalStyles, LIGHT_BLUE } from '../styles';

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 3,
    borderBottomColor: LIGHT_BLUE,
  },
  cellTitle: {
    flex: 1,
    marginLeft: 10,
  },
  cellImage: {
    height: 44,
    width: 44,
  },
});

const DisclosureCell = (props) => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      accessibilityTraits={props.accessibility.traits}
      accessibilityLabel={props.accessibility.label}
    >
      <View
        style={[
          styles.cell,
          props.bottomBorder === false ? { borderBottomWidth: 0 } : {},
        ]}
      >
        <Text style={[styles.cellTitle, globalStyles.disclosure]}>
          {props.title}
        </Text>
        <Image
          style={styles.cellImage}
          source={require('../assets/DisclosureIndicator.png')}
        />
      </View>
    </TouchableHighlight>
  );
};

DisclosureCell.propTypes = {
  accessibility: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  bottomBorder: PropTypes.bool.isRequired,
};

export default DisclosureCell;

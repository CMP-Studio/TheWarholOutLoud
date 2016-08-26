
import React, { PropTypes } from 'react';

import {
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native';

import { globalStyles } from '../styles';

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
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
      style={[
        { backgroundColor: props.color },
        props.border ? { borderBottomWidth: 2 } : {},
        props.borderColor ? { borderBottomColor: props.borderColor } : {},
      ]}
      underlayColor={props.highlightColor}
      accessibilityTraits={props.accessibility.traits}
      accessibilityLabel={props.accessibility.label}
    >
      <View style={styles.cell}>
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
  color: PropTypes.string.isRequired,
  highlightColor: PropTypes.string.isRequired,
  border: PropTypes.bool.isRequired,
  borderColor: PropTypes.string.isRequired,
};

export default DisclosureCell;

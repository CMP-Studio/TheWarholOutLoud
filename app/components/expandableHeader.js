
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
    height: 41,
    marginHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: LIGHT_BLUE,
  },
  cellTitle: {
    flex: 1,
  },
  cellImage: {
    height: 44,
    width: 44,
  },
});

const ExpandableHeader = (props) => {
  const { numberOfObjects, objectSingular, objectPlural } = props;
  let label = `${props.title}.`;

  const objectPlurality = numberOfObjects > 1 ? objectPlural : objectSingular;

  label += ` ${numberOfObjects} ${objectPlurality}.`;

  label += ' Double tap to ';

  if (props.expanded) {
    label += 'close.';
  } else {
    label += 'open.';
  }

  return (
    <TouchableHighlight
      onPress={props.onPress}
      underlayColor={'#ffffff'}
      accessibilityTraits={['button', 'header']}
      accessibilityLabel={label}
      accessibilityComponentType={'button'}
    >
      <View style={styles.cell}>
        <Text style={[styles.cellTitle, globalStyles.disclosure]}>
          {props.title}
        </Text>
        <Image
          style={[styles.cellImage,
            {
              transform: [
                { rotate: props.expanded ? '0deg' : '180deg' },
              ],
            }]}
          source={
            require('../assets/DisclosureIndicatorCollapsibleOpen.png')
          }
        />
      </View>
    </TouchableHighlight>
  );
};

ExpandableHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  numberOfObjects: PropTypes.number.isRequired,
  objectSingular: PropTypes.string.isRequired,
  objectPlural: PropTypes.string.isRequired,
};

export default ExpandableHeader;

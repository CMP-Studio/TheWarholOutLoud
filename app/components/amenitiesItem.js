
import React, { PropTypes } from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

import {
  parseDisplayText,
  parseVoiceoverText,
} from '../utilities';

import { globalStyles } from '../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
  },
  image: {
    width: 100,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 10,
  },
  amenityTitle: {
    marginBottom: 10,
  },
  borderStyle: {
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    borderStyle: 'solid',
  },
});

const AmenitiesItem = (props) => {
  let hours;

  const description = parseDisplayText(props.amenity.description);

  if (props.amenity.hours !== '') {
    hours = (
      <View
        accessible={true}
        accessibilityLabel={parseVoiceoverText(props.amenity.hours)}
      >
        <Text style={[globalStyles.body, { marginTop: 10 }]}>
          {props.amenity.hours}
        </Text>
      </View>
    );
  }

  return (
    <View
      style={[styles.container,
              props.border ? styles.borderStyle : {},
            ]}
    >
      <Image
        style={styles.image}
        resizeMode={'contain'}
        source={{ uri: props.amenity.icon }}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.amenityTitle, globalStyles.body, { fontWeight: '500' }]}>
          {props.amenity.title}
        </Text>
        <Text style={[styles.amenityDescription, globalStyles.body]}>
          {description}
        </Text>
        {hours}
      </View>
    </View>
  );
};

AmenitiesItem.propTypes = {
  amenity: PropTypes.object.isRequired,
  border: PropTypes.bool,
};

export default AmenitiesItem;

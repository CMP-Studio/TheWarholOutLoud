
import React, { PropTypes } from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  bar: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
  },
  label: {
    fontWeight: '600',
    fontSize: 17,
  },
});

const NavigationBar = (props) => {
  return (
    <View
      style={[props.barStyle, styles.bar]}
    >
      <Text style={[props.labelStyle, styles.label]}>
        {props.label}
      </Text>
    </View>
  );
};

NavigationBar.propTypes = {
  barStyle: PropTypes.oneOfType([
    View.propTypes.style,
    PropTypes.object,
  ]).isRequired,
  labelStyle: PropTypes.oneOfType([
    Text.propTypes.style,
    PropTypes.object,
  ]).isRequired,
  label: PropTypes.string.isRequired,
};

export default NavigationBar;

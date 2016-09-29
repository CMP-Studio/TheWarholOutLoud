
import React from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import { OFF_WHITE } from '../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    marginTop: 10,
    marginBottom: 60,
  },
  text: {
    color: OFF_WHITE,
    fontSize: 20,
    width: 245,
    textAlign: 'center',
  },
});

const TutorialPageOne = (props) => {
  return (
    <View style={[styles.container]}>
      <Image
        style={styles.logo}
        source={require('../assets/warholTutorialLogo.png')}
      />
      <Text style={styles.text}>
        Welcome to
      </Text>
      <Text style={styles.text}>
        The Andy Warhol Museum’s inclusive audio guide
      </Text>
    </View>
  );
};

TutorialPageOne.propTypes = {
};

export default TutorialPageOne;


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

const TutorialWelcomePage = (props) => {
  return (
    <View style={[styles.container]}>
      <Image
        style={styles.logo}
        accessibilityLabel={'The Warhol: Out Loud Logo'}
        source={require('../assets/warholTutorialLogo.png')}
      />
      <Text style={styles.text}>
        {'Welcome to'
         + '\n' +
        'The Andy Warhol Museum’s inclusive audio guide'}
      </Text>
    </View>
  );
};

export default TutorialWelcomePage;

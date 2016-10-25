
import React from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import { OFF_WHITE, TURQUOISE } from '../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 15,
  },
  logo: {
    marginTop: 125,
    alignSelf: 'center',
    tintColor: TURQUOISE,
  },
  text: {
    color: OFF_WHITE,
    fontSize: 20,
    textAlign: 'center',
  },
});

const TutorialWelcomePage = (props) => {
  return (
    <View style={[styles.container]}>
      <Image
        accessibilityLabel={'The Warhol: Out Loud Logo'}
        source={require('../assets/warholLogoType.png')}
      />
      <Image
        style={styles.logo}
        source={require('../assets/warholLogo.png')}
      />
      <Text style={[styles.text, { fontSize: 40, fontWeight: '500' }]}>
        out loud
      </Text>
      <Text style={[styles.text, { marginTop: 75 }]}>
        {'Welcome to'
         + '\n' +
        'The Andy Warhol Museum’s'
        + '\n' +
        'inclusive audio guide'}
      </Text>
    </View>
  );
};

export default TutorialWelcomePage;

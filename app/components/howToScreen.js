
import React, { PropTypes } from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

import { BOTTOMBARHEIGHT } from './rootScreen';
import { BOTTOMPLAYERHEIGHT } from './bottomPlayer';

import { globalStyles } from '../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    marginTop: 65,
  },
});

const HowToScreen = (props) => {
  return (
    <View style={[styles.container, { marginBottom: BOTTOMBARHEIGHT }]}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 10,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: BOTTOMPLAYERHEIGHT + 10,
        }}
        automaticallyAdjustContentInsets={false}
      >
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          Welcome to the warhol: out loud, The Andy Warhol Museum’s audio guide.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          We've organized our audio guide into stories. Each story centers on one theme, time period, or artwork, and contains several short chapters of audio content focusing on different aspects of Andy Warhol’s life and art.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          While at the museum, explore the audio guide using the "Near Me" section. As you walk through The Warhol, we’ll show you stories related to what’s closest to you.
        </Text>
      </ScrollView>
    </View>
  );
};

HowToScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default HowToScreen;

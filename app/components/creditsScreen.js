
import React, { PropTypes } from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

import { parseDisplayText } from '../utilities';

import { BOTTOMBARHEIGHT } from './rootScreen';
import { BOTTOMPLAYERHEIGHT } from './bottomPlayer';

import { globalStyles } from '../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    marginTop: 65,
  },
  creditsHeader: {
    marginTop: 25,
    marginBottom: 5,
  },
});

const CreditsScreen = (props) => {
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
          Accessibility initiatives at The Andy Warhol Museum are generously supported by Allegheny Regional Asset District, The Edith L. Trees Charitable Trust, and the FISA Foundation in honor of Dr. Mary Margaret Kimmel.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          We'd like to extend a special thank you to our invaluable consultants and partners who helped make this project possible: Ann Lapidus, Gabe McMoreland, Brian Rutherford, and Sina Bahram, Prime Access Consulting. We also thank staff across The Warhol who have worked to make this project possible.
        </Text>
        <Text style={[globalStyles.h1, styles.creditsHeader]}>
          Project manager
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          Desi Gonzalez
        </Text>
        <Text style={[globalStyles.h1, styles.creditsHeader]}>
          Educational content
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          Nicole Dezelon {'\n'}
          Leah Morelli
        </Text>
        <Text style={[globalStyles.h1, styles.creditsHeader]}>
          Development
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          Ruben Niculcea {'\n'}
          Sam Ticknor
        </Text>
        <Text style={[globalStyles.h1, styles.creditsHeader]}>
          Advisory team
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          Jeffrey Inscho {'\n'}
          Karen Lautanen {'\n'}
          Chris Maury {'\n'}
        </Text>
        <Text style={[globalStyles.body, { marginTop: 20 }]}>
          {parseDisplayText('The Warhol section image: <i>Silver Clouds</i> installation, The Andy Warhol Museum, Pittsburgh, photo © Abby Warhola, Warhol art © The Andy Warhol Foundation for the Visual Arts, Inc.')}
        </Text>
      </ScrollView>
    </View>
  );
};

CreditsScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default CreditsScreen;


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
  aboutHeader: {
    marginTop: 25,
    marginBottom: 5,
  },
  hoursRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  hoursDay: {
    flex: 0.3,
    paddingRight: 15,
  },
  hours: {
    flex: 0.7,
    alignItems: 'flex-start',
  },
});

const AboutScreen = (props) => {
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
        <Text style={globalStyles.body}>
          Located in Pittsburgh, Pennsylvania, the place of Andy Warhol’s birth, The Andy Warhol Museum holds the largest collection of Warhol’s artwork and archival materials and is one of the most comprehensive single-artist museums in the world. The Warhol is one of the four Carnegie Museums of Pittsburgh.
        </Text>
        <Text style={[globalStyles.h1, styles.aboutHeader]}>
          About Carnegie Museums of Pittsburgh
        </Text>
        <Text style={globalStyles.body}>
          Established in 1895 by Andrew Carnegie, Carnegie Museums of Pittsburgh is a collection of four distinctive museums: Carnegie Museum of Art, Carnegie Museum of Natural History, Carnegie Science Center, and The Andy Warhol Museum. The museums reached more than 1.4 million people a year through exhibitions, educational programs, outreach activities, and special events.
        </Text>
        <Text style={[globalStyles.h1, styles.aboutHeader]}>
          Hours
        </Text>
        <View style={styles.hoursRow}>
          <View style={styles.hoursDay}>
            <Text style={globalStyles.body}>
              Monday
            </Text>
          </View>
          <View style={styles.hours}>
            <Text style={globalStyles.body}>
              Closed
            </Text>
          </View>
        </View>
        <View style={styles.hoursRow}>
          <View style={styles.hoursDay}>
            <Text style={globalStyles.body}>
              Tuesday
            </Text>
          </View>
          <View
            style={styles.hours}
            accessible={true}
            accessibilityLabel={'10am to 5pm'}
          >
            <Text style={globalStyles.body}>
              10am - 5pm
            </Text>
          </View>
        </View>
        <View style={styles.hoursRow}>
          <View style={styles.hoursDay}>
            <Text style={globalStyles.body}>
              Wednesday
            </Text>
          </View>
          <View
            style={styles.hours}
            accessible={true}
            accessibilityLabel={'10am to 5pm'}
          >
            <Text style={globalStyles.body}>
              10am - 5pm
            </Text>
          </View>
        </View>
        <View style={styles.hoursRow}>
          <View style={styles.hoursDay}>
            <Text style={globalStyles.body}>
              Thursday
            </Text>
          </View>
          <View
            style={styles.hours}
            accessible={true}
            accessibilityLabel={'10am to 5pm'}
          >
            <Text style={globalStyles.body}>
              10am - 5pm
            </Text>
          </View>
        </View>
        <View style={styles.hoursRow}>
          <View style={styles.hoursDay}>
            <Text style={globalStyles.body}>
              Friday
            </Text>
          </View>
          <View
            style={styles.hours}
            accessible={true}
            accessibilityLabel={'10am to 10pm'}
          >
            <Text style={globalStyles.body}>
              10am - 10pm
            </Text>
          </View>
        </View>
        <View style={styles.hoursRow}>
          <View style={styles.hoursDay}>
            <Text style={globalStyles.body}>
              Saturday
            </Text>
          </View>
          <View
            style={styles.hours}
            accessible={true}
            accessibilityLabel={'10am to 5pm'}
          >
            <Text style={globalStyles.body}>
              10am - 5pm
            </Text>
          </View>
        </View>
        <View style={styles.hoursRow}>
          <View style={styles.hoursDay}>
            <Text style={globalStyles.body}>
              Sunday
            </Text>
          </View>
          <View
            style={styles.hours}
            accessible={true}
            accessibilityLabel={'10am to 5pm'}
          >
            <Text style={globalStyles.body}>
              10am - 5pm
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

AboutScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default AboutScreen;

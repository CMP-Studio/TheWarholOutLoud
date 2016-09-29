
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
  titleRow: {
    flexDirection: 'row',
    marginBottom: 35,
  },
  titleLogo: {
    tintColor: TURQUOISE,
  },
  titleText: {
    marginHorizontal: 15,
    alignSelf: 'flex-end',
    fontWeight: '500',
  },
  text: {
    color: OFF_WHITE,
    fontSize: 18,
  },
});

const TutorialNearMePage = (props) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.titleRow}>
        <Image
          style={styles.titleLogo}
          source={require('../assets/nearTab.png')}
        />
        <Text style={[styles.titleText, styles.text]}>
          Near Me
        </Text>
      </View>
      <Text style={styles.text}>
        While at the museum, we show you stories based on what’s near you.
      </Text>
      <Text style={styles.text}>
        To use this feature, we’ll need two things from you…
      </Text>
    </View>
  );
};

TutorialNearMePage.propTypes = {
};

export default TutorialNearMePage;

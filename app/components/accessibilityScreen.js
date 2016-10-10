
import React, { PropTypes } from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import AccessibilityNotificationScreen from './accessibilityNotificationScreen';

import { BOTTOMBARHEIGHT } from './rootScreen';
import { BOTTOMPLAYERHEIGHT } from './bottomPlayer';

import { globalStyles, TEAL, OFF_BLACK } from '../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    marginTop: 65,
  },
  accessibilityHeader: {
    marginTop: 25,
    marginBottom: 5,
  },
});

const AccessibilityScreen = (props) => {
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
          The Andy Warhol Museum is committed to providing an excellent experience to visitors of all backgrounds and abilities. For specific questions about wheelchairs, strollers, or other programmatic or equipment needs, please see Visitor Services at the museum admission desk or contact {'<a href="mailto:access@warhol.org>"'}access@warhol.org{'</a>'}.
        </Text>
        <Text style={[globalStyles.h1, styles.accessibilityHeader]}>
          Getting around
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        The museum’s main entrance at 117 Sandusky Street is wheelchair accessible. The staff entrance at East General Robinson Street is equipped with a lift.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        Accessible elevators are located on the first floor of the museum. All floors, including The Factory underground, The Warhol Café, The Warhol Store, and gallery levels, are accessible for people with mobility impairments. Restrooms are located on the underground (basement) floor and the second floor. All restrooms include accessible facilities.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        Standard wheelchairs are available free of charge on a limited basis. Please reserve more than 24 hours in advance by contacting {'<a href="mailto:access@warhol.org>"'}access@warhol.org{'</a>'}.
        </Text>
        <Text style={[globalStyles.h1, styles.accessibilityHeader]}>
          Blind and low vision
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        For visitors who are blind or have low vision, educators are trained to be sighted guides and provide detailed descriptions of artwork on gallery tours. Touchable objects are included when available.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        Tactile displays featuring raised line and textured reproductions of key works in The Warhol’s collection are installed in the 7th floor galleries for all visitors to explore.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        Additionally, guests can access {'<a href="http://www.warhol.org/AccessibleTexts/">'}screen reader-compatible labels{'</a>'} on their own devices or request a device at the admission desk.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        To schedule a tour of our exhibitions please contact {'<a href="mailto:access@warhol.org>"'}access@warhol.org{'</a>'}. We welcome service dogs.
        </Text>
        <Text style={[globalStyles.h1, styles.accessibilityHeader]}>
          Large print
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        Large print wall labels and panel text are available at the admission desk.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        Additionally, guests can {'<a href="http://www.warhol.org/visit/accessibility/">'}download PDFs{'</a>'} from home and load on to their own devices before their visit.
        </Text>
        <Text style={[globalStyles.h1, styles.accessibilityHeader]}>
          Sign language
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        American Sign Language interpreters are available for tours or public programs at The Warhol. Please contact {'<a href="mailto:access@warhol.org>"'}access@warhol.org{'</a>'} two weeks in advance to schedule a tour or request an interpreter. Relay calls are welcome.
        </Text>
        <Text style={[globalStyles.h1, styles.accessibilityHeader]}>
          Sensory friendly
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        The Warhol welcomes individuals with autism spectrum disorders and sensory sensitivities during our sensory friendly events for teens and adults and accessible group tours and workshops. To learn about upcoming programs, visit our calendar or contact {'<a href="mailto:access@warhol.org>"'}access@warhol.org{'</a>'} to schedule a tour.
        </Text>
        <Text style={[globalStyles.h1, styles.accessibilityHeader]}>
          Questions or comments?
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        Please contact Carnegie Museums of Pittsburgh’s Diversity Catalyst with concerns regarding accessibility for visitors with disabilities at the museums. On weekdays, call 412.353.4632 or email accessibility@carnegiemuseums.org.
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigator.push({
              title: 'CMP Notification',
              component: AccessibilityNotificationScreen,
              barTintColor: '#ffffff',
              tintColor: TEAL,
              titleTextColor: OFF_BLACK,
              shadowHidden: true,
              passProps: {
                navigator: props.navigator,
              },
            });
          }}
        >
          <Text
            style={[
              globalStyles.body,
              globalStyles.paragraph,
              { textDecorationLine: 'underline' },
            ]}
          >
          Read the Carnegie Museums of Pittsburgh Notification/Resolution Procedure under the Americans with Disabilities Act.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

AccessibilityScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default AccessibilityScreen;

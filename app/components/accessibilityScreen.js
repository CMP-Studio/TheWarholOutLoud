
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
          The Andy Warhol Museum is committed to providing an excellent experience to all of its visitors. We work to assist visitors with disabilities in obtaining reasonable and appropriate accommodations and in supporting equal access to services, programs, and activities. For specific questions about wheelchairs, strollers, or other programmatic or equipment needs, please see Visitor Services at the museum admission desk or call 412.237.8300.
        </Text>
        <Text style={[globalStyles.h1, styles.accessibilityHeader]}>
          Getting around
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        A wheelchair accessible entrance to the museum is located at 117 Sandusky Street. Accessible elevators are available on all floors of the museum.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        Standard wheelchairs are available on a limited basis. Please reserve more than 24 hours in advance by calling 412.237.8300.
        </Text>
        <Text style={[globalStyles.h1, styles.accessibilityHeader]}>
          Blind and low vision
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        For blind or visually impaired visitors, tablets with digital versions of wall labels and panel text are available at the admission desk.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        Educators are trained to be sighted guides and provide detailed descriptions of artwork on gallery tours. Touchable objects are included when available. Please call two weeks in advance to schedule a tour.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        To schedule an exhibition tour, please see Visitor Services at the museum admission desk or contact Eli Kochersperger at 412.237.8326.
        </Text>
        <Text style={[globalStyles.h1, styles.accessibilityHeader]}>
          Service animals
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        We welcome service animals.
        </Text>
        <Text style={[globalStyles.h1, styles.accessibilityHeader]}>
          Large print
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        Large print wall labels and panel text are available at the admission desk.
        </Text>
        <Text style={[globalStyles.h1, styles.accessibilityHeader]}>
          Sign language
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        Tours conducted in American Sign Language are available upon request. Please call two weeks in advance to schedule a tour.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        Please see Visitor Services at the museum admission desk or contact Eli Kochersperger at 412.237.8326 to schedule a tour.
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

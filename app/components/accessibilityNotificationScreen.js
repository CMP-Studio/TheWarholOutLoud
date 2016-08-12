
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
    marginTop: 65,
    alignItems: 'stretch',
    flex: 1,
  },
});

const AccessibilityNotificationScreen = (props) => {
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
        <Text style={[globalStyles.h1, { marginBottom: 10 }]}>
          Carnegie Museums of Pittsburgh Notification / Resolution Procedure under the Americans with Disabilities Act
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          This Notification / Resolution Procedure is established to meet the requirements of the Americans with Disabilities Act (“ADA”). Its purpose is to provide prompt and fair resolution of notifications of discrimination on the basis of disability by visitors who allege discrimination in the provision of programs, services and activities by any of our Museums.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          The notification should be in writing and contain information about the alleged discrimination such as name, address, phone number of visitor making the notification and location, date and description of the problem. Alternative means of filing notifications, such as personal interviews or a tape recording of the notification, will be made available for persons with disabilities upon request.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
        The notification should be submitted as soon as possible but no later than 60 calendar days after the alleged discrimination to:
        </Text>
        <Text
          style={
            [globalStyles.body,
             globalStyles.paragraph,
             { paddingLeft: 15 }]
          }
        >
          Cecile Shellman{'\n'}
          (ADA Coordinator){'\n'}
          Carnegie Museums of Pittsburgh{'\n'}
          4400 Forbes Avenue{'\n'}
          Pittsburgh, PA 15213{'\n'}
          (412) 353-4632{'\n'}
          ShellmanC@CarnegieMuseums.Org
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          Within 15 calendar days after receipt of the notification, the ADA Coordinator will meet with the visitor (in person or by phone) to discuss the alleged discrimination and possible resolutions. Within 30 days after the meeting, the ADA Coordinator will respond in writing, and, where appropriate, in a format accessible to the visitor, such as large print, Braille, or audio tape. The response will explain the position of the Museum and offer options for substantive resolution of the alleged discrimination.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          If the response by the ADA Coordinator does not satisfactorily resolve the issue, the visitor may appeal the decision of the ADA coordinator within 15 calendar days after receipt of the response, to the Museum Director or his/her designee.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          Within 15 calendar days after receipt of the appeal, the Museum Director or his/her designee will meet with the visitor (in person or by phone) to discuss the alleged discrimination and possible resolutions. Within 15 calendar days after the meeting, the Museum Director or his/her designee will respond in writing, and, where appropriate, in a format accessible to the visitor, with a suggested resolution of the alleged discrimination.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          If the response by the Museum Director does not satisfactorily resolve the issue, the visitor may appeal the decision of the Museum Director within 15 calendar days after receipt of the response, to the President or his/her designee.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          Within 15 calendar days after receipt of the appeal, the President or his/her designee will meet with the visitor (in person or by phone) to discuss the alleged discrimination and possible resolutions. Within 15 calendar days after the meeting, the President or his/her designee will respond in writing, and, where appropriate, in a format accessible to the visitor, with a final resolution of the alleged discrimination.
        </Text>
        <Text style={[globalStyles.body, globalStyles.paragraph]}>
          All written notifications received by the ADA Coordinator, appeals to the Museum Director or President, and responses from the ADA coordinator, the Museum Director or the President will be kept by Carnegie Museums of Pittsburgh for at least three years.
        </Text>
      </ScrollView>
    </View>
  );
};

AccessibilityNotificationScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default AccessibilityNotificationScreen;

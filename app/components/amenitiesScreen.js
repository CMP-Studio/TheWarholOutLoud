
import React, { PropTypes } from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { BOTTOMBARHEIGHT } from './rootScreen';
import { BOTTOMPLAYERHEIGHT } from './bottomPlayer';

import { LIGHT_BLUE } from '../styles';

import Collapsible from 'react-native-collapsible';

import ExpandableHeader from './expandableHeader';
import AmenitiesItem from './amenitiesItem';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    alignItems: 'stretch',
    flex: 1,
  },
  amenitiesContainer: {
    margin: 10,
    marginTop: 0,
    paddingTop: 0,
    padding: 10,
    paddingBottom: 0,
  },
});

const AmenitiesScreen = (props) => {
  let containerMargin = BOTTOMBARHEIGHT;
  if (props.playerOpen) {
    containerMargin = BOTTOMPLAYERHEIGHT + BOTTOMBARHEIGHT;
  }

  return (
    <View style={[styles.container, { marginBottom: containerMargin }]}>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {props.allAmenities.map((floor, index) => {
          let collapsibleDuration;

          if (props.screenReader) {
            collapsibleDuration = 0;
          } else {
            collapsibleDuration = 750;
          }

          return (
            <View key={index}>
              <ExpandableHeader
                title={floor.floorTitle}
                expanded={props.expandedFloors[index]}
                numberOfObjects={floor.amenities.length}
                objectSingular={'amenity'}
                objectPlural={'amenities'}
                onPress={() => { props.actions.toggleFloorExpanded(index); }}
              />
              <Collapsible
                collapsed={!props.expandedFloors[index]}
                duration={collapsibleDuration}
              >
                <View style={[styles.amenitiesContainer, { backgroundColor: LIGHT_BLUE }]}>
                  {floor.amenities.map((amenity, i) => {
                    return (
                      <AmenitiesItem
                        key={amenity.uuid}
                        amenity={amenity}
                        border={i !== (floor.amenities.length - 1)}
                      />
                    );
                  })}
                </View>
              </Collapsible>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

AmenitiesScreen.propTypes = {
  navigator: PropTypes.object.isRequired,
  playerOpen: PropTypes.bool.isRequired,
  allAmenities: PropTypes.array.isRequired,
  expandedFloors: PropTypes.array.isRequired,
  screenReader: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    toggleFloorExpanded: PropTypes.func.isRequired,
  }).isRequired,
};

export default AmenitiesScreen;

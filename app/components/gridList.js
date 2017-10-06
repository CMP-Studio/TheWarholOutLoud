
import React, { PropTypes } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';

import StickyHeader from './stickyHeader';
import Grid from './grid';

import TourStop from '../containers/tourStop';

import { TAB_STORIES } from '../actions/navigation';

import { OFF_BLACK, TEAL } from '../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const numberSuffix = (num) => {
  switch (num) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const GridList = props => {
  let totalIndex = 0;
  let content = [];
  let stickyHeaders = [];

  const tourStopsByFloor = props.items.reduce((obj, item) => {
    // eslint-disable-next-line no-param-reassign
    obj[item.floor] = (obj[item.floor] || []).concat(item);

    return obj;
  }, {});

  const tourStopsByFloorSorted = Object.keys(tourStopsByFloor).sort((a, b) => b - a);

  tourStopsByFloorSorted.forEach((floor) => {
    const floorTourStops = tourStopsByFloor[floor];
    const floorName = `${floor}${numberSuffix(floor)} Floor`;

    content.push(
      <StickyHeader
        key={`${floor} header}`}
        title={floorName}
        numberOfObjects={floorTourStops.length}
        objectSingular={'tour stop'}
        objectPlural={'tour stops'}
      />
    );
    stickyHeaders.push(totalIndex);
    totalIndex++;

    content.push(
      <Grid
        key={`${floor} items`}
        items={floorTourStops}
        selected={props.selected}
        floorName={floorName}
        screenReader={props.screenReader}
        onCellPress={(item) => {
          props.navigator.push({
            title: item.shortTitle,
            component: TourStop,
            barTintColor: '#ffffff',
            tintColor: TEAL,
            titleTextColor: OFF_BLACK,
            shadowHidden: true,
            passProps: {
              tab: TAB_STORIES,
              tourStop: item,
              initialCategory: item.initialAudio,
              imageURL: item.imageURL,
            },
          });
        }}
      />
    );
    totalIndex++;
  });

  return (
    <View style={styles.container}>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        stickyHeaderIndices={stickyHeaders}
      >
        {content}
      </ScrollView>
    </View>
  );
};

GridList.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  selected: PropTypes.string,
  screenReader: PropTypes.bool.isRequired,
  navigator: PropTypes.object.isRequired,
};

export default GridList;

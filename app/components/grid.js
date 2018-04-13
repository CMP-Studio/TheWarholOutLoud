
import React, { PropTypes } from 'react';
import * as _ from "lodash";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { ListView } from 'realm/react-native';

import {
  parseDisplayText,
  parseVoiceoverText,
} from '../utilities';

import { globalStyles, OFF_BLACK } from '../styles';

const SPACING = 5;

const styles = StyleSheet.create({
  container: {
    paddingTop: SPACING,
  },
  gridColumn: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  gridRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  cellContainer: {
    marginLeft: SPACING,
    marginRight: SPACING,
    marginBottom: SPACING * 2,
    shadowColor: OFF_BLACK,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  cellImage: {
    resizeMode: 'contain',
  },
  cellText: {
    padding: SPACING,
  },
});

function getImageScale(cellWidth, imageWidth) {
  return cellWidth / imageWidth;
}

function getImageHeight(cellWidth, imageWidth, imageHeight) {
  return getImageScale(cellWidth, imageWidth) * imageHeight;
}

const Grid = (props) => {
  const width = Dimensions.get('window').width;
  const cellWidth = (width / 2) - SPACING * 2; // 2 items per row
  const gridLength = props.items.length;

  const renderItem = (item, index, onPress, oddCell, screenReader) => {
    let traits = [];
    const realIndex = parseInt(index, 10) + 1;

    if (item.uuid === props.selected) {
      traits = ['button', 'startsMedia', 'selected'];
    } else {
      traits = ['button', 'startsMedia'];
    }

    if (!screenReader) {
      const oddIndex = realIndex % 2 !== 0;

      // If even column render only even cells and vice versa with odd column
      if ((oddIndex && !oddCell) || (!oddIndex && oddCell)) {
        return null;
      }
    }

    return (
      <View
        style={[styles.cellContainer, {
          width: cellWidth,
        }]}
        key={item.uuid}
        accessible={true}
        accessibilityTraits={traits}
        accessibilityLabel={
          `${parseVoiceoverText(item.longTitle)}, ${realIndex} of ${gridLength} on ${props.floorName}.` +
          ` Plays audio for ${item.shortTitle} story.`
        }
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => onPress(item)}
        >
          <View>
            <Image
              style={[
                styles.cellImage,
                {
                  width: cellWidth,
                  height: getImageHeight(cellWidth, item.imageWidth, item.imageHeight),
                },
              ]}
              source={{
                uri: item.imageURL,
              }}
            />
            <Text
              style={[
                styles.cellText,
                { width: cellWidth },
                globalStyles.disclosure,
              ]}
            >
              {parseDisplayText(item.longTitle)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  if (props.screenReader) {
    let content = _.map(props.items, (item, index) => {
      return renderItem(item, index, props.onCellPress, null, true);
    });

    return (
      <View style={styles.gridRow}>
        {content}
      </View>
    );
  }

  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const dataSource = ds.cloneWithRows(props.items);

  const listView = (
    <View style={styles.gridRow}>
      <ListView
        enableEmptySections={true}
        contentContainerStyle={styles.gridColumn}
        dataSource={dataSource}
        initialListSize={20}
        renderRow={(item, sectionIndex, index) => {
          return renderItem(item, index, props.onCellPress, true);
        }}
      />
      <ListView
        enableEmptySections={true}
        contentContainerStyle={styles.gridColumn}
        dataSource={dataSource}
        initialListSize={20}
        renderRow={(item, sectionIndex, index) => {
          return renderItem(item, index, props.onCellPress, false);
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {listView}
    </View>
  );
};

Grid.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  floorName: PropTypes.string,
  selected: PropTypes.string,
  onCellPress: PropTypes.func.isRequired,
  screenReader: PropTypes.bool.isRequired,
};

export default Grid;

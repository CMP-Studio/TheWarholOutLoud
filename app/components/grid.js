
import React, { PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import { ListView } from 'realm/react-native';

const SPACING = 5;

import { globalStyles, OFF_BLACK } from '../styles';

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
          flex: screenReader ? 1 : 0,
        }]}
        key={item.uuid}
        accessible={true}
        accessibilityTraits={traits}
        accessibilityLabel={
          `${item.longTitle}, ${realIndex} of ${gridLength}.` +
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
              {item.longTitle}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const dataSource = ds.cloneWithRows(props.items);

  let listView;

  if (props.screenReader) {
    listView = (
      <ListView
        enableEmptySections={true}
        contentContainerStyle={styles.gridRow}
        dataSource={dataSource}
        renderRow={(item, sectionIndex, index) => {
          return renderItem(item, index, props.onCellPress, null, true);
        }}
      />
    );
  } else {
    listView = (
      <View style={styles.gridRow}>
        <ListView
          enableEmptySections={true}
          contentContainerStyle={styles.gridColumn}
          dataSource={dataSource}
          renderRow={(item, sectionIndex, index) => {
            return renderItem(item, index, props.onCellPress, true);
          }}
        />
        <ListView
          enableEmptySections={true}
          contentContainerStyle={styles.gridColumn}
          dataSource={dataSource}
          renderRow={(item, sectionIndex, index) => {
            return renderItem(item, index, props.onCellPress, false);
          }}
        />
      </View>
    );
  }

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
  selected: PropTypes.string,
  onCellPress: PropTypes.func.isRequired,
  screenReader: PropTypes.bool.isRequired,
};

export default Grid;

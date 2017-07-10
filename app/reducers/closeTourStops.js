import { UPDATE_BEACONS } from '../actions/beacon';

// TODO: In the future load data from a database to prevent memory pressure
import blockRules from '../data/beaconBlockRules.json';

import { TourStop } from '../models/tourStop';
const tourStops = TourStop.allRealmObjects().sorted('order');

import { _, includes } from 'lodash';

export const initialState = {
  regions: [],
  previousRegions: [],
  detectedFloor: null,
  tourStops: {},
  blockRules,
};

export function closeTourStops(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BEACONS: {
      if (action.newBeacons.length === 0) {
        return Object.assign({}, state, {
          regions: [],
          detectedFloor: null,
          tourStops: [],
        });
      }

      // 1. Filter out blocked beacons
      const beaconsToBlock = [];
      const beacons = _.chain(action.newBeacons)
        .reduce((beaconList, beaconUUID) => {
          const foundBeacon = blockRules[beaconUUID];

          if (foundBeacon != null) {
            beaconList.push(foundBeacon);

            for (const block of foundBeacon.blocks) {
              if (!includes(beaconsToBlock, block)) {
                beaconsToBlock.push(block);
              }
            }
          }

          return beaconList;
        }, [])
        .filter(beacon => {
          return !includes(beaconsToBlock, beacon.uuid);
        })
        .value();

      // 2. Find out the users floor and regions by the remaining beacons
      // A. Detect the floor the user is on
      const detectedFloors = _(beacons).flatMap('floor').uniq().value();

      // Only update floor if unanimous
      let detectedFloor;
      if (detectedFloors.length !== 1) {
        detectedFloor = state.detectedFloor;
      } else {
        detectedFloor = detectedFloors[0];
      }

      // B. Detect the regions
      const previousRegions = _(beacons).flatMap('region').uniq().value();

      // Only update regions if detected twice in a row
      let regions;
      if (state.regions.length === 0) {
        regions = previousRegions;
      } else {
        regions = _(state.previousRegions)
          .filter(region => {
            return includes(previousRegions, region);
          })
          .value();
      }

      if (regions.length === 0) {
        return Object.assign({}, state, {
          regions: state.regions,
          previousRegions,
          detectedFloor,
          tourStops: state.tourStops,
        });
      }

      // 3. Find the tour stops with the returned regions
      const query = `regions CONTAINS "${regions.join('" OR regions CONTAINS "')}"`;
      const showTourStops = tourStops.filtered(query);

      return Object.assign({}, state, {
        regions,
        previousRegions,
        detectedFloor,
        tourStops: showTourStops,
      });
    }

    default:
      return state;
  }
}

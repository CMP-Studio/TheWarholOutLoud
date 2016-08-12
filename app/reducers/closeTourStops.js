
import {
  UPDATE_BEACONS,
} from '../actions/beacon';

import { TourStop } from '../models/tourStop';

const tourStops = TourStop.allRealmObjects().sorted('order');

import { _, includes } from 'lodash';

export const initialState = {
  regions: [

  ],
  previousRegions: [

  ],
  detectedFloor: null,
  tourStops: {},
};

export function closeTourStops(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BEACONS: {
      if (action.newBeacons.length === 0) {
        return state;
      }

      // 1. Figure out which beacons we care about by filtering out the blocked ones

      // NOTE: Blocking cascades!
      // e.g. If 'y' blocks 'x' and 'x' blocks 'z' then even if 'x' is being
      // blocked it will still block 'z'
      const beaconUUIDs = action.newBeacons;

      const beaconsToBlock = _(action.beaconBlockRules)
        .filter((beacon) => {
          return includes(beaconUUIDs, beacon.uuid);
        })
        .flatMap('blocks')
        .uniq()
        .value();

      const beaconsUUIDsToShow = _(beaconUUIDs)
        .filter((uuid) => {
          return !includes(beaconsToBlock, uuid);
        })
        .value();

      // 2. Find out the users floor and regions by the remaining beacons
      const beaconData = _(action.beaconBlockRules)
        .filter((beacon) => {
          return includes(beaconsUUIDsToShow, beacon.uuid);
        })
        .value();

      // A. Detect the floor the user is on
      const detectedFloors = _(beaconData)
        .flatMap('floor')
        .uniq()
        .value();

      let detectedFloor;

      // Only update if unanimous
      if (detectedFloors.length !== 1) {
        detectedFloor = state.detectedFloor;
      } else {
        detectedFloor = detectedFloors[0];
      }

      // B. Detect the regions relevent to the user
      const detectedRegions = _(beaconData)
        .flatMap('region')
        .uniq()
        .value();

      const previousRegions = detectedRegions;
      let regions;

      if (state.regions.length === 0) {
        regions = previousRegions;
      } else {
        regions = _(state.previousRegions)
          .filter((region) => {
            return includes(previousRegions, region);
          })
          .value();
      }

      if (regions.length === 0) {
        return Object.assign({},
          state,
          {
            regions: state.regions,
            previousRegions,
            detectedFloor,
            tourStops: state.tourStops,
          }
        );
      }

      // 3. Find the tour stops with the returned regions
      const query = `regions CONTAINS "${regions.join('" OR regions CONTAINS "')}"`;
      const showTourStops = tourStops
        .filtered(query);

      return Object.assign({},
        state,
        {
          regions,
          previousRegions,
          detectedFloor,
          tourStops: showTourStops,
        }
      );
    }

    default:
      return state;
  }
}

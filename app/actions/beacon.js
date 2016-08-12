
import {
  NativeModules,
} from 'react-native';

import {
  addBeaconManagerEventListeners,
} from './beaconEvents';

const BeaconManager = NativeModules.CMSBeaconManager;

// *** Action Types ***
export const UPDATE_BEACONS = 'UPDATE_BEACONS';

export const START_SCANNING_FOR_BEACONS_FAILURE = 'START_SCANNING_FOR_BEACONS_FAILURE';
export const START_SCANNING_FOR_BEACONS_SUCCESS = 'START_SCANNING_FOR_BEACONS_SUCCESS';


// *** Action Creators ***
function startScanningForBeaconsSuccessful(rangingUUID, rangingIdentifier) {
  return {
    type: START_SCANNING_FOR_BEACONS_SUCCESS,
    rangingUUID,
    rangingIdentifier,
  };
}

function startScanningForBeaconsFailure(error) {
  return {
    type: START_SCANNING_FOR_BEACONS_FAILURE,
  };
}

export function startScanningForBeacons(rangingUUID, rangingIdentifier, beaconBlockRules) {
  return async (dispatch) => {
    addBeaconManagerEventListeners(dispatch, beaconBlockRules);

    try {
      await BeaconManager.startTracking(rangingUUID, rangingIdentifier);

      return dispatch(
        startScanningForBeaconsSuccessful(rangingUUID, rangingIdentifier)
      );
    } catch (e) {
      return dispatch(
        startScanningForBeaconsFailure(e)
      );
    }
  };
}

export function updateBeacons(newBeacons, beaconBlockRules) {
  return {
    type: UPDATE_BEACONS,
    newBeacons,
    beaconBlockRules,
  };
}

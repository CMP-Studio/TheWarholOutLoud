
import {
  NativeModules,
} from 'react-native';

import {
  addBeaconManagerEventListeners,
} from './beaconEvents';

import {
  addWayfindingManagerEventListeners,
} from './wayfindingEvents';

const BeaconManager = NativeModules.CMSBeaconManager;

// *** Action Types ***
export const UPDATE_BEACONS = 'UPDATE_BEACONS';
export const UPDATE_WAYFINDING_STATUS = 'UPDATE_WAYFINDING_STATUS';

export const START_SCANNING_FOR_BEACONS_FAILURE = 'START_SCANNING_FOR_BEACONS_FAILURE';
export const START_SCANNING_FOR_BEACONS_SUCCESS = 'START_SCANNING_FOR_BEACONS_SUCCESS';

// *** Location Services Types ***
export const LOCATION_SERVICES_STATUS_NOTDETERMINED = 'LOCATION_SERVICES_STATUS_NOTDETERMINED';
export const LOCATION_SERVICES_STATUS_DENIED = 'LOCATION_SERVICES_STATUS_DENIED';
export const LOCATION_SERVICES_STATUS_AUTHORIZED = 'LOCATION_SERVICES_STATUS_AUTHORIZED';

// *** No State Changes Actions ***
export function requestLocationServicesAuthorization() {
  BeaconManager.requestLocationServicesAuthorization();
}

// *** Action Creators ***
export function updateWayfindingStatus(bluetoothOn, locationServicesStatus) {
  return {
    bluetoothOn,
    locationServicesStatus,
    type: UPDATE_WAYFINDING_STATUS,
  };
}

export function startListeningForWayfindingEvents(rangingUUID, rangingIdentifier) {
  return async (dispatch) => {
    addWayfindingManagerEventListeners(dispatch, rangingUUID, rangingIdentifier);

    BeaconManager.beginBluetoothAndLocationServicesEvents();
  };
}

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

export function startScanningForBeacons(rangingUUID, rangingIdentifier) {
  return async (dispatch) => {
    addBeaconManagerEventListeners(dispatch);

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

export function updateBeacons(newBeacons) {
  return {
    type: UPDATE_BEACONS,
    newBeacons,
  };
}

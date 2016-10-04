
import {
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

import {
  LOCATION_SERVICES_STATUS_NOTDETERMINED,
  LOCATION_SERVICES_STATUS_AUTHORIZED,
  startScanningForBeacons,
  updateWayfindingStatus,
} from './beacon';

const BeaconManager = NativeModules.CMSBeaconManager;
const BeaconManagerObserver = new NativeEventEmitter(BeaconManager);

let bluetoothOn;
let locationServicesStatus;

function handleWayfindingChanges(dispatch, rangingUUID, rangingIdentifier) {
  dispatch(updateWayfindingStatus(bluetoothOn, locationServicesStatus));

  if (bluetoothOn && locationServicesStatus === LOCATION_SERVICES_STATUS_AUTHORIZED) {
    dispatch(startScanningForBeacons(rangingUUID, rangingIdentifier));
  }
}

// *** BeaconManager Native Module Events ***
let WayfindingEventListenerActive = false;
export function addWayfindingManagerEventListeners(
  dispatch, rangingUUID, rangingIdentifier,
) {
  if (WayfindingEventListenerActive) {
    return;
  }

  bluetoothOn = false;
  locationServicesStatus = LOCATION_SERVICES_STATUS_NOTDETERMINED;

  const {
    BluetoothStatusChanged,
    LocationServicesAllowedChanged,
  } = BeaconManager.Events;

  BeaconManagerObserver.addListener(BluetoothStatusChanged, (body) => {
    bluetoothOn = body.bluetoothOn;

    handleWayfindingChanges(dispatch, rangingUUID, rangingIdentifier);
  });

  BeaconManagerObserver.addListener(LocationServicesAllowedChanged, (body) => {
    locationServicesStatus = body.locationServicesStatus;

    handleWayfindingChanges(dispatch, rangingUUID, rangingIdentifier);
  });

  WayfindingEventListenerActive = true;
}

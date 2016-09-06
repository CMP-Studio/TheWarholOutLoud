
import {
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

import {
  updateBluetoothStatus,
  updateLocationServicesStatus,
} from './beacon';

const BeaconManager = NativeModules.CMSBeaconManager;
const BeaconManagerObserver = new NativeEventEmitter(BeaconManager);

// *** BeaconManager Native Module Events ***
let WayfindingEventListenerActive = false;
export function addWayfindingManagerEventListeners(dispatch) {
  if (WayfindingEventListenerActive) {
    return;
  }

  const {
    BluetoothStatusChanged,
    LocationServicesAllowedChanged,
  } = BeaconManager.Events;

  BeaconManagerObserver.addListener(BluetoothStatusChanged, (body) => {
    dispatch(updateBluetoothStatus(body.bluetoothOn));
  });

  BeaconManagerObserver.addListener(LocationServicesAllowedChanged, (body) => {
    dispatch(updateLocationServicesStatus(body.locationServicesStatus));
  });

  WayfindingEventListenerActive = true;
}

import { NativeModules, NativeEventEmitter } from 'react-native';

import { updateBeacons } from './beacon';

const BeaconManager = NativeModules.CMSBeaconManager;
const BeaconManagerObserver = new NativeEventEmitter(BeaconManager);

let update = true;
let updateTimer;
const UPDATE_INTERVAL = 500; // milliseconds

// *** BeaconManager Native Module Events ***
let BeaconManagerEventListenerActive = false;
export function addBeaconManagerEventListeners(dispatch) {
  if (BeaconManagerEventListenerActive) {
    return;
  }

  const { BeaconManagerBeaconPing } = BeaconManager.Events;

  BeaconManagerObserver.addListener(BeaconManagerBeaconPing, beacons => {
    if (update) {
      updateTimer = null;
      update = false;

      dispatch(updateBeacons(beacons));
    } else {
      if (updateTimer == null) {
        updateTimer = setTimeout(() => {
          update = true;
        }, UPDATE_INTERVAL);
      }
    }
  });

  BeaconManagerEventListenerActive = true;
}

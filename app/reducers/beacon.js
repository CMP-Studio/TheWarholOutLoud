
import {
  UPDATE_BEACONS,
  START_SCANNING_FOR_BEACONS_SUCCESS,
  START_SCANNING_FOR_BEACONS_FAILURE,
  UPDATE_BLUETOOTH_STATUS,
  UPDATE_LOCATION_SERVICES_STATUS,
  LOCATION_SERVICES_STATUS_NOTDETERMINED,
} from '../actions/beacon';

// TODO: In the future load data from a database to prevent memory pressure
import { blockRules } from '../data/beaconBlockRules';

export const initialState = {
  bluetoothOn: false,
  locationServicesStatus: LOCATION_SERVICES_STATUS_NOTDETERMINED,
  tracking: false,
  rangingUUID: '30ACEAFF-76B7-C685-BBF8-4D66E6DE977A',
  rangingIdentifier: 'Warhol Accessibility Project App',
  // beacons is only useful for debugging
  beacons:
  [
    // "majorNumber:minorNumber",
  ],
  blockRules,
};

export function beacon(state = initialState, action) {
  switch (action.type) {
    case UPDATE_BLUETOOTH_STATUS: {
      return Object.assign({},
        state,
        {
          bluetoothOn: action.bluetoothOn,
        }
      );
    }

    case UPDATE_LOCATION_SERVICES_STATUS: {
      return Object.assign({},
        state,
        {
          locationServicesStatus: action.locationServicesStatus,
        }
      );
    }

    case START_SCANNING_FOR_BEACONS_SUCCESS: {
      return Object.assign({},
        state,
        {
          tracking: true,
          rangingIdentifier: action.rangingIdentifier,
          rangingUUID: action.rangingUUID,
        }
      );
    }

    case START_SCANNING_FOR_BEACONS_FAILURE: {
      return Object.assign({},
        state,
        {
          tracking: false,
        }
      );
    }

    case UPDATE_BEACONS: {
      if (__DEV__) {
        return Object.assign({},
          state,
          {
            beacons: action.newBeacons,
          }
        );
      }

      return state;
    }

    default:
      return state;
  }
}

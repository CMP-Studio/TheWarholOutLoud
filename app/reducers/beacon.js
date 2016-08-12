
import {
  UPDATE_BEACONS,
  START_SCANNING_FOR_BEACONS_SUCCESS,
} from '../actions/beacon';

// TODO: In the future load data from a database to prevent memory pressure
import { blockRules } from '../data/beaconBlockRules';

export const initialState = {
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
    case START_SCANNING_FOR_BEACONS_SUCCESS: {
      return Object.assign({},
        state,
        {
          rangingIdentifier: action.rangingIdentifier,
          rangingUUID: action.rangingUUID,
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

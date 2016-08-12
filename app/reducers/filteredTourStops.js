
import {
  ALL_TOUR_STOPS,
 } from '../actions/filteredTourStops';

import { TourStop } from '../models/tourStop';

const initialState = {
  tourStops: TourStop.allRealmObjects().sorted('order'),
};

export function filteredTourStops(state = initialState, action) {
  switch (action.type) {
    case ALL_TOUR_STOPS: {
      return initialState;
    }

    default:
      return state;
  }
}

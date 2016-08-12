
import { TOGGLE_FLOOR_EXPANDED } from '../actions/amenities';

// TODO: In the future load data from a database to prevent memory pressure
import { allAmenities } from '../data/amenities';

const initialState = {
  allAmenities,
  expandedFloors:
  [
    true, // Underground
    true, // Entrance Space
    true, // Floor 2
    true, // Floor 3
    true, // Floor 4
    true, // Floor 5
    true, // Floor 6
    true, // Floor 7
  ],
};

export function amenities(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FLOOR_EXPANDED: {
      const updatedExpandedFloors = state.expandedFloors
        .map((floor, index) => {
          if (index === action.index) {
            return !floor;
          }

          return floor;
        });

      return (
        Object.assign({},
          state,
          {
            expandedFloors: updatedExpandedFloors,
          }
        )
      );
    }

    default:
      return state;
  }
}

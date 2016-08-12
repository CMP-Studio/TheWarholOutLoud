
import {
  SCREEN_READER_STATUS,
} from '../actions/accessibility';

const initialState = {
  screenReader: false,
};

export function accessibility(state = initialState, action) {
  switch (action.type) {

    case SCREEN_READER_STATUS: {
      return Object.assign({},
        state,
        {
          screenReader: action.screenReader,
        }
      );
    }

    default:
      return state;
  }
}

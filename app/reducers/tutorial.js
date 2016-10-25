
import {
  TUTORIAL_PAGE_DID_CHANGE,
  HIDE_TUTORIAL,
  SHOW_TUTORIAL,
 } from '../actions/tutorial';

const initialState = {
  currentPage: 0,
  tutorialHidden: false,
};

export function tutorial(state = initialState, action) {
  switch (action.type) {
    case TUTORIAL_PAGE_DID_CHANGE: {
      return (
        Object.assign({},
          state,
          {
            currentPage: action.newPage,
          }
        )
      );
    }

    case SHOW_TUTORIAL: {
      return (
        Object.assign({},
          state,
          {
            tutorialHidden: false,
          }
        )
      );
    }

    case HIDE_TUTORIAL: {
      return (
        Object.assign({},
          state,
          {
            tutorialHidden: true,
          }
        )
      );
    }

    default:
      return state;
  }
}

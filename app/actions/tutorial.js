
// *** Action Types ***
export const TUTORIAL_PAGE_DID_CHANGE = 'TUTORIAL_PAGE_DID_CHANGE';
export const HIDE_TUTORIAL = 'HIDE_TUTORIAL';

// *** Action Creators ***
export function tutorialPageDidChange(newPage) {
  return {
    type: TUTORIAL_PAGE_DID_CHANGE,
    newPage,
  };
}

export function hideTutorial() {
  return {
    type: HIDE_TUTORIAL,
  };
}

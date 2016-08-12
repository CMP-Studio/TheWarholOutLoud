
import {
  NativeModules,
} from 'react-native';

import {
  addAccessibilityManagerEventListeners,
} from './accessibilityEvents';

const AccessibilityManager = NativeModules.CMSAccessibilityManager;

// *** Action Types ***
export const SCREEN_READER_STATUS = 'SCREEN_READER_STATUS';

// *** No State Changes Actions ***
export function screenReaderSpeak(text) {
  AccessibilityManager.screenReaderSpeak(text);
}

export function screenReaderScreenChanged(text) {
  AccessibilityManager.screenReaderScreenChanged(text);
}

export function screenReaderReloadLayout() {
  AccessibilityManager.screenReaderReloadLayout();
}

// *** Action Creators ***
export function updateScreenReaderStatus(screenReader) {
  return {
    type: SCREEN_READER_STATUS,
    screenReader,
  };
}

export function getScreenReaderStatus() {
  return async (dispatch) => {
    addAccessibilityManagerEventListeners(dispatch);

    const [screenReader] = await AccessibilityManager.screenReaderStatus();

    return dispatch(
      updateScreenReaderStatus(screenReader)
    );
  };
}

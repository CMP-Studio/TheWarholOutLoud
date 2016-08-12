
import {
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

import {
  updateScreenReaderStatus,
} from './accessibility';

const AccessibilityManager = NativeModules.CMSAccessibilityManager;
const AccessibilityManagerObserver = new NativeEventEmitter(AccessibilityManager);

// *** AccessibilityManager Native Module Events ***
let AccessibilityManagerEventListenerActive = false;
export function addAccessibilityManagerEventListeners(dispatch) {
  if (AccessibilityManagerEventListenerActive) {
    return;
  }

  const {
    screenReaderStatusChanged,
  } = AccessibilityManager.Events;

  AccessibilityManagerObserver.addListener(screenReaderStatusChanged, (body) => {
    dispatch(
      updateScreenReaderStatus(body.screenReaderStatus)
    );
  });

  AccessibilityManagerEventListenerActive = true;
}

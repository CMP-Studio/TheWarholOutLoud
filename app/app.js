
import React from 'react';
import { Settings } from 'react-native';
import { Provider } from 'react-redux';

import RootContainer from './containers/root';
import { configureStore } from './store';

import DeviceInfo from 'react-native-device-info';

import { startListeningForWayfindingEvents } from './actions/beacon';
import { decideIfToShowTutorial } from './actions/tutorial';

import {
  initialState,
} from './reducers/beacon';

const appVersion = `${DeviceInfo.getVersion()}.${DeviceInfo.getBuildNumber()}`;
const lastAppVersion = Settings.get('LastAppVersion');
const showTutorialEveryTime = Settings.get('ShowTutorialEveryTime');

const newVersion = lastAppVersion == null || lastAppVersion !== appVersion;

// Hydrate the DB
import hydrate from './data/hydrate';
hydrate(newVersion);

const store = configureStore();
store.dispatch(
  decideIfToShowTutorial(showTutorialEveryTime, newVersion)
);

if (newVersion) {
  Settings.set({ LastAppVersion: appVersion });
}

const App = () => {
  store.dispatch(startListeningForWayfindingEvents(
    initialState.rangingUUID, initialState.rangingIdentifier
  ));

  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
	);
};

export default App;

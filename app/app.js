
import React from 'react';
import { Settings } from 'react-native';
import { Provider } from 'react-redux';

import RootContainer from './containers/root';
import { configureStore } from './store';

import DeviceInfo from 'react-native-device-info';

import { WayfindingActor } from './actors/wayfindingActor';

import { decideIfToShowTutorial } from './actions/tutorial';

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
  const wayfindingActor = new WayfindingActor(store);
  wayfindingActor.startListening();

  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
	);
};

export default App;

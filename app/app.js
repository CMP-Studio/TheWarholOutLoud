
import React from 'react';
import { Provider } from 'react-redux';

import RootContainer from './containers/root';
import { configureStore } from './store';

import { startListeningForWayfindingEvents } from './actions/beacon';

import {
  initialState,
} from './reducers/beacon';

// Hydrate the DB
import hydrate from './data/hydrate';
hydrate();

const store = configureStore();
store.dispatch(startListeningForWayfindingEvents(
  initialState.rangingUUID, initialState.rangingIdentifier
));

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
	);
};

export default App;

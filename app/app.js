
import React from 'react';
import { Provider } from 'react-redux';

import RootContainer from './containers/root';
import { configureStore } from './store';

// Hydrate the DB
import hydrate from './data/hydrate';
hydrate();

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
	);
};

export default App;

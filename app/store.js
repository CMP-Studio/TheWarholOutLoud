
import { createStore, applyMiddleware, compose } from 'redux';

import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root';

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      devTools()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers/root').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

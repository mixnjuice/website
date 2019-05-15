import React from 'react';
import root from 'window-or-global';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import sagas from './src/sagas';
import reducer from './src/reducers';

/* eslint-disable no-underscore-dangle */
const composer = root.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const sagaMiddleware = createSagaMiddleware();
const enhancers = composer(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, {}, enhancers);

if (module.hot) {
  module.hot.accept('./src/reducers', () => {
    store.replaceReducer(require('./src/reducers').default);
  });
}

sagaMiddleware.run(sagas);

/* eslint-disable react/display-name, react/prop-types */
export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};

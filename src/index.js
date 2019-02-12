import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Store
import stores from './Store/store';
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Route
import Web from './Routes/web';
// Global Style
import './styles/styles.scss';

// LocalStorage
import { loadState, saveState } from './Store/LocalStorage';

const persistStore = loadState();

// init store
const store = createStore(
  stores,
  persistStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Web />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

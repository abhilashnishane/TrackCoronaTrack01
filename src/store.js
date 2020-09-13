import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './reducers';

const initialState = {};

const middleware = [thunk];

// const store = createStore(rootreducer, initialState, applyMiddleware(...middleware));
const store = createStore(
  rootreducer, 
  initialState, 
  compose (
    applyMiddleware(...middleware),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
      ? a => a
      : window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
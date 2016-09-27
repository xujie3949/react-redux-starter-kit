import { combineReducers } from 'redux';
import locationReducer from './location';

const makeRootReducer = asyncReducers =>
  combineReducers({
    location: locationReducer,
    ...asyncReducers,
  });

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducer } from './reducers/pizzaReducers';

const rootReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
});

const initialState = {};

const middleware = [thunk];

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware)
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;

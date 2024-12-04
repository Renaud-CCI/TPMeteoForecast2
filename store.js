// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import * as reducers from './reducers'

// const reducer = combineReducers(reducers)
// // applyMiddleware supercharges createStore with middleware:
// const store = createStore(reducer, applyMiddleware(thunk))

// export default store;

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   applyMiddleware(...middleware)
// );

// export default store;

import { createStore } from 'redux';

const reducer = (state = {}, action) => state;

const store = createStore(reducer);

export default store;
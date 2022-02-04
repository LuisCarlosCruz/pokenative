import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers/index.action';
import getPokByName from '../reducers/getPokByName.reducer.js';


const rootReducer = combineReducers({
  pokemon: getPokByName
});

const store = createStore((rootReducer));

// composeWithDevTools(applyMiddleware(thunk))
  
export default store;

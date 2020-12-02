import { combineReducers } from 'redux';
import initReducer from './initReducer';
import pieReducer from './pieReducer';
import barReducer from './barReducer';

export default combineReducers({
  initReducer,
  pieReducer,
  barReducer,
});

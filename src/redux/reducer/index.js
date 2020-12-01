import { combineReducers } from 'redux';
import initReducer from './initReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  initReducer,
  dataReducer,
});

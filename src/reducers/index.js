import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import DataReducer from './DataReducer'

export default combineReducers({
  loginStatus: LoginReducer,
  data: DataReducer
});

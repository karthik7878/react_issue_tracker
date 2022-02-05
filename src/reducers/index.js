import {combineReducers} from 'redux';
import issueReducer from './issueReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
  issues:issueReducer,
  users:userReducer
});

export default rootReducer;
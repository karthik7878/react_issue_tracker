import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
  

    case types.ADD_USER_SUCCESS:
      return [
        ...state,
        action.user
      ];
      
    default:
      return state;
  }
}

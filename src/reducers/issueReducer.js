import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function issueReducer(state = initialState.issues, action) {
  switch (action.type) {
    case types.LOAD_ISSUE_SUCCESS:
      return action.issues;

    case types.ADD_ISSUE_SUCCESS:
      return [
        ...state,
        action.issue
      ];

      case types.UPDATE_ISSUE_SUCCESS:
        let newState1 = state.filter(issue => issue.id != action.id);
      return [
        ...state,
       action.issue
      ]; 
     
    case types.DELETE_ISSUE_SUCCESS:
       
       console.log("inside reducer for delete");
      let newState= state.filter(issue => issue.id !== action.id);
        return newState;

    case types.UPDATE_COUNT_SUCCESS:
      return state;
    default:
      return state;
  }
}

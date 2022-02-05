import * as types from './actionTypes';
import UserApi from "../data/UserApi";


export function addUserSuccess(user) {
    return { type: types.ADD_USER_SUCCESS, user };
  }

export function addUser(users) {
    return function(dispatch, getState) {
        return UserApi.saveUsers(users).then(user => {
            dispatch(addUserSuccess(user));
        }).catch(error => {
            throw (error);
        });
    };
  }
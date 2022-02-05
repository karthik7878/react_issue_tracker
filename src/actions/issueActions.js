import * as types from './actionTypes';
import IssueApi from '../data/IssueApi';


export function loadIssuesSuccess(issues) {
    return { type: types.LOAD_ISSUE_SUCCESS, issues };
}

export function addIssueSuccess(issue) {
    return { type: types.ADD_ISSUE_SUCCESS, issue };
}

export function updateIssueSuccess(id1,issue) {
  return { type: types.UPDATE_ISSUE_SUCCESS, id1,issue };
}

export function deleteIssueSuccess(id) {
  console.log("inside deleteIssueSuccess method of issueActions page");
  return { type: types.DELETE_ISSUE_SUCCESS,id};
}

export function ChangeCountSuccess(id1,count) {
  return { type: types.UPDATE_COUNT_SUCCESS, id1,count };
}


export function loadIssues() {
    return function(dispatch) {
        return IssueApi.getAllIssues().then(issues => {
            dispatch(loadIssuesSuccess(issues));
        }).catch(error => {
            throw (error);
        });
    };
}

export function addIssue(issues) {
    return function(dispatch, getState) {
        return IssueApi.saveIssues(issues).then(issue => {
            dispatch(addIssueSuccess(issue));
        }).catch(error => {
            throw (error);
        });
    };
}



export function updateCount(id1,issue) {
  return function(dispatch, getState) {
  return IssueApi.changeIssue(id1,issue).then(issue=>{
    dispatch(updateIssueSuccess(id1,issue));

  }).catch(error=>{
    throw "error in updation";
  });
  };

}



export function ChangeCount(id1,count) {
  return function(dispatch, getState) {
  return IssueApi.ChangeCount(id1,count).then(count=>{
    dispatch(ChangeCountSuccess(id1,count));

  }).catch(error=>{
    throw "error in updation";
  });
  };

}


export function deleteIssue(id) {
  console.log("Inside deleteIssue method of issueActions");
  return function (dispatch, getState) {
  
    return IssueApi.deleteIssue(id).then(() => {
      dispatch(deleteIssueSuccess(id));
    }).catch(error => {
      throw(error);
    });
    
  };
}

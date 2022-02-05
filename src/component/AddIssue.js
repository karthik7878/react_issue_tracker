import React, {Component,Link}from "react";
import { withRouter } from "react-router-dom";
import IssueForm from "./IssueForm";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as issueActions from '../actions/issueActions';


class AddIssue extends Component {
    constructor(props) {
        super(props);
         this.handleSubmit = this.handleSubmit.bind(this);
       
    }

  
  

     handleSubmit(issue) {
      
       this.props.actions.addIssue(issue)
      .then(()=> toastr.success('Issue added'))
      .then(this.props.history.push("/issue2"))
      .catch(error => {
        alert(error);

        
      });
        
    }

  
    render() {

        
        return (<div>
        <IssueForm onSave = { this.handleSubmit } />
            <br/>
            
       
            
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
        return {
            issues: state.issues
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(issueActions, dispatch)
        };
    }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddIssue));
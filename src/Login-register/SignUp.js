import React, {Component,Link}from "react";
import { withRouter } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as userActions from "../actions/userActions";

class SignUp extends Component {
    constructor(props) {
        super(props);
         this.handleSubmit = this.handleSubmit.bind(this);
       
    }

  
  

     handleSubmit(user) {
      
       this.props.actions.addUser(user)
      .then(()=> toastr.success('User added'))
      .then(this.props.history.push("/login"))
      .catch(error => {
        alert(error);

        
      });
        
    }

  
    render() {

        
        return (<div>
        <SignUpForm onSave = { this.handleSubmit } />
        
            <br/>
            
       
            
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
        return {
            users: state.users
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(userActions, dispatch)
        };
    }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
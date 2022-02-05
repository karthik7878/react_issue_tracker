import {Component}from "react";
import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as issueActions from '../actions/issueActions';


class DeleteIssue extends Component {
    constructor(props) {
        super(props);
         this.handleSubmit = this.handleSubmit.bind(this);
        
       
    }
     handleSubmit(issue) {
        
       this.props.actions.deleteIssue(issue)
      .then(()=> toastr.success('Issue deleted'))
      .catch(error => {
        alert(error);
      });
        this.props.history.pop(`/issue2`);
    }

   

    render() {
        this.state.regemail=this.props.match.params.regemail;
        return ( this.handleSubmit 
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DeleteIssue));
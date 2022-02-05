import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import * as issueActions from '../actions/issueActions';
import UpdateForm from './UpdateForm';
import toastr from 'toastr';
var currentID=0;

class  UpdateComponent extends Component{
  constructor(props) {
    super(props);
     this.state={
       id1:this.props.match.params.id,
      result:[]
      
    }
    this.updateIssue = this.updateIssue.bind(this);
   
  }
 
   
  updateIssue(issue) {
    this.state.submitted=true;
    
    console.log(this.state.id1);
    this.props.actions.updateCount(this.state.id1,issue)
    .then(()=> toastr.success('Issue updated'))
    .then(this.props.history.push("/issue2"))
      .catch(error => {
        alert(error);
      });
      
 
  }
  
 
 
  
 
  render() {
   
    let iname='';
    let iseverity='';
    let istatus='';
    let icreatedDate='';
    let iresolvedDate='';
    axios.get("http://localhost:3001/issues?id="+this.state.id1)
    .then(result=>result.data)
    .then((data)=>{
        this.setState({
          result:data
        })
    })
    .catch((error)=>{
      alert("error "+error);
    })

    console.log(this.state.result);
    this.state.result.map((issue)=>{
      iname=issue.name;
      iseverity=issue.severity;
      istatus=issue.status;
      icreatedDate=issue.createdDate;
      iresolvedDate=issue.resolvedDate;
    })
    console.log(iname);
    console.log(iseverity);
    console.log(icreatedDate);
    console.log(iresolvedDate);
       // console.log(this.state.regemailid);
    return (
      
      <div>
 
         <UpdateForm onAddIssue={this.updateIssue} name={iname} severity={iseverity} status={istatus}
         createdDate={icreatedDate} resolvedDate={iresolvedDate}/> <br/>
        
      </div>);
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
 
export default connect(mapStateToProps, mapDispatchToProps)(UpdateComponent);
import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as issueActions from '../actions/issueActions';
import IssueList from "./IssueList";
import {BrowserRouter as Redirect} from 'react-router-dom';

class AllIssuePage extends Component {
    constructor(props) {
        super(props);
        toastr.options.timeOut = 1000;
      this.state={
        regemail:'',
        handlelogin:false
    }
        this.handleadd = this.handleadd.bind(this);
        this.handledelete = this.handledelete.bind(this);
        this.handlereg = this.handlereg.bind(this);
        this.handlechart = this.handlechart.bind(this);
    }

    handlechart()
    {
        this.props.history.push("/chart");
    }

    handlereg()
    {
        this.props.history.push("/regdetails");
    }


    handledelete()
    {
        if(this.state.handlelogin)
        {
        let farray=[];
        let delarray = JSON.parse(localStorage.getItem("delarray"));
        for(let i=0;i<delarray.length;i++)
        {
            this.props.actions.deleteIssue(delarray[i])
        .then(()=> toastr.success('Issue deleted'))
        .then(localStorage.setItem("delarray",JSON.stringify(farray)))
        .then(localStorage.setItem("iterator",JSON.stringify(0)))
         .catch(error => {
        alert(error);
        });
        }
    }

    else
    { 
            let auth3 = window.confirm("Login to Perform Delete operation.. Click OK to Login or Cancel to cancel the operation");
            if(auth3){
            this.props.history.push("/login");
            }
            else
            {
                this.props.history.push("/issue2");
            }
        

    }
    }

    handleadd()
    {
       
        if(this.state.handlelogin)
        {
            this.props.history.push("/addIssue");
        }
        else
        {
            let auth = window.confirm("Login to Perform Add Operation.. Click OK to Login or Cancel to cancel the operation");
            if(auth){
            this.props.history.push("/login");
            }
            else
            {
                this.props.history.push("/issue2");
            }
        }
    }
    
    
    

    render() {
        
     
       this.state.regemail=localStorage.getItem("emailid");
    
        const regpath=`/regdetails`;
        const addpath=`/addIssue`;
        console.log(localStorage.getItem("emailid"));
        console.log(localStorage.getItem("loginstate"));
   
        if(localStorage.getItem("loginstate")=="true")
        {
            this.state.handlelogin=true;
        }
        else
        {
            this.state.handlelogin=false;
        }
      

       
        return ( < div >
            
            
          
            <h1> Issues List (Using Redux) </h1>   

                
                <IssueList issues={this.props.issues} regemailid={this.state.regemail}> </IssueList> 
                
                &nbsp;&nbsp; <button title="deleteselected" onClick={this.handledelete} className="btn btn-secondary">Delete Selected</button> &nbsp;<br/><br/>
              &nbsp;&nbsp; <button aria-setsize="lg" className="btn btn-secondary" onClick={this.handleadd}> Add Issue </button> &nbsp;
              &nbsp;&nbsp;{this.state.handlelogin && <button onClick={this.handlereg} aria-setsize="lg" title="viewreg" className="btn btn-secondary" >View Registration Details</button>}&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; { this.state.handlelogin && <button onClick={this.handlechart} aria-setsize="lg"  className="btn btn-secondary">View Chart</button>}&nbsp;&nbsp;&nbsp;
              
              
               
               <br/>
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

    export default connect(mapStateToProps, mapDispatchToProps)(AllIssuePage);
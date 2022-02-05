import axios from 'axios';
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import toastr from 'toastr';
import * as issueActions from '../actions/issueActions';
import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Issue from './Issue';


        
       let count=0;
    
class IssueDetails extends Component {

    constructor(props)
    {
        super(props);

        this.state={
            modified:false,
            result:[]
           
            
        };

        this.authenticate(props.history);
    }

   

   
    authenticate(history)
    {
        let authenticated = window.confirm("Are you sure you want to view the details??");

        if(authenticated)
        {
        let i=JSON.parse(localStorage.getItem("id"));

        
        //console.log(result);
        
        this.props.issues.map((issue)=>{
            if(issue.id === i)
            {
            console.log(issue);
            count=(Number(issue.issuecount)+1);
            }

           
        })

       
        
        //console.log(this.state.count);
        
        
        
        
       
        this.props.actions.ChangeCount(i,count)
        .then(()=> toastr.success('Count updated'))
        

        .catch(error => {
        alert(error);
      });

    }

 

       // let count = this.props.match.params.issuecount;
        //if(count==0)
        //{
          //  count=1;
        //}
        
        //++count;
        
        //count=parseInt(count);
        
        
        if(!authenticated)
        {
            history.replace(`/issue2`);
        }

    }
   
    render() {
   
                
        this.state.regemail=this.props.match.params.regemail;
    
        return (
            <div className="container">
            <label><h1>Issue Details: </h1></label> <br></br>
           
            <div className="container">
         
         <div className="d-flex flex-row ">
                  <div className="col-lg-12">
                  <div className="col-lg-10 col-md-10 mb-10">

                      <div className="card bg-light" >
    
                        <div className="card-body">
                        <p>Issue Description : {this.props.match.params.name}</p>
                        <p>Severity : {this.props.match.params.severity}</p>
                        <p>Status : {this.props.match.params.status}</p>
                        <p>Created Date : {this.props.match.params.createdDate}</p>
                        <p>Resolved Date : {this.props.match.params.resolvedDate}</p>
                           
                      </div></div>
                    </div>
                    




                  </div>
                </div>
              </div><br/>
            <Link to={`/issue2`}><button className="btn btn-dark">Back</button></Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(IssueDetails));

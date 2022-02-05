import React, {Component} from "react";
import Issue from "./Issue";

 class IssueList extends Component {

    constructor(props)
    {
        super(props);
        this.deleteIssue = this.deleteIssue.bind(this);
        this.state={
          regemail:'',
          searchTerm:null,
          namecheck:false,
            severitycheck:false,
            statuscheck:false,
            createdDatecheck:false,
            resolvedDatecheck:false,
          
        }
        this.setSearchTerm = this.setSearchTerm.bind(this);
    }

    deleteIssue(id) {
        console.log("inside deleteIssue method of IssueList Page");
      this.props.actions.deleteIssue(id)
      .catch(error => {
          alert(error);
      });
      this.props.history.push('/issue2');
    }

  setSearchTerm(e)
  {
    let keyword = e.target.value;
    this.setState({searchTerm:keyword})
    
  }
    render() {

     let greet="hello";
       
    this.state.regemail=this.props.regemailid;
  
       
       let issueNodes = this.props.issues.filter((issue)=>{
        if(this.state.searchTerm==null)
          return issue;

        else if(issue.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          || issue.severity.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          || issue.status.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          || issue.createdDate.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          || issue.resolvedDate.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          )
        
        {
          return issue;
        }

       }).map(issue => ( <Issue key={issue.id} regemail={this.state.regemail} namecheck={this.state.namecheck} severitycheck={this.state.severitycheck} statuscheck={this.state.statuscheck} createdDatecheck={this.state.createdDatecheck}
        resolvedDatecheck={this.state.resolvedDatecheck} id={issue.id} name={issue.name} severity={issue.severity}
                                                            status={issue.status} createdDate={issue.createdDate} resolvedDate={issue.resolvedDate}  onDelete={this.deleteIssue}  > </Issue>
      ));
     
     
        
        return (

          <div>
            <input type="text" id="search" placeholder="Search..."  onChange={this.setSearchTerm} /><br/>
            <input type="checkbox" data-testid="name" title="name" name="namecheck" value="namecheck"    onChange={(event)=>this.setState({namecheck:event.target.checked})}/>&nbsp;
            <label >Issue_Description</label>&nbsp;&nbsp;
            <input type="checkbox" data-testid="severity" name="severitycheck" value="severitycheck"  onChange={(event)=>this.setState({severitycheck:event.target.checked})}/>&nbsp;
            <label >Severity</label>&nbsp;&nbsp;
            <input type="checkbox" data-testid="status" name="statuscheck" value="statuscheck"  onChange={(event)=>this.setState({statuscheck:event.target.checked})}/>&nbsp;
            <label >Status</label>&nbsp;&nbsp;
            <input type="checkbox" data-testid="createdDate" name="createdDatecheck" value="createdDatecheck"  onChange={(event)=>this.setState({createdDatecheck:event.target.checked})}/>&nbsp;
            <label >Created Date</label>&nbsp;&nbsp;
            <input type="checkbox" data-testid="resolvedDate" name="resolvedDatecheck" value="resolvedDatecheck"  onChange={(event)=>this.setState({resolvedDatecheck:event.target.checked})}/>&nbsp;
            <label >Resolved Date</label>&nbsp;&nbsp;
            <div className="container">

            <div className="row">
            <div className="col-lg-12">
            {issueNodes}
            </div>
            </div>
            </div>
            
            </div> 
            
            
        );
    }

}

  
  export default IssueList;
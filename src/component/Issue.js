import React from "react";
import { Route , withRouter} from 'react-router-dom';


let i=0;
class Issue extends React.Component {
     constructor(props) {
        super(props);
         this.state={
             flag:false,
            counter:0,
           delarray:[],
            loggedin:false,
            id1:this.pid
            
            
             
            }
        
         this.handlechecked = this.handlechecked.bind(this);
        this.handleclick = this.handleclick.bind(this);
        this.handleupdate = this.handleupdate.bind(this);
     }
     
     handleclick()
     {
        if(localStorage.getItem("loginstate") === "true")
        {
            localStorage.setItem("id",this.props.id.toString());
           this.props.history.push(`/issue/${this.props.id}/${this.props.name}/${this.props.severity}/${this.props.status}/${this.props.createdDate}/${this.props.resolvedDate}`);

        }

        else
        {
            let auth6 = window.confirm("Login to View Issue Details.. Click OK to Login or Cancel to cancel the operation");
            if(auth6){
            this.props.history.push("/login")
            }
            else
            {
                this.props.history.push("/issue2");
            }
        }
     }



    handleupdate()
    {

        if(localStorage.getItem("loginstate") === "true")
        {
            console.log(localStorage.getItem("loginstate"));
            this.props.history.push(`/update/${this.props.id}`);
        }

        else
        {
            let auth5 = window.confirm("Login to perform Update.. Click OK to Login or Cancel to cancel the operation");
            if(auth5){
            this.props.history.push("/login")
            }
            else
            {
                this.props.history.push("/issue2");
            }

        }
    }
  
    

    handlechecked(e)
    {
       if(localStorage.getItem("loginstate")==="true")
       {
       i=JSON.parse(localStorage.getItem("iterator"))
        this.setState({deletecheck:e.target.checked});
        console.log(this.props.id);
         this.state.delarray=JSON.parse(localStorage.getItem("delarray"));
        this.state.delarray[i]=this.props.id;
       ++i;
       localStorage.setItem("delarray",JSON.stringify(this.state.delarray));
       localStorage.setItem("iterator",JSON.stringify(i));
        }


}
 
   
     render() {
         
             
  if(localStorage.getItem("loginstate")=="true")
  {
      this.state.loggedin=true;
  }      
   
  else{
      this.state.loggedin=false;
  }

 console.log(localStorage.getItem("loginstate"));
const path = `/issue/${this.props.id}/${this.props.name}/${this.props.severity}/${this.props.status}/${this.props.createdDate}/${this.props.resolvedDate}`;
const path2=`/issue2`;
console.log(this.state.delarray);

   

                
     if(this.props.namecheck===true&&
        this.props.severitycheck===true&&
        this.props.statuscheck===true&&
        this.props.createdDatecheck===true&&
        this.props.resolvedDatecheck===true){
                    return(
                        
                        <div>
                            
                        
                             
                            <input type="checkbox" id="deletecheck" name="deletecheck" value="deletecheck" onClick={this.handlechecked} />  
                            
                            <div className="col-lg-10 col-md-10 mb-10">
                            <div className="card bg-light" >
                            <div className="card-body">
                             <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                                    
                             
                                <p>Severity : {this.props.severity}</p>
                                <p>Status : {this.props.status}</p>
                                <p>Created Date : {this.props.createdDate}</p>
                                 <p>Resolved Date : {this.props.resolvedDate}</p>
                            
                             <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
                            
                            </div></div>
                            
                            </div>
                             <br/>
                         </div> 
                    );
                   
                    }

    else if(this.props.namecheck===true&&this.props.severitycheck===false&&this.props.statuscheck===false
        &&this.props.createdDatecheck===false&&this.props.resolvedDatecheck===false)
    {
            return(
                <div>
                
                <input type="checkbox" id="deletecheck" name="deletecheck" 
                value="deletecheck" onChange={this.handlechecked} />
                <div className="col-lg-10 col-md-10 mb-10">
                <div className="card bg-light" >
                <div className="card-body">
                <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                       
               
                <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
                </div></div>
                </div> <br/>      
                </div>  );
                        }
    else if(this.props.namecheck===true&&this.props.severitycheck===true&&this.props.statuscheck===false
        &&this.props.createdDatecheck===false&&this.props.resolvedDatecheck===false){
            
            return(
                <div>
                
                     <input type="checkbox" id="deletecheck" name="deletecheck" 
                     value="deletecheck" onChange={this.handlechecked}/>
                     <div className="col-lg-10 col-md-10 mb-10">
                     <div className="card bg-light" >
                        <div className="card-body">
                        <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Severity : {this.props.severity}</p>
                    
                     <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
                             </div></div>
                            </div><br/>
                         </div>  
                    );
    }     
    
    else if(this.props.namecheck===true&&this.props.severitycheck===false&&this.props.statuscheck===true
        &&this.props.createdDatecheck===false&&this.props.resolvedDatecheck===false){
            return(
                <div>
                
                     <input type="checkbox" id="deletecheck" name="deletecheck" 
                     value="deletecheck" onChange={this.handlechecked}/>
                     <div className="col-lg-10 col-md-10 mb-10">
                     <div className="card bg-light" >
                        <div className="card-body">
                        <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Status : {this.props.status}</p> 
                             
                             <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
                </div></div>
                </div>  <br/>     
                </div>  );        
    }
    else if(this.props.namecheck===true&&this.props.severitycheck===false&&this.props.statuscheck===false
        &&this.props.createdDatecheck===true&&this.props.resolvedDatecheck===false){
            return(
                <div>
                
                     <input type="checkbox" id="deletecheck" name="deletecheck" 
                     value="deletecheck" onChange={this.handlechecked}/>
                    <div className="col-lg-10 col-md-10 mb-10">
                    <div className="card bg-light" >
                        <div className="card-body">
                        <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Created Date : {this.props.createdDate}</p>  
                             
                             <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
                </div></div>
                </div> <br/>      
                </div>  );          
    }
    else if(this.props.namecheck===true&&this.props.severitycheck===false&&this.props.statuscheck===false
        &&this.props.createdDatecheck===false&&this.props.resolvedDatecheck===true){
            return(
                <div>
                
                     <input type="checkbox" id="deletecheck" name="deletecheck" 
                     value="deletecheck" onChange={this.handlechecked}/>
                     <div className="col-lg-10 col-md-10 mb-10">
                     <div className="card bg-light" >
                        <div className="card-body">
                        <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Resolved Date : {this.props.resolvedDate}</p>
                            
                             <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
                             </div></div>
                            </div><br/>
                         </div>  
                    );      
    }

    else if(this.props.namecheck===true&&this.props.severitycheck===true&&this.props.statuscheck===true
        &&this.props.createdDatecheck===false&&this.props.resolvedDatecheck===false){
            return(
                <div>
                
                     <input type="checkbox" id="deletecheck" name="deletecheck" 
                     value="deletecheck" onChange={this.handlechecked} />
                     <div className="col-lg-10 col-md-10 mb-10">
                     <div className="card bg-light" >
                        <div className="card-body">
                        <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Severity :{this.props.severity}</p> 
                        <p>Status : {this.props.status}</p> 
                    
                     <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
                </div></div>
                </div><br/>       
                </div>  );         
        }
        else if(this.props.namecheck===true&&this.props.severitycheck===true&&this.props.statuscheck===false
            &&this.props.createdDatecheck===true&&this.props.resolvedDatecheck===false){
                return(
                    <div>
                   
                         <input type="checkbox" id="deletecheck" name="deletecheck" 
                         value="deletecheck" onChange={this.handlechecked} />
                          <div className="card bg-light" >
                          <div className="col-lg-10 col-md-10 mb-10">
                        <div className="card-body">
                        <p>Issue Description :<a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Severity : {this.props.severity}</p> 
                        <p>Created Date : {this.props.createdDate}</p>
                        
                             
                             <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
                </div></div>
                </div><br/>       
                </div>  );       
        }       
        else if(this.props.namecheck===true&&this.props.severitycheck===true&&this.props.statuscheck===false
            &&this.props.createdDatecheck===false&&this.props.resolvedDatecheck===true){
                return(
                    <div>
                    
                         <input type="checkbox" id="deletecheck" name="deletecheck" 
                         value="deletecheck" onChange={this.handlechecked} />
                        <div className="col-lg-10 col-md-10 mb-10">
                         <div className="card bg-light" >
                        <div className="card-body">
                        <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Severity : {this.props.severity}</p> 
                        <p>Resolved Date : {this.props.resolvedDate}</p>
                             
                             <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
                </div></div>
                </div>  <br/>     
                </div>  );    
        } 
       else if(this.props.namecheck===true&&this.props.severitycheck===false&&this.props.statuscheck===true
        &&this.props.createdDatecheck===true&&this.props.resolvedDatecheck===false){
            return(
                <div>
                
                     <input type="checkbox" id="deletecheck" name="deletecheck"
                      value="deletecheck" onChange={this.handlechecked}/>
                     <div className="col-lg-10 col-md-10 mb-10">
                     <div className="card bg-light" >
                        <div className="card-body">
                        <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Status : {this.props.status}</p> 
                        <p>Created Date : {this.props.createdDate}</p>
                         
                         <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
            </div></div>
            </div> <br/>      
            </div>  ); 
       } 
       else if(this.props.namecheck===true&&this.props.severitycheck===false&&this.props.statuscheck===true
        &&this.props.createdDatecheck===false&&this.props.resolvedDatecheck===true){
            return(
                <div>
                
                     <input type="checkbox" id="deletecheck" name="deletecheck" 
                     value="deletecheck" onChange={this.handlechecked}/>
                     <div className="col-lg-10 col-md-10 mb-10">
                     <div className="card bg-light" >
                        <div className="card-body">
                        <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Status : {this.props.status}</p> 
                        <p>Resolved Date : {this.props.resolvedDate}</p>
                         
                         <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
            </div></div>
            </div><br/>       
            </div>  ); 
       } 
       else if(this.props.namecheck===true&&this.props.severitycheck===false&&this.props.statuscheck===false
        &&this.props.createdDatecheck===true&&this.props.resolvedDatecheck===true){
            return(
                <div>
                
                     <input type="checkbox" id="deletecheck" name="deletecheck"
                      value="deletecheck" onChange={this.handlechecked} />
                     <div className="col-lg-10 col-md-10 mb-10">
                     <div className="card bg-light" >
                        <div className="card-body">
                        <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Created Date : {this.props.createdDate}</p>
                        <p>Resolved Date : {this.props.resolvedDate}</p>
                         
                         <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
            </div></div>
            </div> <br/>      
            </div>  ); 
       }

       else if(this.props.namecheck===true&&this.props.severitycheck===true&&this.props.statuscheck===true
        &&this.props.createdDatecheck===true&&this.props.resolvedDatecheck===false){

            return(
                <div>
                
                     <input type="checkbox" id="deletecheck" name="deletecheck" 
                     value="deletecheck" onChange={this.handlechecked} />
                     <div className="col-lg-10 col-md-10 mb-10">
                     <div className="card bg-light" >
                        <div className="card-body">
                        <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Severity : {this.props.severity}</p>
                        <p>Status : {this.props.status}</p>
                        <p>Created Date : {this.props.createdDate}</p>
                     
                     <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
            </div></div>
            </div><br/>       
            </div>  ); 
       }
       else if(this.props.namecheck===true&&this.props.severitycheck===true&&this.props.statuscheck===true
        &&this.props.createdDatecheck===false&&this.props.resolvedDatecheck===true){

            return(
                <div>
                
                     <input type="checkbox" id="deletecheck" name="deletecheck" value="deletecheck" 
                     onChange={this.handlechecked} />
                       <div className="col-lg-10 col-md-10 mb-10">
                       <div className="card bg-light" >
                        <div className="card-body">
                        <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Severity : {this.props.severity}</p>
                        <p>Status : {this.props.status}</p>
                        <p>Resolved Date : {this.props.resolvedDate}</p>
                     
                     <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
            </div></div>
            </div>  <br/>     
            </div>  ); 
       }
       else if(this.props.namecheck===true&&this.props.severitycheck===true&&this.props.statuscheck===false
        &&this.props.createdDatecheck===true&&this.props.resolvedDatecheck===true){

            return(
                <div>
                
                     <input type="checkbox" id="deletecheck" name="deletecheck" value="deletecheck" onChange={this.handlechecked} />
                     <div className="col-lg-10 col-md-10 mb-10">
                     <div className="card bg-light" >
                        <div className="card-body">
                        <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Severity : {this.props.severity}</p>
                        <p>Created Date : {this.props.createdDate}</p>
                        <p>Resolved Date : {this.props.resolvedDate}</p>
                    
                     
                     <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
            </div></div>
            </div> <br/>      
            </div>  ); 
       }
       else if(this.props.namecheck===true&&this.props.severitycheck===false&&this.props.statuscheck===true
        &&this.props.createdDatecheck===true&&this.props.resolvedDatecheck===true){

            return(
                <div>
               
                     <input type="checkbox" id="deletecheck" name="deletecheck" value="deletecheck" onChange={this.handlechecked} />
                     <div className="col-lg-10 col-md-10 mb-10">
                     <div className="card bg-light" >
                        <div className="card-body">
                        <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                        <p>Status : {this.props.status}</p>
                        <p>Created Date : {this.props.createdDate}</p>
                        <p>Resolved Date : {this.props.resolvedDate}</p>
                     
                     <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
            </div></div>
            </div> <br/>      
            </div>  ); 
       }
       else{
                    return(
                        <div>
                            
                        
                             
                            <input type="checkbox" id="deletecheck" name="deletecheck" value="deletecheck" onClick={this.handlechecked} />  
                            
                            <div className="col-lg-10 col-md-10 mb-10">
                            <div className="card bg-light" >
                            <div className="card-body">
                            <p>Issue Description : <a href="#" onClick={this.handleclick}> {this.props.name}</a></p>
                                 
                             <p>Severity : {this.props.severity}</p>
                            <p>Status : {this.props.status}</p>
                             <p>Created Date : {this.props.createdDate}</p>
                             <p>Resolved Date : {this.props.resolvedDate}</p>
                            
                             <button className="btn btn-primary" onClick={this.handleupdate} >Update</button> &nbsp;
                            
                            </div>
                            </div>
                            </div>
                             <br/>
                         </div>  
                    );

                  
                    }

                   
    }
    
    
}

export default withRouter(Issue);


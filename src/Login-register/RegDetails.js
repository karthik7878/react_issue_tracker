import React from 'react';
import { Link } from 'react-router-dom';
export default class RegDetails extends React.Component{

    constructor(props)
    {
        super(props);

 
      this.state={
          printvals:[],
          regemail:''
         
      }
    }
  
   


    render(){
        const { printvals } = this.state;
     
      this.state.regemail=localStorage.getItem("emailid");
        fetch("http://localhost:3001/users?emailid="+this.state.regemail)
            .then(res => res.json())
          
            .then(result => {
              this.setState({
            printvals: result});
            });
        
         
        return(<div>
          <div>
            <h1>Registration Details </h1>
            <br/>
          {printvals.map(printval => (
            <div>
            <p>Email ID : {printval.emailid}</p>
            <p>Password : {printval.password}</p>
            <p>FirstName : {printval.firstname}</p>
            <p>LastName : {printval.lastname}</p>
            <p>Location : {printval.location}</p>
            <p>Mobile Number :{printval.mobile_number}</p>
            </div>
          ))}
      
          </div>
          <div>
            <p><Link to={`/issue2`}><button className="btn btn-dark">Back</button></Link></p>
          </div>
          </div>
        );
    }

}
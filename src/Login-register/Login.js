
import React, {Component} from 'react';

import { Link } from 'react-router-dom';




class Login extends Component{

    constructor(props){

        super(props);
            this.state={
                emailid:'',
                password:'',
                loggedin:false
            }
           
        }
 
        login()
        {
            console.warn(this.state);
         
           
           fetch("http://localhost:3001/users?emailid="+this.state.emailid+"&&password="+this.state.password).then((data)=>{
                data.json().then((result)=>
            {
                console.warn("result",result);
                if(result.length>0)
                    { 
                        console.log(this.state.emailid);
                     localStorage.setItem("emailid",this.state.emailid.toString());
                        this.state.loggedin=true;
                        localStorage.setItem("loginstate",this.state.loggedin.toString());
                        
                        
                        this.props.history.push(`/issue2`);
                    }
                else
                    alert('invalid user');    
                

            })
        })
      
        }

    

    render(){
   
        return(

            <div className="login-form"  >
                <h1>Login</h1>
                 <br/>
                 <div className="form-group">
                 <label ><b>E-Mail</b></label><br/>
                 <input type="text" placeholder="Enter email-id" id="emailid" value={this.state.emailid} className="form-control2" required name="emailid"
                 onChange={(event)=>this.setState({emailid:event.target.value})}/>
                    
                    </div>
                    <div className="form-group">
                <label ><b>Password</b></label><br/>
                 <input type="password" placeholder="Enter Password" id="password" value={this.state.password} className="form-control2" required name="password"
                 onChange={(event)=>this.setState({password:event.target.value})}/>
               
                </div>
                <button title="login" className="btn btn-success" onClick={()=>{this.login()}}>Login</button><br/><br/>

                <span className="psw">Not a User?&nbsp;<Link to="/signup">Register Here</Link></span>

            
                
                </div>
        );
    }
}

export default Login;
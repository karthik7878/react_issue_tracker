import React , {Component,lazy,Suspense}from "react";
import {BrowserRouter as Router,Route,Switch,NavLink,Redirect, Link} from 'react-router-dom';
import PieChart from "../Chart/PieChart";
import SignUp from "../Login-register/SignUp";
import AllIssuePage from '../component/AllIssuePage';
import axios from "axios";
const  AddIssue = lazy(()=> import( "../component/AddIssue"));
const Login = lazy(()=> import('../Login-register/Login'));
const DeleteIssue = lazy(()=> import("../component/DeleteIssue"));
const IssueDetails = lazy(()=> import("../component/IssueDetails"));
const UpdateComponent = lazy(()=>import( '../component/UpdateComponent'));
const RegDetails = lazy(()=> import("../Login-register/RegDetails"));


let delarray=[];
localStorage.setItem("iterator",JSON.stringify(0));
localStorage.setItem("delarray",JSON.stringify(delarray));
class Links extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            login:false,
            issuedata:[]
        }
        this.handlelogout=this.handlelogout.bind(this);
    }

    handlelogout()
    {
        
        axios.get("http://localhost:3001/issues")
             .then(res => res.data)
             .then((data)=>{
                    this.setState({
                        issuedata:data
                    })
             })
             
        let issues={};
        this.state.issuedata.map((tissue)=>{
            issues.name=tissue.name;
            issues.id = tissue.id;
            issues.severity = tissue.severity;
            issues.status = tissue.status;
            issues.createdDate = tissue.createdDate;
            issues.resolvedDate = tissue.resolvedDate;
        })

        issues.issuecount=0;

        axios.put("http://localhost:3001/issues",issues)
        .then(res => res.data)

        localStorage.setItem("loginstate",false);
    }

    render() {
        if(localStorage.getItem("loginstate")=="true")
        {
            this.state.login=true;
        }
        else
        {
            this.state.login=false;
        }

        return (
            
               
               
               <nav className="navbar navbar navbar-expand-sm bg-dark navbar-dark"> 

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
         <span className="navbar-toggler-icon"></span>
            </button>

        <a className="navbar-brand" href="#">
      
        </a>
        <a className="navbar-brand-center">
         {this.state.login && <p>Welcome&nbsp;&nbsp;{localStorage.getItem("emailid")}</p>}
        </a>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">

        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
         <a className="nav-link" title="about" href="/">About</a>
    </li>
    <li className="nav-item">
         <a className="nav-link" title="issues" href="/issue2">Issues</a>
     </li>
     <li className="nav-item">
         {!this.state.login && <a className="nav-link" title="login" href="/login">Login</a>}
     </li>

     
         {this.state.login && <li className="nav-item"><a className="nav-link" title="login" href="/issue2" onClick={this.handlelogout}>Logout</a></li>}
        
    </ul>
    </div>
    </nav>
            
        );
    }
}

export default class LandingPage extends Component {

        render() {
            
            
            return (

                
                <Suspense fallback={<p>Loading.. Please Wait</p>}>
                <Router>
                <div>
                <Links/>
                <Switch> 
                <Route path="/issue/:id/:name/:severity/:status/:createdDate/:resolvedDate" component={IssueDetails}/>
                  
                <Route path = "/issue2" component = {AllIssuePage}/> 
                
                <Route path = "/addIssue" component = {AddIssue} onLeave={ this.showConfirm }/> 
                
                
                <Route path = "/signup"component = {SignUp}/>
                
                <Route path="/update/:id" component={UpdateComponent} />
                <Route path="/regdetails" component={RegDetails} />
                <Route path = "/deleteIssue" component = {DeleteIssue}/>
                <Route path = "/chart" component = {PieChart}/>
                <Route path = "/login" 
                render={props=>(
                    <Login{...props}/>
                )}/> 

                <Route path = "/"render = {() =><div><br/><h3> About(using React-Redux): This application provides information about the issue </h3></div> } />
                <Redirect from = "/about-us"to = "/about"/>
                <Redirect from = "/about-wipro"to = "/about" />
                    
                    
                </Switch>    
               </div> 
                </Router>
                </Suspense>
                );
            }
        }



import { Pie, defaults } from 'react-chartjs-2';
import React, { Component,Link } from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as issueActions from '../actions/issueActions';

let larray = [];
let carray = [];
let topcarray=[];
let c2array=[];
let l2array=[];
let l3array=[];
let i=0,j=0;
//let issues=[];
class PieChart extends Component {
  
  constructor(props){
    super(props);
     
    this.state={
      lissues:[]
    }

  }
  
  componentDidMount(){
    axios.get("http://localhost:3001/issues")
      .then(response=>response.data)
      .then((data)=>{
            this.setState({
            lissues:data
          })
                     
      })
      
      .catch(error => {
          throw error
      });
      
  }
 
    render(){

     let count=5;
      let obj={};
      obj = this.state.lissues.sort((a,b)=>parseInt(b.issuecount)-parseInt(a.issuecount));
      let issuecount = obj.map(a=>a.issuecount);
      let id = obj.map(a=> a.name);
      if(issuecount[count]!==undefined){
        issuecount.splice(count);
        id.splice(count);
      }
      console.log(issuecount);
      console.log(id);
  
       
  return (
    
        <div>
      <Pie
        data={{
          labels:id,
          datasets: [
            {
              label: '# of votes',
              data: issuecount,
              
              backgroundColor: [
                'rgba(255, 99, 132, i)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
        
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
         
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
     
    
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PieChart));

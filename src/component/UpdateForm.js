import React,{ useState } from   'react';
import {withFormik,Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Prompt} from 'react-router-dom';
import axios from 'axios';
 
let id=JSON.parse(localStorage.getItem("uid"));

 const UpdateForm =({values,errors,touched,isSubmitting})=>{
    const [modified,setModified] = useState(false);
    const handleModified = () => setModified(true);
    const handleSubmit = () => setModified(false);
    
   console.log(values.name);
   console.log(values.severity);
   console.log(values.status);
   console.log(values.createdDate);
   console.log(values.resolvedDate);
    return(
        <div>
        <h1>Update  Issue</h1><br></br>
        <Form><div>
                <label>Description:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <Field width="100px" type="text" name="name"    onInput={handleModified}/>
                {touched.name && errors.name&&<span style={{color:'red'}}>{errors.name}</span>}
            </div><div><br></br>
            <label>Severity:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>             
            <Field as="select" name="severity"  onInput={handleModified}>
             <option value="Select">Select</option>
             <option value="Critical">Critical</option>
             <option value="Minor">Minor</option>
             <option value="Major">Major</option>
           </Field>
      </div>
 
               
                 
 
            
           
            <div><br></br>
            <label>Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Field type="radio" value="Open" name="status" onInput={handleModified}/>&nbsp;Open&nbsp;&nbsp;
                <Field type="radio" value="In Progress" name="status" onInput={handleModified}/>&nbsp;In Progress&nbsp;&nbsp;
                <Field type="radio" value="Closed" name="status" onInput={handleModified}/>&nbsp;Closed
            </label>
            </div>
            <br/>
            <div>
                <label>Created Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <Field width="100px" type="date" name="createdDate"  placeholder="createdDate"  onInput={handleModified}/>
                {touched.createdDate && errors.createdDate&&<span style={{color:'red'}}>{errors.createdDate}</span>}
            </div><br></br>
            <div>
                <label>Resolved Date:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <Field width="100px" type="date" name="resolvedDate"  placeholder="resolvedDate"  onInput={handleModified}/>
                {touched.resolvedDate && errors.resolvedDate&&<span style={{color:'red'}}>{errors.resolvedDate}</span>}
            </div><br></br>
            <button className="btn btn-success" type ="submit" disabled={isSubmitting} onClick={handleSubmit}>Submit</button>
            <Prompt when={modified} message="Are you sure you want to leave ?" />
        </Form>
    </div>
    )
 };

const FormikUpdateForm=withFormik({
    mapPropsToValues({name,severity,status,createdDate,resolvedDate}){
        return{
        
            name:name||'',
            severity:severity||'',
            status:status||'',
            createdDate:createdDate||'',
            resolvedDate:resolvedDate||''
            
        }
    },
    validationSchema:Yup.object().shape({
         
            name:Yup.string().min(3,'description must be at lest 3 characters length').required('Issue Description is required'),
            createdDate: Yup.date()
                        .min(new Date('01-01-2021')).max(new Date()),
            resolvedDate: Yup.date()
                        .min(Yup.ref('createdDate')).max(new Date())
             
        }),
         
 
    handleSubmit(values, { resetForm, setSubmitting, setErrors, props }) {
        console.log(values);
        var issues={};
        setTimeout(() => {
            if (values.name === 'Karthik') {
                setErrors({ name: 'You cannot add Karthik as an issue' })
            } else {
                resetForm()
                 issues.name= values.name;
                issues.severity = values.severity;
                issues.status = values.status;
                issues.createdDate=values.createdDate;
                issues.resolvedDate=values.resolvedDate;
                 debugger;
                 props.onAddIssue(issues)
            }
            setSubmitting(false);
        }, 2000);
    }
})(UpdateForm)
 
export default FormikUpdateForm
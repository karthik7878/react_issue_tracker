import React,{useState} from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Prompt } from 'react-router'







const IssueForm = ({ errors, touched, isSubmitting }) => {
   
    const [modified,setModified] = useState(false);
    const handleModified = () => setModified(true);
    const handleSubmit = () => setModified(false);
    return(
    <div className="add-form">
    <h1> Add Issue </h1> 
    <Form>
        <div>
            <label htmlFor="name" >Issue Description:&nbsp;&nbsp;&nbsp;
        <Field type = "text"
        name = "name" id="name"
        placeholder = "Enter Issue Description" onInput={handleModified} /> {
            touched.name && errors.name && < span style = {
                { color: 'red' }
            } > { errors.name } </span>} </label>
        </div> <br/>
        <div>
        <label>Severity: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <Field as="select" name="severity" onInput={handleModified}>
          
        <option value="Select">Select</option>
          <option value="Major">Major</option>
          <option value="Critical">Critical</option>
          <option value="Minor">Minor</option>
        </Field>
        </div><br/>
        <div>
        <label>Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Field type="radio" value="Open" name="status" onInput={handleModified}/>&nbsp;Open&nbsp;
          <Field type="radio" value="In_Progress" name="status" onInput={handleModified}/>&nbsp;In Progress&nbsp;
          <Field type="radio" value="Closed" name="status" onInput={handleModified}/>&nbsp;Closed&nbsp;    
        </label>  
          <br/>  
        </div><br/>
        <div>
            <label>Created Date:&nbsp;&nbsp;&nbsp;&nbsp;
        <Field type = "date"
        name = "createdDate"
        placeholder = "Enter Created Date" onInput={handleModified}/> {
            touched.createdDate && errors.createdDate && < span style = {
                { color: 'red' }
            } > { errors.createdDate } </span>}</label><br/><br/>
        </div>
        <div>
            <label>Resolved Date:&nbsp;&nbsp;&nbsp;
        <Field type = "date"
        name = "resolvedDate"
        placeholder = "Enter Resolved Date" onInput={handleModified}/> {
            touched.resolvedDate && errors.resolvedDate && < span style = {
                { color: 'red' }
            } > { errors.resolvedDate } </span>}</label>
        </div><br/>
    
                    <button type = "submit" className="btn btn-success"
                    disabled = { isSubmitting } onClick={handleSubmit}> Submit </button> 
                    
                    <Prompt when={modified} message="Are you sure you want to leave ?" />
                    
                    </Form>
                    
                    </div>
                        )
                    };

                const FormikIssueForm = withFormik({
                    mapPropsToValues({ name, severity, status,createdDate,resolvedDate}) {
                        return {
                            
                           
                            name: name || '',
                            severity: severity || '',
                            status: status || '',
                            createdDate: createdDate || '',
                            resolvedDate: resolvedDate || ''
                            
                        }

                    },
                    validationSchema: Yup.object().shape({
                        name: Yup.string().min(3, 'issue desc must be at least 3 characters in length').required('issue is required'),
                        createdDate: Yup.date()
                        .min(new Date('01-01-2021')).max(new Date()),
                        resolvedDate: Yup. date()
                        .min(Yup.ref('createdDate')).max(new Date())
                        
                    }),
                   
                    handleSubmit(values, { resetForm, setSubmitting, setErrors, props }) {
                        console.log(values);
                        var issues = {};
                        setTimeout(() => {
                            if (values.name === 'Karthik') {
                                setErrors({ name: 'You cannot add Karthik as an issue' })
                            } else {
                                resetForm()
                                issues.name = values.name;
                                issues.severity = values.severity;
                                issues.status = values.status;
                                issues.createdDate = values.createdDate;
                                issues.resolvedDate = values.resolvedDate;
                                issues.issuecount=0;
                                debugger;
                                props.onSave(issues);

                            }
                            setSubmitting(false);
                        }, 2000);
                    }
                })(IssueForm)

                export default FormikIssueForm
import React,{useState} from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';





const SignUpForm = ({ errors, touched, isSubmitting }) => {
   
    const [modified,setModified] = useState(false);
    const handleModified = () => setModified(true);
    const handleSubmit = () => setModified(false);
    
    return(
    <div className="signup-form" style={{ marginLeft: '1.3rem' }} >
    <h1> Sign Up </h1> 
    <Form >
        <div className="form-group">
            <label htmlFor="emailid" ><b>Email ID :</b>&nbsp;&nbsp;&nbsp;<br/>
        <Field type = "text"
        name = "emailid" id="emailid" className="form-control"
        placeholder = "Enter E-Mail ID " onInput={handleModified} /> {
            touched.emailid && errors.emailid && < span style = {
                { color: 'red' }
            } > { errors.emailid } </span>} </label>
        </div> 

        <div className="form-group">
            <label htmlFor="password" ><b>PassWord :</b>&nbsp;&nbsp;&nbsp;<br/>
        <Field type = "password"
        name = "password" id="password" className="form-control"
        placeholder = "Enter PassWord " onInput={handleModified} /> {
            touched.password && errors.password && < span style = {
                { color: 'red' }
            } > { errors.password } </span>} </label>
        </div> 

        <div className="form-group">
            <label htmlFor="firstname" ><b>First Name :</b>&nbsp;&nbsp;&nbsp;<br/>
        <Field type = "text"
        name = "firstname" id="firstname" className="form-control"
        placeholder = "Enter First Name " onInput={handleModified} /> {
            touched.firstname && errors.firstname && < span style = {
                { color: 'red' }
            } > { errors.firstname } </span>} </label>
        </div> 

        <div className="form-group">
            <label htmlFor="lastname" ><b>Last Name :</b>&nbsp;&nbsp;&nbsp;<br/>
        <Field type = "text"
        name = "lastname" id="lastname" className="form-control"
        placeholder = "Enter Last Name " onInput={handleModified} /> {
            touched.lastname && errors.lastname && < span style = {
                { color: 'red' }
            } > { errors.lastname } </span>} </label>
        </div>

        <div className="form-group">
            <label htmlFor="location" ><b>Location :</b>&nbsp;&nbsp;&nbsp;<br/>
        <Field type = "text"
        name = "location" id="location" className="form-control"
        placeholder = "Enter Location " onInput={handleModified} /> {
            touched.location && errors.location && < span style = {
                { color: 'red' }
            } > { errors.location } </span>} </label>
        </div> 

        <div className="form-group">
            <label htmlFor="mobile_number" ><b>Mobile Number :</b>&nbsp;&nbsp;&nbsp;<br/>
        <Field type = "number"
        name = "mobile_number" id="mobile_number" className="form-control"
        placeholder = "Enter Mobile Number " onInput={handleModified} /> {
            touched.mobile_number && errors.mobile_number && < span style = {
                { color: 'red' }
            } > { errors.mobile_number } </span>} </label>
        </div>
       
    
                    <button type = "submit" className="btn btn-success"
                    disabled = { isSubmitting } onClick={handleSubmit}> Submit </button>
                    
                    
                    </Form>
                    
                    </div>
                        )
                    };

                const FormikUserForm = withFormik({
                    mapPropsToValues({emailid,password,firstname,lastname,location,mobile_number}) {
                        return {
                            
                           
                            emailid: emailid || '',
                            password: password || '',
                            firstname: firstname || '',
                            lastname: lastname || '',
                            location: location || '',
                            mobile_number:mobile_number || ''
                            
                        }

                    },
                    validationSchema: Yup.object().shape({
                        password: Yup.string()
                        .min(8,"Password must be atleast 8 characters in length")
                        .max(12,"Password should not exceed 12 characters in length")
                        .required("Password is required"),
                        firstname: Yup.string()
                        .min(3, 'Firstname should be more than 2 characters')
                         .max(50, 'Too Long!')
                        .required('Required'),
                        lastname: Yup.string()
                        .max(9, 'Lastname should be less than 10 characters')
                        .required('Required'),
                        location:Yup.string().required("location is required"),
                        emailid: Yup.string().email('Invalid email').required('Required'),
                        mobile_number: Yup.string().matches(/^[1-9]\d{9}$/, {message: "Please enter valid number."}).required("mobile number is required")
                        
                    }),
                   
                    handleSubmit(values, { resetForm, setSubmitting, setErrors, props }) {
                        console.log(values);
                        var users = {};
                        setTimeout(() => {
                            if (values.emailid === 'admin@wipro.com') {
                                setErrors({ emailid: 'You cannot admin email as a emailid' })
                            } else {
                                resetForm()
                                users.emailid = values.emailid;
                                users.password = values.password;
                                users.firstname = values.firstname;
                                users.lastname = values.lastname;
                                users.location = values.location;
                                users.mobile_number = values.mobile_number;
                                debugger;
                                props.onSave(users);

                            }
                            setSubmitting(false);
                        }, 2000);
                    }
                })(SignUpForm)

                export default FormikUserForm
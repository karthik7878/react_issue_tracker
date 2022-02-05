import React from 'react';
import { mount, shallow } from 'enzyme';
import { Formik } from 'formik';
import SignUpForm from '../Login-register/SignUpForm';
import configureStore from '../store/configureStore';
import { act } from 'react-dom/test-utils';
import { waitFor } from '@testing-library/react';

const store = configureStore();
describe('SignupForm', () => {

    test('should update email field on change', async () => {
        
        const tree = mount(<SignUpForm store={store} />);
       
        const emailInput = tree.find("input[name='emailid']");
        
        emailInput.simulate('change', {
          persist: () => {},
          target: {
            name: 'emailid',
            value: 'email@gmail.com'
          }
        
    });

        await waitFor(()=>{
        expect(emailInput.html()).toMatch('email@gmail.com');
        });
      });

      test('should update password field on change', async () => {
          
        const tree = mount(<SignUpForm store={store} />);
          
        const passwordInput = tree.find("input[name='password']");
        
        
        passwordInput.simulate('change', {
          persist: () => {},
          target: {
            name: 'password',
            value: 'Password2019#'
          }
        
    });
        await waitFor(()=>{
        expect(passwordInput.html()).toMatch('Password2019#');
        });

    });

    test('should update FirstName field on change',async () => {
          
        const tree = mount(<SignUpForm store={store} />);
          
        const firstnameInput = tree.find("input[name='firstname']");
        
        
        firstnameInput.simulate('change', {
          persist: () => {},
          target: {
            name: 'firstname',
            value: 'Venkat'
          }
        
    });
       await waitFor(()=>{
        expect(firstnameInput.html()).toMatch('Venkat');
        });

    });  
    
    test('should update LastName field on change', async ()=> {
          
        const tree = mount(<SignUpForm store={store} />);
          
        const lastnameInput = tree.find("input[name='lastname']");
        
        
        lastnameInput.simulate('change', {
          persist: () => {},
          target: {
            name: 'lastname',
            value: 'Raman'
          }
        
    });
       await waitFor(()=>{
        expect(lastnameInput.html()).toMatch('Raman');
        });

    });    

    test('should update Location field on change', async () => {
          
        const tree = mount(<SignUpForm store={store} />);
          
        const locationInput = tree.find("input[name='location']");
        
        
        locationInput.simulate('change', {
          persist: () => {},
          target: {
            name: 'location',
            value: 'Chennai'
          }
        
    });
       await waitFor(()=>{
        expect(locationInput.html()).toMatch('Chennai');
        });

    });    

    test('should update Mobile Number field on change', async () => {
          
        const tree = mount(<SignUpForm store={store} />);
          
        const mobile_numberInput = tree.find("input[name='mobile_number']");
        
        
        mobile_numberInput.simulate('change', {
          persist: () => {},
          target: {
            name: 'mobile_number',
            value: '9679527837'
          }
        
    });
        await waitFor(()=>{
        expect(mobile_numberInput.html()).toMatch('9679527837');
        });

    });    


});
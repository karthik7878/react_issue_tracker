import React from 'react';
import { mount, shallow } from 'enzyme';
import Login from '../Login-register/Login';
import render, { queryByTitle } from "@testing-library/react";
describe('Test Login Form using Shallow rendering', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Login/>);
    });

    it('has 2 text input elements', () => {
        expect(wrapper.find('input').length).toEqual(2);
    })
    
    it('has 1 button', () => {
        expect(wrapper.find('button').length).toEqual(1);
    })

    it('should allow to type in emailid input field', () => {
        wrapper.find('input#emailid').simulate('change', {
            target: {value: 'hero1999@wipro.com'}
        });
        wrapper.update();
        expect(wrapper.find('input#emailid').prop('value')).toEqual('hero1999@wipro.com');
    })

    it('should allow to type in password input field', () => {
        wrapper.find('input#password').simulate('change', {
            target: {value: 'wipro@2020'}
        });
        wrapper.update();
        expect(wrapper.find('input#password').prop('value')).toEqual('wipro@2020');
    })



});

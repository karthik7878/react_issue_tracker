import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import LandingPage from '../LandingPage/LandingPage';

describe('Landing Page', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LandingPage/>);
    });

    test('render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

  
});
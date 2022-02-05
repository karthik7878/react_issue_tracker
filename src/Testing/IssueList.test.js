import React from 'react';
import { mount, shallow } from 'enzyme';
import IssueList from '../component/IssueList';
import Issue from '../component/Issue';

import toJson from 'enzyme-to-json';


describe('When issues array is passed as props to IssuesComponent', () => {
    let wrapper;
    let props;
 
    beforeEach(() => {
        props = {
            issues: [
                {
                    "id": 1,
                    "name": "On clicking save, the embark portal crashes",
                    "severity": "Critical",
                    "status": "Open",
                    "createdDate": "02-march-2021",
                    "resolvedDate": "05-march-2021"
                  },
                  {
                    "id": 2,
                    "name": "The employee number 20189999 wrongly displayed as 20183949",
                    "severity": "Minor",
                    "status": "Closed",
                    "createdDate": "20-jan-2021",
                    "resolvedDate": "22-jan-2021"
                  },
                  {
                    "id": 3,
                    "name": "myData tab not loading in mywipro portal",
                    "severity": "Minor",
                    "status": "Open",
                    "createdDate": "01-march-2021",
                    "resolvedDate": "05-march-2021"
                  }
            ]
        }
        wrapper = shallow(<IssueList {...props}/>);
    })

    it('passes the second  Issue Description as props to Second Issue Component', () => {
 
        let data =  (wrapper.find(Issue));
        expect(toJson(data)[1].node.props.name).toEqual('The employee number 20189999 wrongly displayed as 20183949');
      
    });
    it('passes the second issues severity as  props to Second Issue Component', () => {
 
        let data =  (wrapper.find(Issue));
    expect(toJson(data)[1].node.props.severity).toEqual('Minor');
        
    });

    it('passes the second issues status as  props to Second Issue Component', () => {
 
        let data =  (wrapper.find(Issue));
    expect(toJson(data)[1].node.props.status).toEqual('Closed');
        
    });

    it('passes the second issues created Date as  props to Second Issue Component', () => {
 
        let data =  (wrapper.find(Issue));
    expect(toJson(data)[1].node.props.createdDate).toEqual('20-jan-2021');
        
    });

    it('passes the second issues resolved Date as  props to Second Issue Component', () => {
 
        let data =  (wrapper.find(Issue));
    expect(toJson(data)[1].node.props.resolvedDate).toEqual('22-jan-2021');
        
    });
})


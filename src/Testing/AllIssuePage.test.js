import {render,fireEvent} from "@testing-library/react";
import AllIssuePage from '../component/AllIssuePage';
import IssueList from "../component/IssueList";
import {shallow,mount} from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import {loadIssues} from '../actions/issueActions';
describe('Test AllIssuesPage', () => {
    let wrapper;
    const store = configureStore();
    store.dispatch(loadIssues());
    beforeEach(() => {
        
    
        wrapper = shallow(<Provider store={store}><AllIssuePage/></Provider>);
    });

    it("renders Issues List",()=>{
        
        expect(wrapper.find(IssueList));
    })

   
  

}) 
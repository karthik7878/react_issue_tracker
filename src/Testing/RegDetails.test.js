import RegDetails from "../Login-register/RegDetails";
import { shallow } from 'enzyme';



let wrapper;

beforeEach(() => {
    wrapper = shallow(<RegDetails/>);
})

it("matches snapshot",()=>{

    expect(wrapper).toMatchSnapshot();
})
import React from 'react';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "../../app/App";

it('renders without crashing', () => {

    configure({ adapter: new Adapter() });

    shallow(<App />);
});

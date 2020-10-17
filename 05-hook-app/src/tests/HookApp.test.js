import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import HookApp from '../HookApp';

describe('pruebas en <HookApp />', () => {
    
    let wrapper = shallow(<HookApp />);

    beforeAll(() => {
        jest.clearAllMocks();
        wrapper = shallow(<HookApp />);
    });

    test('It should print the component correctly', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

});

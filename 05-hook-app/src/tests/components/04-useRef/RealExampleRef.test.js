import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import RealExampleRef from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {
     let wrapper = shallow(<RealExampleRef />)

     beforeAll(() => {
         jest.clearAllMocks();
         wrapper = shallow(<RealExampleRef />)
     })
    
    test('Debe de mostrarse el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });
    
    test('Debe de mostrarse el componente <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
});
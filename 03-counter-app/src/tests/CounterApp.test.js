import React from 'react';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach( () => {
        wrapper = shallow(<CounterApp />);
    })
    
    test('Debe de mostrar <CounterApp /> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow(<CounterApp value={100}/>)
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');

    });

    test('Debe de incrementar con el boton de "+1"', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });
    
    test('Debe de decrementar con el boton de "-1"', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });
    
    test('Debe de resetear a la posición original con el boton de "Reset"', () => {
        
        const wrapper = shallow(<CounterApp value={105}/>)

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
    });
    
});

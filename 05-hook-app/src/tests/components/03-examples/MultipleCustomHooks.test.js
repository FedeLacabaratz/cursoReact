import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import useFetch from '../../../hooks/useFetch';
import useCounter from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => {

    useFetch.mockReturnValue({
        data: null,
        loading: true,
        error: null,
    });
    
    useCounter.mockReturnValue({
        conuter: 10,
        increment: () => {}
    });
    
    let wrapper = shallow(<MultipleCustomHooks />);
    
    beforeAll(() => {
        jest.clearAllMocks();
        wrapper = shallow(<MultipleCustomHooks />);
    })

    test('Debe de mostrarse correctamente', () => {

        wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la información', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Federico',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null,
        });

        wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Federico');
    });
});
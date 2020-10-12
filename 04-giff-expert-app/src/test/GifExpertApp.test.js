import React from 'react';
import '@testing-library/jest-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('pruebas en <GifExpertApp />', () => {
    
    let wrapper = shallow(<GifExpertApp />);

    beforeAll(() => {
        jest.clearAllMocks();
        wrapper = shallow(<GifExpertApp />);
    })

    test('debe de imprimir correctamente el componente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {
        
        const categories = ['nirvana', 'van halen'];
        wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });

});

import React from 'react';
import '@testing-library/jest-dom';
import GifGrid from '../../components/GifGrid';
import { shallow } from 'enzyme';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('pruebas en <GifGrid />', () => {
     
    let category = 'categoria';
    
    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    test('debe de imprimir el componente correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes con nuestro useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/any/thing.jpg',
            title: 'Anything',
        },
        {
            id: '123',
            url: 'https://localhost/any/thing.jpg',
            title: 'Anything',
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });

});

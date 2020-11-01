import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';


describe('Pruebas en <SearchScreen />', () => {
    
    const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
            <Route 
                path="/search"
                component = {SearchScreen}
            />
        </MemoryRouter>
    );

    test('Debe de mostrarse correctamente con valores por defecto', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search for a hero...');
    });
    
    test('Debe de mostrar a Batman y el input con el valor del querySting', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Batman']}>
                <Route 
                    path="/search"
                    component = {SearchScreen}
                    />
            </MemoryRouter>
        );
        
        expect(wrapper.find('input').prop('value')).toBe('Batman');
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar un error si no se encuentra el hero', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Batman12321d']}>
                <Route 
                    path="/search"
                    component = {SearchScreen}
                    />
            </MemoryRouter>
        );

        expect(wrapper.find('.alert-danger').exists()).toBe(true);
        expect(wrapper.find('.alert', '.alert-danger').text().trim()).toBe("There's no hero that matches with your search for 'Batman12321d'");
    });

    test('Debe de llamar el push del history', () => {
        
        const historyMock = {
            push: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Batman12321d']}>
                <Route 
                    path="/search"
                    component = {(props) => <SearchScreen history={historyMock}/>}
                    />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect(historyMock.push).toHaveBeenCalledWith('?q=batman');
    });
});
import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en <HeroScreen />', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history={historyMock} />
        </MemoryRouter>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente redirect si no hay argumentos en la URL', () => {

        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('Debe de mostrar un hero si el parametro URL existe y se encuentra', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={HeroScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('Debe de regresar a la pantalla anterior con PUSH', () => {

        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path="/hero/:heroId"
                    component={(props) => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(historyMock.push).toHaveBeenCalledWith('/');
        expect(historyMock.goBack).not.toHaveBeenCalled();
    });

    test('Debe de regresar a la pantalla anterior utilizando GOBACK', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path="/hero/:heroId"
                    component={(props) => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(historyMock.push).toHaveBeenCalledTimes(0);
        expect(historyMock.goBack).toHaveBeenCalled();
    });

    test('Debe de llamar el Redirect si el hero no existe', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider11234rwefsdfs']}>
                <Route
                    path="/hero/:heroId"
                    component={(props) => <HeroScreen history={historyMock} />}
                />
            </MemoryRouter>
        );

        expect(wrapper.text().trim()).toBe('');
    })
    

});
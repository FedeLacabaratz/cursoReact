import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen />', () => {

    const historyMock = {
        replace: jest.fn(),
    };

    const contextValue = {
        dispatch: jest.fn(),
        logged: false
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <LoginScreen history={historyMock} />
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de realizar el dispatch y la navegación', () => {

        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();
        
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Federico'
            }
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/');
        
        // Aquí seteo manualmente un 'lastPath' para verificar que se guarde dicha ruta en el localStorage y que vaya a buscar esa ruta
        localStorage.setItem('lastPath', '/dc')
        
        handleClick();
        expect(historyMock.replace).toHaveBeenCalledWith('/dc');
    });



});

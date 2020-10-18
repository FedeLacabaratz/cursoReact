import React from 'react';
import { mount, shallow } from 'enzyme';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import demoTodos from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';


describe('Pruebas en el componente <TodoApp />', () => {
    
    const wrapper = shallow(<TodoApp />)

    Storage.prototype.setItem = jest.fn(() => {}) // Para analizar el llamado al localStorage desde el test

    test('Debe de mostrar correctamente el componente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de agregar un Todo', () => {
        
        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]); // Aquí monto y ejecutado handleAddTodo con el demoTodos en la posición 0
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]); // Aquí monto y ejecutado handleAddTodo con el demoTodos en la posición 1
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2); // Aquí analizo el llamado al localStorage
    });

    test('Debe de eliminar un Todo', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
    });
});
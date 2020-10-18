import React from 'react';
import { shallow } from 'enzyme';
import TodoAdd from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en el <TodoAdd />', () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />
    )

    test('Debe de mostrar el componente de forma correcta', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('NO debe de llamar handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar la funcion handleAddTodo', () => {

        const value = 'Aprender Firebase';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            description: 'Aprender Firebase',
            done: false,
        });

        expect(wrapper.find('input').prop('value')).toBe(''); // Evalua que funcione el reset
    });
});
import todoReducer from '../../../components/08-useReducer/todoReducer';
import demoTodos from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('Debe de agregar un nuevo Todo', () => {

        const newTodo = {
            id: 3,
            description: 'Aprender Gatsby',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodos, action);
        
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
        expect(state[2]).toEqual(newTodo);
    });

    test('Debe de remover un nuevo Todo', () => {

        const action = {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer(demoTodos, action);
        
        expect(state.length).toBe(1);
        expect(state[0]).toEqual(demoTodos[1])
    });

    test('Debe de hacer el toggle de un Todo seleccionado', () => {

        const action = {
            type: 'toggle',
            payload: 2
        }

        const state = todoReducer(demoTodos, action);
        
        expect(state[0].done).toEqual(false);
        expect(state[1].done).toEqual(true);
        expect(state[0]).toEqual(demoTodos[0]);
    });
});

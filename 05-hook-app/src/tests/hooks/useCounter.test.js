import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';

describe('pruebas en useCounter', () => {

    test('Debe de retornar valores por defecto', () => {

        const { result } = renderHook(() => useCounter());
        const { counter, setNewCounter, reset, increment, decrement } = result.current;

        expect(counter).toBe(10);
        expect(typeof setNewCounter).toBe('function');
        expect(typeof reset).toBe('function');
        expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');

    });

    test('Debe de retornar el counter en 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);

    });

    test('Debe de incrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act(() => {
            increment()
        });

        const { counter } = result.current;

        expect(counter).toBe(101);

    });

    test('Debe de decrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => {
            decrement()
        });

        const { counter } = result.current;

        expect(counter).toBe(99);

    });

    test('Debe de resetear el counter a 100', () => {

        const { result } = renderHook(() => useCounter(100));
        const { reset, increment } = result.current;

        act(() => {
            increment()
            reset()
        });

        const { counter } = result.current;

        expect(counter).toBe(100);

    });

    test('Debe de setear un nuevo valor al counter posterior al originalmente seteado', () => {

        const { result } = renderHook(() => useCounter(100));
        const { setNewCounter } = result.current;

        act(() => {
            setNewCounter(235);
        });

        const { counter } = result.current;

        expect(counter).toBe(235);

    });

});

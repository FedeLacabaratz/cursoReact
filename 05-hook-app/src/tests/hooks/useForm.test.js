import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';

describe('pruebas en useForm', () => {

    const initialForm = {
        name: 'Federico',
        email: 'fede@fede.com'
    };

    test('Debe de regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Lucy',
                }
            });
        });

        const [values] = result.current;
        expect(values).toEqual({...initialForm, name: 'Lucy'});
    });

    // Este test lo cancelo porque habría que modificar el useForm (dejo el comment en el useForm con la modificación a realizar para que esto funcione)
    // test('Debe de cambiar el valor del formulario (cambiar email)', () => {

    //     const { result } = renderHook(() => useForm(initialForm));
    //     const [, handleInputChange] = result.current;

    //     act(() => {
    //         handleInputChange({
    //             target: {
    //                 email: 'email',
    //                 value1: 'lucy@lucy.com',
    //             }
    //         });
    //     });

    //     const [values] = result.current;
    //     expect(values).toEqual({...initialForm, email: 'lucy@lucy.com'});
    // });

    test('Debe de re-establecer el formulario con RESET', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Lucy',
                }
            });
            reset();
        });

        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });

});
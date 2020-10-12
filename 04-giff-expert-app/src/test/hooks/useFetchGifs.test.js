import React from 'react';
import '@testing-library/jest-dom';
import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';



describe('pruebas en el hook useFetchGifs', () => {

    beforeAll(() => {
        jest.clearAllMocks();
    })

    test('debe de retornar el estado inicial', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('categoria'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('categoria'));
        
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toEqual(12);
        expect(loading).toBe(false);

    });

});
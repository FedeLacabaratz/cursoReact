import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('pruebas en 07-deses-arr', () => {
    
    test('retornaArreglo debe retornar un arreglo con un string y un número ', () => {
        
        //const arr = retornaArreglo();
        const [letras, numeros] = retornaArreglo();

        //expect(arr).toEqual(['ABC',123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

    });

});
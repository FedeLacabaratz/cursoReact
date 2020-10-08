import '@testing-library/jest-dom';
import { useContext } from '../../base/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {

    test('useContext debe de retornar un objeto', () => {

        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        
        const heroe = useContext(persona);
        const { clave, edad } = persona;
        
        expect(heroe).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });

});
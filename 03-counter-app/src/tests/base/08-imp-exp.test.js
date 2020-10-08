import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    
    test('debe de retornar un heroe por Id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });
    
    test('debe de retornar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('debe de retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter((h) => h.owner === owner);

        expect(heroes).toEqual(heroesData);
    });

    test('debe de retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    });

});
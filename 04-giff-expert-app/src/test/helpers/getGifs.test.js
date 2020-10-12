import getGifs from '../../helpers/getGifs';

describe('pruebas con getGifs Fetch', () => {
    
    
    test('debe de traer 10 gifs de la API', async() => {
        
        const gifs = await getGifs('Van Halen');
        expect(gifs.length).toBe(12);
    });

    test('debe de traer "category" en las props, de lo contrario un array vacío', async() => {
        
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    });

});
import { getHeroeById } from '../bases/08-imp-exp'

// Promises

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         const heroe = getHeroeById(8);
//         resolve(heroe);
//         reject('No se pudo encontrar el heroe');
//     }, 2000);

// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
    
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar al heroe')
            }
            // reject('No se pudo encontrar el heroe');
        }, 2000);
    
    });

};

getHeroeByIdAsync(3)
    // .then(heroe => console.log('Heroe', heroe))
    .then(console.log)
    // .catch(err => console.log('Mensaje de Error: ', err));
    .catch(console.warn);
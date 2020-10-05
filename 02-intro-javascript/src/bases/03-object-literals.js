

// Object literals

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 55321321,
        lat: 143232,
        lng: 34.9233321,
    }
};

//console.table(persona);
//console.log({persona}); // Object con persona como nombre que contiene el objeto

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
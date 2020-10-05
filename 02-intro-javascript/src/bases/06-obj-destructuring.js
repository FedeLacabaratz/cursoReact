

// Object destructuring

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango: 'Soldado' // Si declaro 'rango' cuando haga el destructuring, si le cambio el nombre a 'Capitan', igual me tomara 'Soldado' (el original)
}

//const { nombre, edad, clave } = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
    //console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlong: {
            lat: 13.2323,
            long: 12.34543,
        }
    }
}

const { nombreClave, anios, latlong: { lat, long } } = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, long);
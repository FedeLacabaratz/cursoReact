

// Template Strings

const nombre = 'Federico';
const apellido = 'Lacabaratz';

// const nombreCompleto = nombre + ' ' + apellido;  - Método viejo
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
};

console.log(`Este es un texto: ${getSaludo(nombre)}`);

// Conditional ternary operator

const activo = true;

// let mensaje = '';

// if(activo) {
//     mensaje = 'activo';
// } else {
//     mensaje = 'inactivo';
// }

// const mensaje = ( activo ) ? 'Activo' : 'Inactivo';

const mensajeActivo = activo && 'Activo'; // Dará de resultado 'Activo'
const mensajeFalse = !activo && 'Activo'; // Dará de resultado 'false'

console.log(mensajeActivo);
console.log(mensajeFalse);
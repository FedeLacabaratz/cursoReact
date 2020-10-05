

// Functions

// const saludar = function saludar(nombre) {
//     return `Hola, ${nombre}`;
// };

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
};

const saludar3 = nombre => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Federico'));

console.log(saludar2('Fede'));
console.log(saludar3('Federico'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502',
});

const user = getUser();

console.log(user);

// function getUsuarioActivo(nombre){
//     return {
//         uid: 'ABC567',
//         username: nombre,
//     }
// };

// const usuarioActivo =  getUsuarioActivo('Federico');

const usuarioActivo = nombre => ({
    uid: 'ABC567',
    username: nombre,
})
console.log(usuarioActivo('Federico'));
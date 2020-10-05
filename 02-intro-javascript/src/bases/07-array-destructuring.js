

// Array destructuring

const personajes = ['Ironman', 'Spiderman', 'Batman'];

// console.l(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [, , p3] = personajes;

// console.log(p1);
// console.log(p2);
console.log(p3);

const retornaArray = () => {
    return ['ABC', 123];
};

const [letras, numeros] = retornaArray();
console.log(letras, numeros);

const useState = (valor) => {
    return [valor, () => console.log('setNombre')];
};

const [nombre, setNombre] = useState("nombre");

console.log(nombre);
setNombre();

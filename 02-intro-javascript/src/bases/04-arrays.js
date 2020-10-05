

// Arrays

// const array =  new Array(100); crea un array con 100 posiciones y vacío
const array =  [1,2,3,4];
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);

const array2 = [...array,5];

const array3 = array2.map(function(x) {
    return x * 2;
});

console.log(array);
console.log(array2);
console.log(array3);

// Async - Await

// const getImagenPromesa = () => new Promise( resolve => resolve('http://promises.com'));
// getImagenPromesa().then(console.log);

const getImagen = async () => {

    try {
        // aqui tienes que crear una variable con el key de la api y ponerla al final de la variable peticion debajo de esto
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${tukeyaqui}`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.log(error.message);
    }

}

getImagen();

// peticion
//     .then( resp =>  resp.json())
//     .then( ({ data }) => {
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch(console.warn);

// Fetch API

// aqui tienes que crear una variable con el key de la api y ponerla al final de la variable peticion debajo de esto

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${tukeyaqui}`);

peticion
    .then( resp =>  resp.json())
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);
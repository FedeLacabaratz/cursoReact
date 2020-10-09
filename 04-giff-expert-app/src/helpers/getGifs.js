

const apiKey = process.env.REACT_APP_GIF_API_KEY;

const getGifs = async (category) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=${apiKey}`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url // El signo de interrogacion se pone para que solo si viene una url la traiga
            }
        });
        return gifs;
    } catch (error) {
        console.log(error.message);
    }
};

export default getGifs;
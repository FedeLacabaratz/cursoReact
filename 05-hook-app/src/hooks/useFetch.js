import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null,
        });

        const fetchData = async() => {
            const resp = await fetch(url);
            const data = await resp.json();
            setState({
                data: data,
                loading: false,
                error: null,
                });
        }
        fetchData();

}, [url])

    return state;
}

export default useFetch
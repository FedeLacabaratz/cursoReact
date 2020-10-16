import { useEffect, useState, useRef } from 'react';

const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null,
        });

        const fetchData = async () => {
            const resp = await fetch(url);
            const data = await resp.json();

            if (isMounted.current) {
                setState({
                    data: data, // Acorde a ES6 tambien puede ser solo escribit "data" la igualación esta demás, solo la deje por fines ilustrativos
                    loading: false,
                    error: null,
                });
            }
        }
        fetchData();

    }, [url])

    return state;
}

export default useFetch
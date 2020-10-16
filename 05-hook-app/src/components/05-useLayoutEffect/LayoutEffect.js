import React, { useLayoutEffect, useRef, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

import './layout.css';

const LayoutEffect = () => {

    const { counter, setNewCounter, increment, reset } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0] // Si viene la data, entonces extrae la data en la posicion 0.

    const pTag = useRef()

    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    const handleValues = () => {

        if (counter < 30) {
            return increment(1);
        }
        setNewCounter(63);

        if (counter > 30 && counter < 102) {
            return increment(1);
        }

        if (counter >= 102) {
            return reset();
        }
    }

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={pTag}
                > {quote} </p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={handleValues}
            >
                Next Quote
            </button>

        </div>
    )
};

export default LayoutEffect;
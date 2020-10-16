import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // };

    const increment = useCallback((num) => {
        setCounter(c => c + num);
        }, [setCounter]);

    useEffect(() => {
        // ??? Cuando se tiene que poner como dependencia una funcion se recomienda el useCallback para evitar la repeticion de la funcion sin fin.
    }, [increment])

    return (
        <div>
            <h1>useCallbackHook: {counter}</h1>
            <hr/>
            
            <ShowIncrement increment={increment}/>
        </div>
    )
};

export default CallbackHook;

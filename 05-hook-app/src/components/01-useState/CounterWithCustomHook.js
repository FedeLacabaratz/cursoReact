import React from 'react';
import useCounter from '../../hooks/useCounter';

import './counter.css';

const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr/>

            <button
                className="btn btn-primary mx-2"
                onClick={() => increment(2)}
            > + 2</button>
            <button
                className="btn btn-primary mr-2"
                onClick={() => decrement(2)}
            > - 2</button>
            <button
                className="btn btn-primary"
                onClick={reset}
            >Reset</button>
        </>
    )
};

export default CounterWithCustomHook;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value); // retorna un array con dos valores

    // handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
        //setCounter((c) => c + 1)
    }

    // handleReset
    const handleReset = () => {
        setCounter(value);
    }

    // handleSubstract
    const handleSubstract = () => {
        setCounter(counter - 1);
        //setCounter((c) => c - 1)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd} >+1</button>
            <button onClick={handleReset} >Reset</button>
            <button onClick={handleSubstract} >-1</button>
        </>
    );
};

CounterApp.propTyper = {
    value: PropTypes.number,
}

CounterApp.defaultProps = {
    value: 10,
}

export default CounterApp;
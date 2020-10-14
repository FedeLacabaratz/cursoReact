import React from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

const MultipleCustomHooks = () => {

    const { counter, setNewCounter, increment, reset } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0] // Si viene la data, entonces extrae la data en la posicion 0.
    
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
            <h1>BreakingBad Quotes</h1>
            <hr />

            { loading ? (
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            ) : (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0"> {quote} </p>
                        <footer className="blockquote-footer"> {author} </footer>
                    </blockquote>
                )}

            <button
                className="btn btn-primary"
                onClick={handleValues}
            >
                Next Quote
            </button>

        </div>
    )
};

export default MultipleCustomHooks;

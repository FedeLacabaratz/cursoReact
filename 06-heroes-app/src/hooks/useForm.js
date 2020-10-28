import { useState } from 'react';

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value,
            // [ target.email ]: target.value1,
        })
    };

    return [ values, handleInputChange, reset ];

};
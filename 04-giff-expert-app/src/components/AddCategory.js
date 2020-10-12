import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validacion
        if (inputValue.trim().length > 0) {
            setCategories(cats => [inputValue, ...cats])
            setInputValue('');
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={inputValue}
                placeholder="Search in here for your favorite giffs!..."
                onChange={handleInputChange}
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;

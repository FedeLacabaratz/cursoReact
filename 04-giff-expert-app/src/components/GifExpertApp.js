import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['van halen']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                setCategories={setCategories}
            />
            <hr />

            <ol>
                {categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    >{category}</GifGrid>
                ))}
            </ol>
        </>
    );
}

export default GifExpertApp;


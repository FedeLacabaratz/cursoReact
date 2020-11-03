import React from 'react';

export const NothingSelected = () => {
    return (
        <main className="nothing__main-content animate__animated animate__slideInDown">
            <p>
                Select Something
                <br />
                or create an entry!
            </p>

            <i className="far fa-star fa-4x mt-5"></i>
        </main>
    )
}

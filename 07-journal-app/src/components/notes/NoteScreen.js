import React from 'react'
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <main className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some title..."
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea 
                    placeholder="What happened today..."
                    className="notes__textarea"
                >

                </textarea>

                <div className="notes__image">
                    <img 
                        src="https://static.posters.cz/image/1300/poster/sunset-island-i16040.jpg"
                        alt="imagen"
                    />
                </div>

            </div>

        </main>
    )
};

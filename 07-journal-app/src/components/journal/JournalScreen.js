import React from 'react'
import { useSelector } from 'react-redux';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {

    const state = useSelector( state => state.notes );
    const { active } = state;

    return (
        <div 
            className="journal__main-content animate__animated animate__fadeIn"
        >

            <Sidebar />

            {
                (active) ? (<NoteScreen />) : (<NothingSelected />)
            }

        </div>
    )
};

import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {

    const state = useSelector( state => state.notes );
    const { notes } = state;
    
    return (
        <div className="journal__entries">
            
            {
                notes.map(note => (
                    <JournalEntry 
                        key={note.id}
                        note={note}
                    />
                ))
            }

        </div>
    )
};

import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const state = useSelector( state => state.notes );
    const { active: note } = state; // renombro "active" a "note"

    const [ formValues, handleInputChange, reset] = useForm( note );
    const { body, title, id } = formValues;

    const activeId = useRef(note.id);
    const activeUrl = useRef(note.url);

    useEffect(() => {
        
        if(note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
        if(note.url !== activeUrl.current) {
            reset(note);
            activeUrl.current = note.url
        }

    }, [note, reset]);

    useEffect(() => {
        
        dispatch(activeNote(formValues.id, { ...formValues }));

    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting(id));
    };

    return (
        <main className="notes__main-content animate__animated animate__slideInRight">

            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    name="title"    
                    placeholder="Some title..."
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    name="body"
                    placeholder="What happened today..."
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                >

                </textarea>
                {
                    note.url&&
                    (<div className="notes__image">
                        <img 
                            src={note.url}
                            alt="imagen"
                        />
                    </div>)
                }
            </div>

            <button 
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>

        </main>
    )
};

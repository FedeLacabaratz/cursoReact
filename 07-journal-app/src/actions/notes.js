import Swal from 'sweetalert2';
import { db } from "../firebase/firebase-config";
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";


export const startNewNote = () => {
    return async (dispatch, getState) => {
        const state = getState().auth;
        const { uid } = state;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        dispatch(activeNote(doc.id, newNote));
        dispatch(addNewNote(doc.id, newNote));
    }
};

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note,
    }
});

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async(dispatch) => {

        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
};

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const state = getState().auth;
        const { uid } = state;

        try {
            if(!note.url) {
                delete note.url;
            }
    
            const noteToFirestore = { ...note };
            delete noteToFirestore.id;
    
            await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

            dispatch(refreshNote(note.id, noteToFirestore));
            Swal.fire('Saved', note.title, 'success');
        } catch (error) {
            console.log(error)
            Swal.fire('Error', error, 'error');
        }
    }
};

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note,
        },
    }
});

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const state = getState().notes;
        const { active: ActiveNote } = state;

        Swal.fire({
            title: 'Uploading...',
            text:'Please wait until your file finishes uploading...',
            allowOutsideClick: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload(file);

        const updatedNote = {...ActiveNote, url: fileUrl};
        dispatch(startSaveNote(updatedNote));
        dispatch(activeNote(ActiveNote.id, updatedNote));

        Swal.close();
    }
};

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        const state = getState().auth;
        const { uid } = state;

        await db.doc(`${uid}/journal/notes/${id}`).delete();

        Swal.fire({
            title: 'Deleting...',
            text:'Please wait until your note is deleted...',
            allowOutsideClick: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        dispatch(deleteNote(id));

        Swal.close();
    }
};

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
});

export const notesLogout = () => ({
    type: types.notesLogoutCleaning,
});


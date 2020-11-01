import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const context = useContext(AuthContext);
    const { dispatch } = context;

    const handleLogin = () => {
        //history.push('/'); redirecciona a la ruta donde necesite ir
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Federico'
            }
        });    
        history.replace(lastPath); // No me deja redireccionar hacia atras con la flecha del navegador una vez que me direcciono donde le dije
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

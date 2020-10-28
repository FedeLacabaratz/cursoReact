import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        //history.push('/'); redirecciona a la ruta donde necesite ir
        history.replace('/'); // No me deja redireccionar hacia atras con la flecha del navegador una vez que me direcciono donde le dije
    }

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

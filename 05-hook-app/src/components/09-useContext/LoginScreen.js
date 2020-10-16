import React, { useContext } from 'react';
import UserContext from './UserContext';

const LoginScreen = () => {

    const userContext = useContext(UserContext);

    const { setUser } = userContext;

    const newUser = {
        id: 1234,
        name: 'Federico',
        email: 'lacarq@gmail.com',
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={() => setUser(newUser)}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen;

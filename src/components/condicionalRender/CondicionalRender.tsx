import React, { useState } from 'react';

const Login = (): JSX.Element => {
    return(
        <h3>Correct Login, Welcome!</h3>
    );
}

const Logout = (): JSX.Element => {
    return(
        <h3>Correct Logout, See you soon!</h3>
    );
}


const CondicionalRender = (): JSX.Element => {

    const [session, setSession] = useState(false);

    return(
        <div>
            <h2>Renderizado condicional</h2>
            {session ? <Login /> : <Logout />}
            <button onClick={():void => setSession(!session)}
            >{session ? "Logout":"Signin"}</button>
        </div>
    );
}

export default CondicionalRender;
import React, { MouseEventHandler, useState } from 'react'

const Padre = (): JSX.Element => {
    const [count, setCount] = useState(0);

    const increaseCount = (): void => {
        setCount(count+1);
    }

    const decreaseCount = (): void => {
        setCount(count-1);
    }

    return(
        <div>
            <h2>Comunication between React Component</h2>
            <p><b>{count}</b></p>
            <Hijo
                incrementarContador={increaseCount}
                msg1="Mensaje para el hijo número 1"
                id={1}
            />
            <Hijo
                reducirContador={decreaseCount}
                msg2="Mensaje para el hijo número 2"
                id={2}
            />
        </div>
    );
}

type prop ={
    incrementarContador?: MouseEventHandler,
    reducirContador?: MouseEventHandler,
    msg1?: string,
    msg2?: string,
    id: number
}

const Hijo = ({incrementarContador, reducirContador, msg1, msg2, id}: prop): JSX.Element => {
    return(
        <div>
            {id === 1 && <h3>{msg1}</h3>}
            {id === 2 && <h3>{msg2}</h3>}
            {id === 1 && <button onClick={incrementarContador}> + </button>}
            {id === 2 && <button onClick={reducirContador}> - </button>}
        </div>
    );
}


export default Padre;
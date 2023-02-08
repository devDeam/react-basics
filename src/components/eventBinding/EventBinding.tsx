import React, { useState } from 'react';

const COUNT: number = 0;

const EventBinding = (): JSX.Element => {
    const [count, setCount] = useState(COUNT);

    const summary = (): void => {
        setCount(count+1);
    }

    const substration = (): void => {
        setCount(count-1);
    }

    const reset = (): void => {
        setCount(COUNT);
    }

    return(
        <React.Fragment>
            <h2>Eventos en Componentes Funcionales</h2>
            <h3>{count}</h3>
            <nav>
                <button onClick={substration}> - </button>
                <button onClick={summary}> + </button>
            </nav>
                <button onClick={reset}> RESET </button>
        </React.Fragment>
    );
}

export default EventBinding;
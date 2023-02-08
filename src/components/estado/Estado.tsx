import React, { useState } from 'react';

const Estado = (): JSX.Element => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h2>El State</h2>
            <p>{count}</p>
            <button onClick={(): void => setCount(count-1)}
            > - </button>
            <button onClick={(): void => setCount(count+1)}
            > + </button> <br/>
            <button onClick={(): void => setCount(0)}
            > RESET </button>
        </div>
    );
}

export default Estado;
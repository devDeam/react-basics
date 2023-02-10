import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';

const CustomHooks = (): JSX.Element => {
    const URL: string = "https://pokeapi.co/api/v2/pokemon/";
    let { data, isPending, error }: any = useFetch(URL);

    return(
        <div>
            <h2>Custom Hooks</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3><mark>{JSON.stringify(error)}</mark></h3>
            <h3>
                <pre style={{whiteSpace:"pre-wrap"}}>
                    <code>{JSON.stringify(data)}</code>
                </pre>
            </h3>
        </div>
    );
}

export default CustomHooks;

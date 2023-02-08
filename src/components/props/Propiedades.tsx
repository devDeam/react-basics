import React, { ReactComponentElement, ReactElement } from 'react';

interface Object {
    nombre: string,
    correo: string,
}

type Props = {
    porDefecto: string,
    cadena: string,
    numero: number,
    booleano: boolean,
    arreglo: number[],
    objeto: Object,
    elementoReact: ReactElement,
    funcion: any,
    componenteReact: ReactElement

}

const Propiedades = (props: Props) => {
    const cadena: string = props.cadena;
    const numero: number = props.numero;
    const booleano: boolean = props.booleano;
    const arreglo: number[] = props.arreglo;
    const objeto: Object = props.objeto;
    const elemento: ReactElement = props.elementoReact;
    const funcion: any = props.funcion;
    const componenteReact: ReactElement = props.componenteReact;
    return(
    <div>
        <h2>{props.porDefecto} component</h2>
        <ul>
            <li key="0">{cadena}</li>
            <li key="1">{numero}</li>
            <li key="2">{String(booleano)}</li>
            <li key="3">{arreglo.join(', ')}</li>
            <li key="4">{`${objeto.nombre}, ${objeto.correo}`}</li>
            <li key="5">{arreglo.map(funcion).join(', ')}</li>
            <li key="6">{elemento}</li>
            <li key="7">{componenteReact}</li>
        </ul>
    </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: "There's props",
}
export default Propiedades;
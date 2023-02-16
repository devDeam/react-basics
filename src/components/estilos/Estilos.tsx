import React from 'react';
import './Estilos.css';
// Estilos modularizados
import moduleStyle from './Estilos.module.css';
// Hojas de estilos SASS


const Estilos = (): JSX.Element => {
    const myStyles: Object = {
        borderRadius: ".5rem",
        margin: "2rem auto",
        maxWidth:"50%",
    }
    return(
        <div className="estilos">
            <h2>Estilos CSS en React</h2>
            <h3 className="bg-react">Estilos en hoja CSS externa</h3>
            <h3 className="bg-react" style={{borderRadius: ".25rem", margin:"1rem"}}>
                Estilos CSS en línea (atributo style)
            </h3>
            <h3 className="bg-react" style={myStyles}>
                Estilos en línea interpolados
            </h3>
            <h3 className="bg-react" style={myStyles}>
                Agregando Normalize con <br/>
                <code>@import-normalize;</code>
            </h3>
            <div className="bg-react">
                <h3>Estilos CSS como módulos</h3>
                <input type="button" value="Cancelar" className={moduleStyle.error}/> &nbsp;
                <input type="button" value="Enviar" className={moduleStyle.success}/>
            </div>
            <div className="bg-react">
                <h3>Utilizando SASS con <br/> <code>npm install node-sass</code></h3>
            </div>
        </div>
    );
}

export default Estilos;
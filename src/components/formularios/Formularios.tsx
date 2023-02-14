import * as React from 'react';
import { useState } from 'react';

const Formularios = ():JSX.Element => {
    const [nombre, setNombre] = useState<string>("");
    const [sabor, setSabor] = useState<string>("");
    const [lenguaje, setLenguaje] = useState<string>("");
    const [terminos, setTerminos] = useState<Boolean>(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => e.preventDefault();
    const hanldeForm = (e: React.ChangeEvent<HTMLInputElement>): void => {

    }
    return(
        <div>
            <h2>Manejo de Formularios en React</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" name="nombre" id="nombre"
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                    />
                <p>Elige tu sabor JS Favorito: </p>
                <input type="radio" name="sabor" id="TypeScript" value="TypeScript"
                    defaultChecked
                    onChange={e=>setSabor(e.target.value)}/>
                <label htmlFor="TypeScript">TypeScript</label>
                <input type="radio" name="sabor" id="React" value="React" onChange={e=>setSabor(e.target.value)}/>
                <label htmlFor="React">React</label>
                <input type="radio" name="sabor" id="Angular" value="Angular" onChange={e=>setSabor(e.target.value)}/>
                <label htmlFor="Angular">Angular</label>
                <input type="radio" name="sabor" id="Vue" value="Vue" onChange={e=>setSabor(e.target.value)}/>
                <label htmlFor="Vue">Vue</label>
                <input type="radio" name="sabor" id="Svelte" value="Svelte" onChange={e=>setSabor(e.target.value)}/>
                <label htmlFor="Svelte">Svelte</label>
                <p>Tu sabor favorito es: {sabor? sabor: "Aún no eliges un sabor"}</p>
                <p>Elige tu lenguaje de programación favorito:</p>
                <select name="lenguaje" onChange={e=>setLenguaje(e.target.value)}
                    defaultValue="">
                    <option value="">- - -</option>
                    <option value="ts">TypeScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <p>Seleccionaste: {lenguaje}</p>
                <br/>
                <label htmlFor="terminos"> Acepto los términos y condiciones </label>
                <input type="checkbox" name="terminos" id="terminos" onChange={e=>setTerminos(e.target.checked)}/>
                <p>¿Aceptó los términos y condiciones?: {terminos? "Sí":"No"}</p>
                <br />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Formularios;
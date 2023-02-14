import React, { useState } from 'react';

interface DATA {
    nombre?: string;
    sabor?: string;
    lenguaje?: string;
    terminos?: boolean;
}
const FormularioComplejo = (): JSX.Element => {
    const [form, setForm] = useState<DATA>({});
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        alert('Formulario enviado');
    };
    const handleChange = (e: React.ChangeEvent): void => {
        const $e = e.target as HTMLInputElement | HTMLSelectElement;
        setForm({
            ...form,
            [$e.name]:$e.value
        })
    }
    const handleChecked = (e: React.ChangeEvent): void => {
        const $e = e.target as HTMLInputElement;
        setForm({
            ...form,
            [$e.name]:$e.checked
        })
    }

    return(
        <div>
            <h2>Manejando formularios complejos con React</h2>
            <form onSubmit={(e)=>handleSubmit(e)} id="form">
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" name="nombre" id="nombre"
                    value={form.nombre}
                    onChange={e=>handleChange(e)}
                    />
                <p>Elige tu sabor JS Favorito: </p>
                <input type="radio" name="sabor" id="TypeScript" value="TypeScript"
                    defaultChecked
                    onChange={e=>handleChange(e)}/>
                <label htmlFor="TypeScript">TypeScript</label>
                <input type="radio" name="sabor" id="React" value="React" onChange={e=>handleChange(e)}/>
                <label htmlFor="React">React</label>
                <input type="radio" name="sabor" id="Angular" value="Angular" onChange={e=>handleChange(e)}/>
                <label htmlFor="Angular">Angular</label>
                <input type="radio" name="sabor" id="Vue" value="Vue" onChange={e=>handleChange(e)}/>
                <label htmlFor="Vue">Vue</label>
                <input type="radio" name="sabor" id="Svelte" value="Svelte" onChange={e=>handleChange(e)}/>
                <label htmlFor="Svelte">Svelte</label>
                <p>Tu sabor favorito es: {form.sabor? form.sabor: "Aún no eliges un sabor"}</p>
                <p>Elige tu lenguaje de programación favorito:</p>
                <select name="lenguaje" onChange={e=>handleChange(e)}
                    defaultValue="">
                    <option value="">- - -</option>
                    <option value="ts">TypeScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <p>Seleccionaste: {form.lenguaje}</p>
                <br/>
                <label htmlFor="terminos"> Acepto los términos y condiciones </label>
                <input type="checkbox" name="terminos" id="terminos" onChange={e=>handleChecked(e)}/>
                <p>¿Aceptó los términos y condiciones?: {form.terminos? "Sí":"No"}</p>
                <br />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default FormularioComplejo;
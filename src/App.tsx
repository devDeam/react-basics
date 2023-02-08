import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// Componentes creados
import Componentes from './components/componentes/Componentes';
import Propiedades from './components/props/Propiedades';
import Estado from './components/estado/Estado';
import CondicionalRender from './components/condicionalRender/CondicionalRender';
import RenderizadoElementos from './components/elementRender/ElementRender';
import EventBinding from './components/eventBinding/EventBinding';
import MoreEvents from './components/moreEvents/MoreEvents';
import Padre from './components/comunicacionComponents/ComunicacionComponentes';
import CicloVida from './components/cicloVidaComponentes/CicloVida';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Estudiando React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <section>
        <Componentes msg="Hi, I'm a component."/>
        <hr />
        <Propiedades
          cadena = "Esto es una cadena"
          numero = {19}
          booleano = {true}
          arreglo = {[1, 2, 3]}
          objeto = {{
            nombre: "Daniel", correo: "dalmanza@gmail.com"
          }}
          funcion = {(num: number) => num*num}
          elementoReact = {<i>Esto es un elemento react</i>}
          componenteReact = {<Componentes msg="Hi, I'm a component sended 
          like a props"/>}
        />
        <hr />
        <Estado />
        <hr />
        <CondicionalRender />
        <hr/>
        <RenderizadoElementos />
        <hr />
        <EventBinding />
        <hr />
        <MoreEvents />
        <hr />
        <Padre />
        <hr />
        <CicloVida />
      </section>
    </div>
  )
}

export default App

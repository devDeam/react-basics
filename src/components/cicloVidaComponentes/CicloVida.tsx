import React, { useState } from 'react'

const CicloVida = (): JSX.Element => {
  let now: string = new Date().toLocaleTimeString();
  const [hora, setHora] = useState(now);
  let temp: number;

  const tictac = (): void => {
    temp = setInterval(()=>(
        setHora(now)
    ), 1000)
  }

  const start = (): void => {
    tictac();
  }

  const stop = (): void => {
    clearInterval(temp)
  }

  return (
    <div>
        <h2>Ciclo de Vida de los componentes React</h2>
        <h3>{hora}</h3>
        <nav>
            <button onClick={stop}>Stop</button>
            <button onClick={start}>Start</button>
        </nav>
    </div>
  )
}

export default CicloVida
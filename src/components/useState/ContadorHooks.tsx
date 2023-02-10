import React, { useState } from 'react'

const ContadorHooks = ({titulo}: string | any): JSX.Element => {
  const [count, setCount] = useState(0);
  const sumar = (): void => setCount(count+1);
  const restar = (): void => setCount(count-1);
  return (
    <div>
        <h2>Hooks - UseState</h2>
        <p>Contador de {titulo}</p>
        <nav>
          <button onClick={restar}> - </button>
          <button onClick={sumar}> + </button>
        </nav>
        <h3><b>{count}</b></h3>
    </div>
  )
}

ContadorHooks.defaultProps = {
  titulo: "Clicks",
}
export default ContadorHooks
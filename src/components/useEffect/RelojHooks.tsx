import React, { useState, useEffect } from 'react'

const RelojHooks = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);
  let temp: number;

  useEffect(()=>{

    if(visible) {
        console.log("Fase de actualización");
        temp = setInterval(()=>{
            setHour(new Date().toLocaleTimeString());
            }, 1000);
    } else {
        clearInterval(temp);
    }

    return () => {
        console.log("Fase de Desmontaje");
        clearInterval(temp);
    }
  }, [visible])


  return (
    <div>
        <h2>Hooks - useEffect, Reloj</h2>
        {visible && <Reloj hora={hour} />}
        <button onClick={()=> setVisible(false)}>Stop</button>
        <button onClick={()=> setVisible(true)}>Start</button>
    </div>
  )
}

type prop = {
    hora: string
}

const Reloj = ({hora}: prop): JSX.Element => {return <h3>{hora}</h3>}

export default RelojHooks
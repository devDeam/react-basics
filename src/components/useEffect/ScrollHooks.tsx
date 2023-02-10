import React, { useState, useEffect, EffectCallback } from 'react'

const ScrollHooks = () => {
  const [scrollY, setScrollY] = useState(0);

  /* Se ejecuta solo cuando el estado(valor) [scrollY] cambia */
  useEffect(() => {
    //console.log("Moviendo el scroll");

    const detectarScroll = (): void => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => {
        window.removeEventListener("scroll", detectarScroll)
        //console.log("Fase de desmontaje")
    };
  }, [scrollY]);

  /* Se ejecuta la primera vez que se renderiza el componente
  por el segundo argumento, "[]" */
  useEffect(()=>{
    //console.log("Fase de montaje");
  }, []);

  /* Se ejecuta cada vez que se renderiza el componente porque
  el segundo argumento está vacío */
  useEffect(()=>{
    //console.log("Fase de actualización");
  })

  /* Se ejecuta la fase de desmontaje, sirve para cerrar subscriciones de
  servicios, cerrar conexión con DB, terminar temporizadores, etc.
  Se le indica retornando una función flecha  */
  useEffect(()=>{
    //console.log("Fase de desmontaje");

    return ()=>{};
  })

  return (
    <div>
        <h2>Hooks - useEffect y el ciclo de vida</h2>
        <p>Scroll Y del Navegador {scrollY} px</p>
    </div>
  )
}

export default ScrollHooks
import React, { useRef } from 'react';

const Referencias = (): JSX.Element => {
    
    // Mala practica, manipulación de DOM.
    const handleToggleMenu1 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        const $menu: HTMLDivElement = document.getElementById('menu') as HTMLDivElement;
        const $e: HTMLElement = e.target as HTMLElement;
        if($e.textContent === "Menú") {
            $e.textContent = "Cerrar";
            $menu.style.display = "block";
        } else {
            $e.textContent = "Menú";
            $menu.style.display = "none";
        }
    }

    // Buena práctica según documentación de React
    let refMenuBtn: React.MutableRefObject<any> = useRef(); // Refencia para el elemento HTML
    let refMenu: React.MutableRefObject<any> = useRef();
    const handleToggleMenu2 = (): void => {
        if(refMenuBtn.current.textContent === "Menú") {
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block"
        } else {
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display = "none";
        }
    }
    return(
        <div>
            <h2> Referencias</h2>
            <button id="menu-btn"
                /* onClick={(e)=>handleToggleMenu1(e)} */
                ref={refMenuBtn}
                onClick={handleToggleMenu2}
            >
                Menú
            </button>
            <nav id="menu" 
                style={{display: "none"}}
                ref={refMenu}
                >
                <a href="#">Sección 1</a> <br />
                <a href="#">Sección 2</a> <br />
                <a href="#">Sección 3</a> <br />
                <a href="#">Sección 4</a> <br />
                <a href="#">Sección 5</a> <br />
            </nav>
        </div>
    );
}

export default Referencias;
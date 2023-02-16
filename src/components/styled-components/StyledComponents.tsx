import React from 'react';
import styled, { css, ThemeProvider, keyframes, StyledComponent,
createGlobalStyle } from 'styled-components';

const StyledComponents = (): JSX.Element => {
    let mainColor: string = "#db7093",
      mainAlphaColor80: string = "#db709380";

      const setTransitiontime = (time: string): string => `all ${time} ease-in-out`;

      const fadeIn = keyframes`
        0%{
          opacity:0;
        }
        100%{
          opacity:1;
        }
      `;
    // styled component de tipo h3
    const MyH3: StyledComponent<any, {}> = styled.h3`
      padding: 2rem;
      text-align: center;
      background-color: ${mainColor};
      /* transition: background-color .5s ease-out; */
      transition: ${setTransitiontime(".4s")};
      color: ${(props) => props.color};
      /* Destructurado de props */
      color: ${({color})=> color};
      /* Reenderizado condicional */
      color: ${({color})=> color || "#000"};
      /* Agregar animación */
      animation: ${fadeIn} 5s ease-out;

      ${(props: any)=>props.isButton && css`
      margin: auto;
      border-radius:0.25rem;
      cursor: pointer;
      `}
      &:hover {
        background-color: ${mainAlphaColor80};
      }
    `;


    const light = {
      color: "#222",
      bgColor: "#DDD"
    }

    const dark = {
      color: "#DDD",
      bgColor: "#222"
    }

    const BOX: StyledComponent<"div", any, {}, never> = styled.div`
      padding: 1rem;
      margin: 1rem;
      color: ${({theme})=>theme.color};
      background-color: ${({theme})=>theme.bgColor};
    `;

    /* Herencia de estilos */
    const BoxRounded: StyledComponent<"div", any, {}, never> = styled(BOX)`
      border-radius:1rem;
    `;

    /* Estilos Globales, debería ir en el archivo principal */
    const GlobalStyled = createGlobalStyle`
      h2{
        padding: 2rem;
        background-color: #FFF;
        color: #61dafb;
        text-transform: uppercase;
      }
    `;

    return(
        <div>
          <GlobalStyled></GlobalStyled>
            <h2>Utilizando la librería Styled Components</h2>
            <p>Primero se instala con <code>npm i --save-dev @types/styled-components</code></p>
            <MyH3>Hola, soy un h3 estilizado con styled-components</MyH3>
            <MyH3 color="#61dafb">Soy otro h3 estilizado con styled-components pero con props</MyH3>
            <MyH3 isButton={true}>Soy un H3 estilizado como button</MyH3>
            <ThemeProvider theme={light}>
              <BOX> Soy una caja Light</BOX>
              <BoxRounded>Soy una caja con bordes redondeados pero light</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
              <BOX> Soy una caja Dark</BOX>
              <BoxRounded>Soy una caja con bordes redondeados pero dark</BoxRounded>
            </ThemeProvider>
        </div>
    );
}

export default StyledComponents;
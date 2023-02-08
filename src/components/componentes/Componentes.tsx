import React from 'react'

type Props = {
    msg: string;
}
const Componentes = (props: Props) => {
  return (
    <h2>{props.msg}</h2>
  )
}

export default Componentes
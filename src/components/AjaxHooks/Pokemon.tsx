import React from 'react'

type Prop = {
    url: string,
    name: string,
}
const Pokemon = ({url, name}: Prop): JSX.Element => {
  return (
    <div>
        <figure>
            <img src={url} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    </div>
  )
}

export default Pokemon
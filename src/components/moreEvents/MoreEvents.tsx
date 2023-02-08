import React, { MouseEventHandler } from 'react'

type prop = {
    myOnClick: MouseEventHandler
}

const Boton = ({myOnClick}: prop): JSX.Element => {
  return(
    <button onClick={myOnClick}>Button as a component</button>
  );
}

const MoreEvents = (): JSX.Element => {

  const handleClick = (e: React.MouseEvent, msg: string):void => {
    console.log(e);
    console.log(e.target);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    console.log(msg);
  }

  return (
    <div>
        <h2>More about events</h2>
        <button
        onClick={(e)=>handleClick(e, "Msg from params event")}>
        Meeting
        </button>
        {/* Evento personalizado */}
        <Boton
          myOnClick={(e: React.MouseEvent)=>handleClick(e, "Msg from params event")}
        />
    </div>
  )
}

export default MoreEvents;
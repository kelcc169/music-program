import React from 'react';

import TimerBar from './TimerBar';
import Bubble from './Bubble';

const Piece = ({piece}) => {
  return(
    <div>
      <h1>{piece.name}</h1>
      <h3>{piece.composer}</h3>
      <div>
        <p>this will be a bar showing how much time is left - component!</p>
        <TimerBar />
      </div>
      <div>
        <p>Big box where the bubbles of modals will go - render a new component!</p>
        <Bubble />
      </div>
    </div>
  )
}

export default Piece;
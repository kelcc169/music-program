import React from 'react';
import { Link } from 'react-router-dom';

const ProgramItem = ({concert, setPiece}) => {
  var program = concert.map((piece, index) => {
    return(
      <Link to ='/piece' onClick={() => setPiece(piece)}>
        <div key={index}>
          <h1>{piece.name}</h1>
          <h3>{piece.composer}</h3>
        </div>
      </Link>
    )
  })

  return(
    <div>
      {program}
    </div>
  )
}

export default ProgramItem;
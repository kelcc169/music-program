import React from 'react';

const ProgramItem = ({concert}) => {
  var program = concert.map((piece, index) => {
    return(
      <div key={index}>
        <h1>{piece.name}</h1>
        <h3>{piece.composer}</h3>
      </div>
    )
  })

  return(
    <div>
      {program}
    </div>
  )
}

export default ProgramItem;
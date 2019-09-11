import React, { useState, useEffect } from 'react';
import './App.css';

import CONCERT from './CONCERT';

import ProgramItem from './ProgramItem';

const App = () => {
  const [ concert, setConcert ] = useState([])

  useEffect(() => {
    console.log('hello')
    setConcert(CONCERT.concert)
  }, [])

  var contents;
  if (concert.length > 0) {
    contents = (
      <ProgramItem concert={concert} />
    )
  } else {
    contents = (<p>Loading</p>)
  }

  return(
    <>
      {contents}
    </>
  )
}

export default App;

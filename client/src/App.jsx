import React, { useState, useEffect } from 'react';
import './App.css';

import ProgramItem from './ProgramItem';

const App = () => {
  const [ concert, setConcert ] = useState([])

  useEffect(() => {
    console.log('hello')
    setConcert([{name: "Bach Double", composer: "Bach"},
    {name: "Something", composer: "Somebody"},
    {name: "Something Else", composer: "Somebody Else"}])
  }, [])

  var contents;
  if (concert.length > 0) {
    contents = (
      <div>
        <ProgramItem concert={concert} />
      </div>
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

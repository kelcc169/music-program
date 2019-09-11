import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';
import './App.css';

import CONCERT from './CONCERT';

import ProgramItem from './ProgramItem';
import Piece from './Piece';

const App = () => {
  const [ concert, setConcert ] = useState([]);
  const [ piece, setPiece ] = useState({});

  useEffect(() => {
    console.log('hello')
    setConcert(CONCERT.concert)
  }, [])

  var contents;
  if (concert.length > 0) {
    contents = (
      <>
        <Link to ='/'>CONCERT</Link>
        <Route exact path='/' render={() => 
          <ProgramItem concert={concert} setPiece={setPiece} /> } />
        <Route path ='/piece' render={() => <Piece piece={piece} /> } />
      </>
    )
  } else {
    contents = (<p>Loading</p>)
  }

  return(
    <Router>
      {contents}
    </Router>
  )
}

export default App;

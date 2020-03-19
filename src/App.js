import React from 'react';
import './App.sass';
import Nav from'./Components/Nav/Nav'
import Features from './Components/Features/Features'
import NewLiving from './Components/NewLiving/NewLiving'

function App() {
  return (
    <div className="App">
      <Nav />
      <Features/>
      <NewLiving/>
    </div>
  );
}

export default App;

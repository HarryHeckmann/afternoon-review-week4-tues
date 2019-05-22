import React from 'react';
import './App.css';
import Logo from './taco.svg'

import Main from './Components/Main'

function App() {
  return (
    <div className="App">
      <img className='App-logo' src={require('./taco.svg')}/>
      <Main/>
    </div>
  );
}

export default App;

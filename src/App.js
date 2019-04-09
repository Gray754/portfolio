import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App appContainer" style={{overflowX:'hidden'}}>
        <Navbar/>
        <Main/>
      </div>
    );
  }
}

export default App;

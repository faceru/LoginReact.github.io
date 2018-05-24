// 123
import React, { Component } from 'react';

import './App.css';




import Menu from './menu';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>
            React APP for Login and Registrate
          </h1>
          
          <Menu/>
        </header>
        
      </div>
    );
  }
}

export default App;

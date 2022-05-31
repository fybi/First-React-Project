import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';

//function App() {}

class App extends Component {
  render () {
    return (
      <div className="root">
       <Greet />
      </div>
    );
  }
}

export default App;

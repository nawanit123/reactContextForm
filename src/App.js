import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Form />
      </div>
    );
  }
}

export default App;

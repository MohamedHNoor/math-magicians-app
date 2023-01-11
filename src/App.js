import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

export default App;

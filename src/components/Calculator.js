import React, { Component } from 'react';
import '../index.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="screen gray">0</div>
        <div className="btn">AC</div>
        <div className="btn">+/-</div>
        <div className="btn">%</div>
        <div className="btn orange">/</div>
        <div className="btn">7</div>
        <div className="btn">8</div>
        <div className="btn">9</div>
        <div className="btn orange">X</div>
        <div className="btn">4</div>
        <div className="btn">5</div>
        <div className="btn">6</div>
        <div className="btn orange">-</div>
        <div className="btn">1</div>
        <div className="btn">2</div>
        <div className="btn">3</div>
        <div className="btn orange">+</div>
        <div className="btn btn-zero">0</div>
        <div className="btn">.</div>
        <div className="btn orange">=</div>
      </div>
    );
  }
}

export default Calculator;

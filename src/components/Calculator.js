import React, { Component } from 'react';
import Screen from './Screen';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor() {
    super();
    this.updateCalc = this.updateCalc.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  updateCalc(buttonName) {
    const data = calculate(this.state, buttonName);
    this.setState(data);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <Screen total={total} next={next} operation={operation} />
        <Buttons updateCalc={this.updateCalc} />
      </div>
    );
  }
}

export default Calculator;

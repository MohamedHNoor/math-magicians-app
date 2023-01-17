import React, { useState } from 'react';
import Screen from './Screen';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const updateCalc = (buttonName) => {
    const data = calculate(state, buttonName);
    setState(data);
  };
  const { total, next, operation } = state;
  return (
    <div className="calculator">
      <h3>Let`s do some maths!</h3>
      <div className="container">
        <Screen total={total} next={next} operation={operation} />
        <Buttons updateCalc={updateCalc} />
      </div>
    </div>
  );
};

export default Calculator;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Buttons extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(btn) {
    const btnName = btn.target.textContent;
    const { updateCalc } = this.props;
    updateCalc(btnName);
  }

  render() {
    return (
      <>
        <button type="button" className="btn" onClick={this.clickHandler}>
          AC
        </button>
        <button type="button" className="btn" onClick={this.clickHandler}>
          +/-
        </button>
        <button type="button" className="btn" onClick={this.clickHandler}>
          %
        </button>
        <button
          type="button"
          className="btn orange"
          onClick={this.clickHandler}
        >
          ÷
        </button>
        <button type="button" className="btn" onClick={this.clickHandler}>
          7
        </button>
        <button type="button" className="btn" onClick={this.clickHandler}>
          8
        </button>
        <button type="button" className="btn" onClick={this.clickHandler}>
          9
        </button>
        <button
          type="button"
          className="btn orange"
          onClick={this.clickHandler}
        >
          x
        </button>
        <button type="button" className="btn" onClick={this.clickHandler}>
          4
        </button>
        <button type="button" className="btn" onClick={this.clickHandler}>
          5
        </button>
        <button type="button" className="btn" onClick={this.clickHandler}>
          6
        </button>
        <button
          type="button"
          className="btn orange"
          onClick={this.clickHandler}
        >
          -
        </button>
        <button type="button" className="btn" onClick={this.clickHandler}>
          1
        </button>
        <button type="button" className="btn" onClick={this.clickHandler}>
          2
        </button>
        <button type="button" className="btn" onClick={this.clickHandler}>
          3
        </button>
        <button
          type="button"
          className="btn orange"
          onClick={this.clickHandler}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-zero"
          onClick={this.clickHandler}
        >
          0
        </button>
        <button type="button" className="btn" onClick={this.clickHandler}>
          .
        </button>
        <button
          type="button"
          className="btn orange"
          onClick={this.clickHandler}
        >
          =
        </button>
      </>
    );
  }
}

Buttons.propTypes = { updateCalc: PropTypes.func.isRequired };

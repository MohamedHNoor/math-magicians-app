import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
export default class Screen extends Component {
  render() {
    const { next, total } = this.props;
    return (
      <div className="screen">
        <div className="result">{next !== null ? next : total || 0}</div>
      </div>
    );
  }
}

Screen.defaultProps = {
  total: '',
  next: '',
};

Screen.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

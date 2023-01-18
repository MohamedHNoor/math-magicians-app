import React from 'react';
import PropTypes from 'prop-types';

function Screen(props) {
  const { next, total, operation } = props;
  return (
    <div className="screen">
      <div className="result">
        {total}
        {operation}
        {next}
      </div>
    </div>
  );
}

export default Screen;

Screen.defaultProps = {
  total: '',
  operation: '',
  next: '',
};

Screen.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

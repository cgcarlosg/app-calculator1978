import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => {
  const { total, next, operation } = result;
  const display = `${total == null ? '' : total}
    ${operation == null ? '' : operation}
    ${next == null ? '' : next}`;
  return (
    <div className="Display">{display}</div>
  );
};

  Display.propTypes = {
    result: PropTypes.shape({
      total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      next: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      operation: PropTypes.string,
    }).isRequired,
};

export default Display

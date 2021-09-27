import React from 'react';
import PropTypes from 'prop-types';

function Button({ image, children, handleClick, testID, disabled, className }) {
  return (
    <button
      type="button"
      onClick={ handleClick }
      data-testid={ testID }
      disabled={ disabled }
      src={ image }
      className={ className }
    >
      {children}
    </button>
  );
}

const { func, string, bool, oneOfType, node } = PropTypes;

Button.propTypes = {
  handleClick: func.isRequired,
  testID: string.isRequired,
  disabled: bool,
  children: oneOfType(string, node).isRequired,
  image: string.isRequired,
  className: string.isRequired,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;

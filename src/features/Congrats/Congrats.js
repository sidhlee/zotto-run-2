import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congrats message
 * @function
 * @param {Object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is true)
 */
const Congrats = props => {
  const message = props.success ? (
    <span data-test="congrats-message">
      Congratulations! You guessed the word!
    </span>
  ) : null;
  return <div data-test="component-congrats">{message}</div>;
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;

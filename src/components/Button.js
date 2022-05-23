import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  render() {
    const {
      text,
    } = this.props;

    return (
      <button type="button" className="button-container">
        {text}
      </button>
    );
  }
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;

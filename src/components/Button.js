import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
  render() {
    const {
      text, id, className,
    } = this.props;

    return (
      <button type="button" className={className} id={id}>
        {text}
      </button>
    );
  }
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Button;

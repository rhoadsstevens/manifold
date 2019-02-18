import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ResourceSpreadsheet extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 56,
    height: 43
  };

  render() {
    const { className, width, height } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 56 43"
      >
        <path
          d="M5.99999996,12.9999 L5.99999996,52 L58,52 L58,12.9999 L5.99999996,12.9999 Z M60,10.9999 L60,54 L3.99999996,54 L3.99999996,10.9999 L60,10.9999 Z M59,22 L59,24 L4.99999996,24 L4.99999996,22 L59,22 Z M16,12 L18,12 L18,53 L16,53 L16,12 Z"
          transform="translate(-4 -11)"
        />
      </svg>
    );
  }
}

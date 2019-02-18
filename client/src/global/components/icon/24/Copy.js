import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Copy extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 16,
    height: 18
  };

  render() {
    const { className, width, height } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 18"
      >
        <path
          d="M4.99999997,3.99999997 L4.99999997,18 L3.99999997,18 L3.99999997,2.99999996 L18,2.99999996 L18,3.99999997 L4.99999997,3.99999997 Z M7.99999998,6.99999998 L7.99999998,20 L19,20 L19,6.99999998 L7.99999998,6.99999998 Z M20,5.99999997 L20,21 L6.99999998,21 L6.99999998,5.99999997 L20,5.99999997 Z M9.99999999,11 L9.99999999,9.99999999 L17,9.99999999 L17,11 L9.99999999,11 Z M9.99999999,14 L9.99999999,13 L17,13 L17,14 L9.99999999,14 Z M9.99999999,17 L9.99999999,16 L17,16 L17,17 L9.99999999,17 Z"
          transform="translate(-4 -3)"
        />
      </svg>
    );
  }
}
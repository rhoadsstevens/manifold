import React, { Component } from "react";
import PropTypes from "prop-types";

export default class StopSign extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 52,
    height: 53
  };

  render() {
    const { className, width, height } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 52 53"
      >
        <path
          d="M42.7692,5.97639996 L21.23,5.97639996 L5.99999996,21.2068 L5.99999996,42.746 L21.23,57.976 L42.7692,57.976 L58,42.746 L58,21.2068 L42.7692,5.97639996 Z M32,45 C30.3431457,45 29,43.6568543 29,42 C29,40.3431458 30.3431457,39 32,39 C33.6568543,39 35,40.3431458 35,42 C35,43.6568543 33.6568543,45 32,45 Z M32.9963,35.0011 L31.0025,35.0011 L28.0178,19 L36.0114,19 L32.9963,35.0011 Z"
          transform="translate(-6 -5)"
        />
      </svg>
    );
  }
}
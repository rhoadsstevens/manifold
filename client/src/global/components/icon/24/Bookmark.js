import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Bookmark extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 12,
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
        viewBox="0 0 12 18"
      >
        <path
          d="M17,19.1970251 L17,4.96799997 L6.99999998,4.96799997 L6.99999998,19.1970251 L12,15.9688432 L17,19.1970251 Z M5.99999997,21.032975 L5.99999997,3.96799997 L18,3.96799997 L18,21.032975 L12,17.1591568 L5.99999997,21.032975 Z"
          transform="translate(-6 -3)"
        />
      </svg>
    );
  }
}

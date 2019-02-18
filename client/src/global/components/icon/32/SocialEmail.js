import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SocialEmail extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 26,
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
        viewBox="0 0 26 18"
      >
        <path
          d="M28.586,6.99999997 L3.41499996,6.99999997 L16,18.159 L28.586,6.99999997 L28.586,6.99999997 Z M16,20.584 L2.99999996,9.05699998 L2.99999996,25 L29,25 L29,9.05699998 L16,20.584 L16,20.584 Z"
          transform="translate(-3 -7)"
        />
      </svg>
    );
  }
}

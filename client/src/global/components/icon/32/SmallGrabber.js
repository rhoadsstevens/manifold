import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SmallGrabber extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 18,
    height: 22
  };

  render() {
    const { className, width, height } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 18 22"
      >
        <path
          d="M25,11.5 L25,12.5 L6.99999997,12.5 L6.99999997,11.5 L25,11.5 Z M25,19.5 L25,20.5 L6.99999997,20.5 L6.99999997,19.5 L25,19.5 Z M21.3804056,5.54685843 L22.2550253,6.03166805 L10.6195944,27.022541 L9.74497468,26.5377314 L21.3804056,5.54685843 Z"
          transform="translate(-7 -5)"
        />
      </svg>
    );
  }
}

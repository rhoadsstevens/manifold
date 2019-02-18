import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SocialFacebook extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 16,
    height: 28
  };

  render() {
    const { className, width, height } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 28"
      >
        <path
          d="M18.1678,30 L18.1678,17.2279 L22.4549,17.2279 L23.0968,12.2503 L18.1678,12.2503 L18.1678,9.07239998 C18.1678,7.63129997 18.5678,6.64919997 20.6346,6.64919997 L23.27,6.64799997 L23.27,2.19609996 C21.9945188,2.06094811 20.7126138,1.99548416 19.43,1.99999996 C15.63,1.99999996 13.0281,4.31999996 13.0281,8.57999998 L13.0281,12.25 L8.72999998,12.25 L8.72999998,17.2276 L13.0281,17.2276 L13.0281,30 L18.1678,30 Z"
          transform="translate(-8 -2)"
        />
      </svg>
    );
  }
}

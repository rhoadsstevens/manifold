import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SmallDuplicate extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 26,
    height: 16
  };

  render() {
    const { className, width, height } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 26 16"
      >
        <path
          d="M22.0295628,8.96340998 L22.8084372,9.59058998 L11.5891465,23.5234603 L3.63491665,16.1025984 L4.31708328,15.3714016 L11.4848535,22.0585397 L22.0295628,8.96340998 Z M8.94916889,14.4595381 L9.62103106,13.7188619 L12.9426311,16.7318619 L12.2707689,17.4725381 L8.94916889,14.4595381 Z M17.4830332,22.6180949 L16.7041668,21.9909051 L27.5863668,8.47700507 L28.3652333,9.10419489 L17.4830332,22.6180949 Z"
          transform="translate(-3 -8)"
        />
      </svg>
    );
  }
}
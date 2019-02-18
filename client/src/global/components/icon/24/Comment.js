import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Comment extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 16,
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
        viewBox="0 0 16 16"
      >
        <path
          d="M7.99999998,16 L3.99999997,16 L3.99999997,4.99999997 L20,4.99999997 L20,16 L14.1773533,16 L7.99999998,21.0495005 L7.99999998,16 Z M19,5.99999998 L4.99999997,5.99999998 L4.99999997,15 L8.99999999,15 L8.99999999,18.9404996 L13.8206467,15 L19,15 L19,5.99999998 Z"
          transform="translate(-4 -5)"
        />
      </svg>
    );
  }
}

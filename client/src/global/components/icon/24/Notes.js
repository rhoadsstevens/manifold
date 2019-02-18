import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Notes extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 16,
    height: 19
  };

  render() {
    const { className, width, height } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 19"
      >
        <path
          d="M4.99999997,4.99999997 L4.99999997,17.9856 C4.99999997,19.0981224 5.90187757,20 7.01439998,20 L16.9856,20 C18.0981224,20 19,19.0981224 19,17.9856 L19,4.99999997 L4.99999997,4.99999997 Z M20,3.99999997 L20,17.9856 C20,19.6504072 18.6504072,21 16.9856,21 L7.01439998,21 C5.34959282,21 3.99999997,19.6504072 3.99999997,17.9856 L3.99999997,3.99999997 L20,3.99999997 Z M8.49999999,6.99999998 L7.49999998,6.99999998 L7.49999998,1.99999996 L8.49999999,1.99999996 L8.49999999,6.99999998 Z M12.5,6.99999998 L11.5,6.99999998 L11.5,1.99999996 L12.5,1.99999996 L12.5,6.99999998 Z M16.5,6.99999998 L15.5,6.99999998 L15.5,1.99999996 L16.5,1.99999996 L16.5,6.99999998 Z M16,16 L16,17 L7.99999998,17 L7.99999998,16 L16,16 Z M14,13 L14,14 L7.99999998,14 L7.99999998,13 L14,13 Z M16,9.99999999 L16,11 L7.99999998,11 L7.99999998,9.99999999 L16,9.99999999 Z"
          transform="translate(-4 -2)"
        />
      </svg>
    );
  }
}
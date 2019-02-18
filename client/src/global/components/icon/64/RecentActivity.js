import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RecentActivity extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 54,
    height: 32
  };

  render() {
    const { className, width, height } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 54 32"
      >
        <path
          d="M52.2719644,33.923 C52.6836878,32.7575987 53.7950317,31.9226 55.1014,31.9226 C56.7582543,31.9226 58.1014,33.2657458 58.1014,34.9226 C58.1014,36.5794543 56.7582543,37.9226 55.1014,37.9226 C53.7953307,37.9226 52.6841965,37.0879834 52.2722472,35.923 L42.9973494,35.923 L40.4160081,29.7522578 L32.4410526,47.1836502 L23.6697341,22.3737189 L18.0026907,35.923 L5.89899996,35.923 L5.89899996,33.923 L16.6713092,33.923 L23.8262659,16.816281 L32.6789474,41.8563499 L40.497992,24.7657422 L44.3286507,33.923 L52.2719644,33.923 L52.2719644,33.923 Z"
          transform="translate(-5 -16)"
        />
      </svg>
    );
  }
}
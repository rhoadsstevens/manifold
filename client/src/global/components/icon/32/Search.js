import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 18,
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
        viewBox="0 0 18 18"
      >
        <path
          d="M14.5788,8.78999998 C11.4031627,8.78999998 8.82879998,11.3643627 8.82879998,14.54 C8.82879998,17.7156373 11.4031627,20.29 14.5788,20.29 C17.7544173,20.29 20.3287676,17.7156697 20.3288,14.54006 C20.3280058,11.3646996 17.754048,8.79076178 14.5788,8.78999998 Z M21.3288,14.53988 C21.3288,18.2679221 18.3067221,21.29 14.5788,21.29 C10.8508779,21.29 7.82879998,18.2679221 7.82879998,14.54 C7.82879998,10.8120779 10.8508779,7.78999998 14.57892,7.78999999 C18.3064053,7.79089426 21.3279057,10.8123947 21.3288,14.53988 Z M18.6226191,19.2907997 L19.3357809,18.5898003 L24.1714809,23.5094003 L23.4583191,24.2103997 L18.6226191,19.2907997 Z"
          transform="translate(-7 -7)"
        />
      </svg>
    );
  }
}

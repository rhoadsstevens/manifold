import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ActivityComments extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 62,
    height: 62
  };

  render() {
    const { className, width, height } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 62 62"
      >
        <path
          fill="#363636"
          fillRule="evenodd"
          d="M63,32 C63,49.121 49.121,63 32,63 C14.879,63 1,49.121 1,32 C1,14.879 14.879,1 32,1 C49.121,1 63,14.879 63,32 M46,43.002 L42.073,43.002 L41.605,40.1 C41.223,37.726 39.245,36.002 36.903,36.002 L27.087,36.002 C24.743,36.002 22.766,37.726 22.385,40.1 L21.917,43.002 L18,43.002 L18,19.002 L46,19.002 L46,43.002 Z M37.079,43.002 L29,50.061 L29,43.002 L23.943,43.002 L24.359,40.417 C24.584,39.018 25.731,38.002 27.087,38.002 L36.903,38.002 C38.259,38.002 39.405,39.018 39.631,40.418 L40.047,43.002 L37.079,43.002 Z M16,17.002 L16,45.002 L27,45.002 L27,54.463 L37.829,45.002 L48,45.002 L48,17.002 L16,17.002 Z M32,24.002 C34.206,24.002 36,25.796 36,28.002 C36,30.208 34.206,32.002 32,32.002 C29.794,32.002 28,30.208 28,28.002 C28,25.796 29.794,24.002 32,24.002 M32,34.002 C35.309,34.002 38,31.311 38,28.002 C38,24.693 35.309,22.002 32,22.002 C28.691,22.002 26,24.693 26,28.002 C26,31.311 28.691,34.002 32,34.002"
          transform="translate(-1 -1)"
        />
      </svg>
    );
  }
}

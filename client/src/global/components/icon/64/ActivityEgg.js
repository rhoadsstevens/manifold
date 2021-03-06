import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class ActivityEgg extends Component {
  static propTypes = {
    iconClass: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    stroke: PropTypes.string,
    fill: PropTypes.string,
    svgProps: PropTypes.object
  };

  static defaultProps = {
    iconClass: "",
    size: "inherit",
    stroke: "currentColor",
    fill: "currentColor",
    svgProps: {}
  };

  get defaultHeight() {
    return 64;
  }

  get defaultWidth() {
    return 64;
  }

  get size() {
    return this.props.size;
  }

  get width() {
    if (this.size === null || this.size === "inherit") return null;
    if (this.size === "default") return this.defaultWidth;
    return this.size;
  }

  get height() {
    if (this.size === null || this.size === "inherit") return null;
    if (this.size === "default") return this.defaultHeight;
    return this.size;
  }

  get viewBox() {
    return "0 0 64 64";
  }

  get classes() {
    const { iconClass } = this.props;
    return classnames("manicon-svg", iconClass);
  }

  get fill() {
    return this.props.fill;
  }

  get stroke() {
    return this.props.stroke;
  }

  render() {
    const baseSvgProps = {
      xmlns: "http://www.w3.org/2000/svg",
      className: this.classes,
      width: this.width,
      height: this.height,
      viewBox: this.viewBox
    };

    const svgProps = Object.assign(baseSvgProps, this.props.svgProps);

    return (
      <svg {...svgProps}>
        <g fill="none" fillRule="evenodd">
          <path
            fill={this.fill}
            d="M63.0001,31.9998 C63.0001,49.1208 49.1211,62.9998 32.0001,62.9998 C14.8791,62.9998 1.0001,49.1208 1.0001,31.9998 C1.0001,14.8788 14.8791,0.9998 32.0001,0.9998 C49.1211,0.9998 63.0001,14.8788 63.0001,31.9998 M7,33.002 L14,33.002 L14,31.002 L7,31.002 L7,33.002 Z M15.3223,25.0555 L8.6953,22.8005 L8.0513,24.6935 L14.6773,26.9485 L15.3223,25.0555 Z M8.064,39.3231 L8.709,41.2161 L15.335,38.9611 L14.691,37.0681 L8.064,39.3231 Z M50,33.002 L57,33.002 L57,31.002 L50,31.002 L50,33.002 Z M55.9493,24.6932 L55.3043,22.8002 L48.6783,25.0552 L49.3223,26.9482 L55.9493,24.6932 Z M48.6646,38.9608 L55.2906,41.2158 L55.9356,39.3228 L49.3096,37.0678 L48.6646,38.9608 Z M40.1319,43.5545 C38.2189,45.8415 35.4829,47.0015 31.9999,47.0015 C28.5169,47.0015 25.7809,45.8425 23.8679,43.5555 C21.4059,40.6105 20.4849,35.7925 21.4059,30.6685 C22.6129,23.9505 26.9059,17.0015 31.9999,17.0015 C37.0949,17.0015 41.3869,23.9505 42.5939,30.6685 C42.8749,32.2325 42.9639,33.7575 42.9109,35.2185 L38.4589,30.7665 L33.9939,35.2315 L30.1799,30.7815 L25.5479,34.6415 L26.8279,36.1785 L29.9449,33.5795 L33.8809,38.1725 L38.4589,33.5945 L42.6519,37.7875 C42.2369,40.0575 41.3889,42.0515 40.1319,43.5545 M31.9999,15.0015 C25.6279,15.0015 20.7709,22.8915 19.4369,30.3155 C18.3979,36.1005 19.4539,41.3945 22.3339,44.8375 C24.6119,47.5625 27.9549,49.0015 31.9999,49.0015 C36.0459,49.0015 39.3879,47.5625 41.6659,44.8375 C44.5469,41.3935 45.6019,36.1005 44.5629,30.3155 C43.2289,22.8915 38.3729,15.0015 31.9999,15.0015"
          />
          <path
            fill={this.fill}
            d="M63.0001,31.9998 C63.0001,49.1208 49.1211,62.9998 32.0001,62.9998 C14.8791,62.9998 1.0001,49.1208 1.0001,31.9998 C1.0001,14.8788 14.8791,0.9998 32.0001,0.9998 C49.1211,0.9998 63.0001,14.8788 63.0001,31.9998 M7,33.002 L14,33.002 L14,31.002 L7,31.002 L7,33.002 Z M15.3223,25.0555 L8.6953,22.8005 L8.0513,24.6935 L14.6773,26.9485 L15.3223,25.0555 Z M8.064,39.3231 L8.709,41.2161 L15.335,38.9611 L14.691,37.0681 L8.064,39.3231 Z M50,33.002 L57,33.002 L57,31.002 L50,31.002 L50,33.002 Z M55.9493,24.6932 L55.3043,22.8002 L48.6783,25.0552 L49.3223,26.9482 L55.9493,24.6932 Z M48.6646,38.9608 L55.2906,41.2158 L55.9356,39.3228 L49.3096,37.0678 L48.6646,38.9608 Z M40.1319,43.5545 C38.2189,45.8415 35.4829,47.0015 31.9999,47.0015 C28.5169,47.0015 25.7809,45.8425 23.8679,43.5555 C21.4059,40.6105 20.4849,35.7925 21.4059,30.6685 C22.6129,23.9505 26.9059,17.0015 31.9999,17.0015 C37.0949,17.0015 41.3869,23.9505 42.5939,30.6685 C42.8749,32.2325 42.9639,33.7575 42.9109,35.2185 L38.4589,30.7665 L33.9939,35.2315 L30.1799,30.7815 L25.5479,34.6415 L26.8279,36.1785 L29.9449,33.5795 L33.8809,38.1725 L38.4589,33.5945 L42.6519,37.7875 C42.2369,40.0575 41.3889,42.0515 40.1319,43.5545 M31.9999,15.0015 C25.6279,15.0015 20.7709,22.8915 19.4369,30.3155 C18.3979,36.1005 19.4539,41.3945 22.3339,44.8375 C24.6119,47.5625 27.9549,49.0015 31.9999,49.0015 C36.0459,49.0015 39.3879,47.5625 41.6659,44.8375 C44.5469,41.3935 45.6019,36.1005 44.5629,30.3155 C43.2289,22.8915 38.3729,15.0015 31.9999,15.0015"
          />
        </g>
      </svg>
    );
  }
}

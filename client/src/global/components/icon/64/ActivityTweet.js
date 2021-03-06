import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class ActivityTweet extends Component {
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
            d="M44.577,26.983 C44.589,27.256 44.596,27.529 44.596,27.805 C44.596,36.212 38.202,45.907 26.505,45.907 C22.911,45.907 19.57,44.843 16.751,43.043 C17.247,43.102 17.753,43.131 18.271,43.131 C21.245,43.131 23.988,42.116 26.167,40.409 C23.384,40.356 21.035,38.521 20.224,35.989 C20.61,36.067 21.011,36.104 21.42,36.104 C22,36.104 22.566,36.027 23.096,35.884 C20.191,35.303 18,32.728 18,29.646 L18,29.564 C18.85,30.044 19.836,30.329 20.876,30.361 C19.172,29.224 18.045,27.276 18.045,25.07 C18.045,23.901 18.364,22.81 18.91,21.872 C22.046,25.719 26.73,28.254 32.016,28.512 C31.92,28.103 31.866,27.674 31.855,27.233 C31.776,24.03 34.192,21.168 37.37,20.763 C39.527,20.488 41.52,21.29 42.855,22.713 C44.301,22.435 45.667,21.903 46.894,21.175 C46.418,22.661 45.409,23.901 44.098,24.689 C45.387,24.538 46.612,24.195 47.751,23.687 C46.902,24.964 45.821,26.088 44.577,26.983 M32,1 C14.879,1 1,14.879 1,32 C1,49.121 14.879,63 32,63 C49.12,63 63,49.121 63,32 C63,14.879 49.12,1 32,1"
          />
          <path
            fill={this.fill}
            d="M44.577,26.983 C44.589,27.256 44.596,27.529 44.596,27.805 C44.596,36.212 38.202,45.907 26.505,45.907 C22.911,45.907 19.57,44.843 16.751,43.043 C17.247,43.102 17.753,43.131 18.271,43.131 C21.245,43.131 23.988,42.116 26.167,40.409 C23.384,40.356 21.035,38.521 20.224,35.989 C20.61,36.067 21.011,36.104 21.42,36.104 C22,36.104 22.566,36.027 23.096,35.884 C20.191,35.303 18,32.728 18,29.646 L18,29.564 C18.85,30.044 19.836,30.329 20.876,30.361 C19.172,29.224 18.045,27.276 18.045,25.07 C18.045,23.901 18.364,22.81 18.91,21.872 C22.046,25.719 26.73,28.254 32.016,28.512 C31.92,28.103 31.866,27.674 31.855,27.233 C31.776,24.03 34.192,21.168 37.37,20.763 C39.527,20.488 41.52,21.29 42.855,22.713 C44.301,22.435 45.667,21.903 46.894,21.175 C46.418,22.661 45.409,23.901 44.098,24.689 C45.387,24.538 46.612,24.195 47.751,23.687 C46.902,24.964 45.821,26.088 44.577,26.983 M32,1 C14.879,1 1,14.879 1,32 C1,49.121 14.879,63 32,63 C49.12,63 63,49.121 63,32 C63,14.879 49.12,1 32,1"
          />
        </g>
      </svg>
    );
  }
}

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ResourceLink extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 44,
    height: 54
  };

  render() {
    const { className, width, height } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 44 54"
      >
        <path
          d="M17.4826846,8.14176513 L19.1875154,7.0960348 L22.6052154,12.6678348 L20.9003846,13.7135651 L17.4826846,8.14176513 Z M29.5502686,5.07310368 L31.5145314,5.44949624 L30.3309314,11.6262962 L28.3666686,11.2499037 L29.5502686,5.07310368 Z M17.0647188,18.2775929 L16.5200811,20.2020071 L10.5030811,18.4991071 L11.0477188,16.5746929 L17.0647188,18.2775929 Z M50.7260091,53.4093791 L41.4434806,39.4870899 L48.0467817,35.442253 L27.0795914,21.9858801 L29.658112,46.9005307 L37.2607296,42.2341416 L46.5954779,56.1609275 L50.7260091,53.4093791 Z M53.499991,53.9646209 L46.0445221,58.9310726 L36.6692704,44.9438584 L27.995888,50.2674693 L24.6624086,18.0581199 L51.8112183,35.481747 L44.2605195,40.1069102 L53.499991,53.9646209 Z"
          transform="translate(-10 -5)"
        />
      </svg>
    );
  }
}

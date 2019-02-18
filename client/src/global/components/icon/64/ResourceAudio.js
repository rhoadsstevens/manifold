import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ResourceAudio extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 52,
    height: 43
  };

  render() {
    const { className, width, height } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 52 43"
      >
        <path
          d="M48.00315,32.999995 L47.99685,31.000005 L57.9968501,30.968505 L58.00315,32.968495 L48.00315,32.999995 Z M45.7945485,23.930549 L44.7894516,22.2014509 L54.0360516,16.8265509 L55.0411485,18.555649 L45.7945485,23.930549 Z M55.1203444,45.4413041 L54.1254557,47.1762959 L44.8473557,41.8559959 L45.8422444,40.1210041 L55.1203444,45.4413041 Z M17.7944608,21 L36,10.7329913 L36,52.2670087 L17.7944608,42 L5.99999996,42 L5.99999996,21 L17.7944608,21 Z M34,14.1570086 L18.3195392,23 L7.99999996,23 L7.99999996,40 L18.3195392,40 L34,48.8429914 L34,14.1570086 Z M17,27 L19,27 L19,36 L17,36 L17,27 Z"
          transform="translate(-6 -10)"
        />
      </svg>
    );
  }
}

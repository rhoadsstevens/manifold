import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ResourcePdf extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: 42,
    height: 56
  };

  render() {
    const { className, width, height } = this.props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 42 56"
      >
        <path
          d="M19.4613979,42.6129016 C19.1792211,41.3563136 20.3001653,39.798409 21.506853,39.1405926 C23.4243043,38.0952913 25.4218352,37.3226088 28.6983992,36.2652661 C28.7251897,36.2566209 28.7558895,36.2467387 28.7900617,36.2357581 C27.027286,40.3249032 25.0108001,43.5110461 23.3620772,44.1953919 C21.8171523,44.8367143 19.8250492,44.2311329 19.4613979,42.6129016 Z M31.4353589,35.3910265 C32.2467617,35.1301846 32.9425009,34.9012982 33.6014578,34.6767215 C32.5407212,33.593293 31.5754573,32.3671433 30.7313792,31.0364854 C30.1502477,32.8452396 29.4901642,34.6117166 28.7900617,36.2357581 C29.3899938,36.0429809 31.0601516,35.5116445 31.4353589,35.3910265 Z M27.8566562,24.5411109 C27.5177387,23.5930148 27.4596947,22.5672419 27.6978236,21.5539692 C28.0477534,20.2609404 29.300733,19.4265997 30.628697,19.6023437 L30.7409585,19.6237887 C32.4408207,20.0504729 32.8836773,21.8470936 32.5379754,23.8397748 C32.1359047,26.1567843 31.5032918,28.633931 30.7313792,31.0364854 C29.4777352,29.0601619 28.4914135,26.8533054 27.8566562,24.5411109 Z M34.2852021,34.4406233 C38.0515694,33.1226301 40.1834872,32.8599584 42.6879449,33.8484362 C44.3827485,34.5173921 45.5810899,36.2609366 44.8266682,37.8515443 C44.1000843,39.3838748 42.2972889,39.598878 40.4344079,39.022807 C37.9328256,38.2496314 35.5980198,36.7159952 33.6014578,34.6767215 C33.8327675,34.5978896 34.059545,34.5195888 34.2852021,34.4406233 Z M30.2009829,25.3484161 C31.6837972,29.6099016 34.4203944,33.3184342 37.6995737,35.5035275 C36.9061545,35.6816074 36.0078249,35.9567337 34.9457967,36.3283772 C34.0588963,36.6387356 33.1585803,36.9378649 32.0474493,37.2950605 C31.6465654,37.4239327 29.8047447,38.009806 29.3126082,38.1686177 C27.4517847,38.7691029 26.0277128,39.2707667 24.8083442,39.7793808 C26.7790615,36.4732167 29.0398292,30.6044526 30.2009829,25.3484161 Z M41.0251333,37.1120366 C42.048338,37.428449 42.8597242,37.3316822 43.0195767,36.994561 C43.1700124,36.6773853 42.7092617,36.0070092 41.9536733,35.7087709 C40.6307219,35.1866188 39.4084956,35.1199666 37.6995737,35.5035275 C38.7594188,36.2097593 39.8759426,36.7568509 41.0251333,37.1120366 Z M30.5674173,23.4978674 C30.7451655,22.4732981 30.5791182,21.7161808 30.2973437,21.5794702 C29.9894852,21.5702291 29.710969,21.7710888 29.636706,22.0434354 C29.494784,22.6488457 29.5306315,23.2823535 29.7625166,23.9393842 C29.8932265,24.4147715 30.0396871,24.8848652 30.2009829,25.3484161 C30.3395824,24.7210365 30.462515,24.1023869 30.5674173,23.4978674 Z M22.4641408,40.8966108 C21.951177,41.176249 21.3699803,41.9840047 21.4127679,42.1745465 C21.4593297,42.3817443 22.0684747,42.5669163 22.5952976,42.3482186 C23.2154467,42.0908185 23.9866851,41.1578331 24.8083442,39.7793808 C23.9529021,40.1361966 23.1982079,40.4964331 22.4641408,40.8966108 Z M51,58 L51,17.8331 C51,17.6121481 50.9122272,17.4002459 50.7559907,17.2440093 C50.5997541,17.0877728 50.3878519,17 50.1669,17 L40,17 L40,6.83309996 C40,6.37299153 39.6270084,5.99999996 39.1669,5.99999996 L13,5.99999996 L13,58 L51,58 Z M42,15 L50.1669,15 C50.9182849,15 51.6388949,15.2984864 52.1702043,15.8297958 C52.7015136,16.3611051 53,17.0817151 53,17.8331 L53,60 L11,60 L11,3.99999996 L39.1669,3.99999996 C40.7315779,3.99999996 42,5.26842203 42,6.83309996 L42,15 Z M39.6862229,6.18893547 L41.0987771,4.77306445 L52.1547771,15.8031645 L50.7422229,17.2190355 L39.6862229,6.18893547 Z"
          transform="translate(-11 -4)"
        />
      </svg>
    );
  }
}

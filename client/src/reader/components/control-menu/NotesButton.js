import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class NotesButton extends PureComponent {
  static displayName = "ControlMenu.NotesButton";

  static propTypes = {
    toggle: PropTypes.func,
    active: PropTypes.bool
  };

  clickHandler = event => {
    event.stopPropagation();
    this.props.toggle();
  };

  render() {
    const buttonClass = classNames({
      "button-notes": true,
      "button-active": this.props.active
    });
    return (
      <button
        className={buttonClass}
        onClick={this.clickHandler}
        data-id="toggle-notes"
      >
        <i className="manicon manicon-notepad" aria-hidden="true" />
        <span className="screen-reader-text">Open the notes menu</span>
      </button>
    );
  }
}

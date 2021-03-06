import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class ProjectContentSectionsPartsHeader extends PureComponent {
  static displayName = "Project.Content.Sections.Parts.Header";

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.string,
    subtitle: PropTypes.string
  };

  render() {
    return (
      <React.Fragment>
        {this.props.title && (
          <header className="form-section-label">
            <h2>{this.props.title}</h2>
          </header>
        )}
        {this.props.children && (
          <span className="instructions">{this.props.children}</span>
        )}
        {this.props.subtitle && (
          <header className="form-subsection-label">
            <h2>{this.props.subtitle}</h2>
          </header>
        )}
      </React.Fragment>
    );
  }
}

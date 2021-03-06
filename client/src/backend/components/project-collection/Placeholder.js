import React, { Component } from "react";
import PropTypes from "prop-types";
import Utility from "global/components/utility";

const helpLink = "https://manifoldapp.org/docs/";

export default class ProjectCollectionPlaceholder extends Component {
  static displayName = "ProjectCollection.Placeholder";

  static propTypes = {
    createClickHandler: PropTypes.func.isRequired
  };

  render() {
    return (
      <section>
        <div className="project-collection-placeholder">
          <header className="section-heading">
            <Utility.IconComposer
              icon="booksOnShelfStrokeUnique"
              stroke="#52e3ac"
            />
            <div className="main">
              <div className="body">
                <h4 className="title">
                  {"Ready to create a Project Collection?"}
                </h4>
              </div>
            </div>
          </header>
          <div className="centered-message">
            With Project Collections, you can take control of what appears on
            your Manifold Library homepage. Create custom groupings of Projects
            and change their order and visibility. You can handpick your
            collections and order them manually, or you can create Smart
            Collections that automatically update based on your filtering
            criteria.
          </div>
          <div className="button">
            <button
              className="button-icon-secondary"
              onClick={this.props.createClickHandler}
            >
              <i className="manicon manicon-plus" />
              <span>{"Create a Collection"}</span>
            </button>
          </div>
          <div className="documentation-link">
            <a href={helpLink} target="_blank" rel="noopener noreferrer">
              Visit our documentation
            </a>
          </div>
        </div>
      </section>
    );
  }
}

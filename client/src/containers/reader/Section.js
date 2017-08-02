import React, { Component } from "react";
import PropTypes from "prop-types";
import connectAndFetch from "utils/connectAndFetch";
import { Section } from "components/reader";
import { sectionsAPI, annotationsAPI, resourcesAPI, requests } from "api";
import { grab, isEntityLoaded } from "utils/entityUtils";
import { entityStoreActions } from "actions";
import uniq from "lodash/uniq";
import difference from "lodash/difference";
import { renderRoutes } from "helpers/routing";
import { HeadContent } from "components/global";

const { request, flush } = entityStoreActions;

export class SectionContainer extends Component {
  static fetchData = (getState, dispatch, location, match) => {
    const state = getState();
    const promises = [];
    const { sectionId } = match.params;
    const sectionLoaded = sectionId
      ? isEntityLoaded("textSections", sectionId, state)
      : false;

    if (sectionId && !sectionLoaded) {
      const sectionCall = sectionsAPI.show(sectionId);
      const { promise: two } = dispatch(
        request(sectionCall, requests.rSection)
      );
      promises.push(two);
    }
    return Promise.all(promises);
  };

  static mapStateToProps = (state, ownProps) => {
    return {
      section: grab(
        "textSections",
        ownProps.match.params.sectionId,
        state.entityStore
      )
    };
  };

  static propTypes = {
    section: PropTypes.object,
    route: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    annotations: PropTypes.array,
    resources: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
    text: PropTypes.object.isRequired,
    appearance: PropTypes.object.isRequired
  };

  componentDidMount() {
    if (this.props.match.params.sectionId) {
      this.fetchAnnotations(this.props);
      this.fetchResources(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    // Fetch resources and annotations on section change.
    if (
      nextProps.match.params.sectionId !== this.props.match.params.sectionId
    ) {
      this.fetchAnnotations(nextProps);
      this.fetchResources(nextProps);
    }
    // Check if we need to fetch more resources when annotations change
    if (nextProps.annotations !== this.props.annotations) {
      if (
        this.hasMissingResources(nextProps.annotations, nextProps.resources)
      ) {
        this.fetchResources(nextProps);
      }
    }
  }

  componentWillUnmount() {
    this.props.dispatch(flush(requests.rSection));
  }

  fetchAnnotations(props) {
    const annotationsCall = annotationsAPI.forSection(
      props.match.params.sectionId
    );
    props.dispatch(request(annotationsCall, requests.rAnnotations));
  }

  fetchResources(props) {
    const resourcesCall = resourcesAPI.forSection(props.match.params.sectionId);
    props.dispatch(request(resourcesCall, requests.rSectionResources));
  }

  hasMissingResources(annotations, resourcesIn) {
    if (!annotations) return;
    const resources = resourcesIn || [];
    const needed = uniq(
      annotations.map(a => a.attributes.resourceId).filter(id => id !== null)
    );
    const has = resources.map(r => r.id);
    const diff = difference(needed, has);
    if (diff.length > 0) return true;
    return false;
  }

  render() {
    if (!this.props.section || !this.props.text) return null;
    const project = this.props.text.relationships.project;
    const projectImage = project
      ? project.attributes.avatarStyles.mediumSquare
      : null;
    const projectDesc = project ? project.attributes.description : null;

    return (
      <div>
        <HeadContent
          title={`Manifold Scholarship | ${this.props.text.attributes
            .title} | ${this.props.section.attributes.name}`}
          image={projectImage}
          description={projectDesc}
        />
        {renderRoutes(this.props.route.routes)}
        <Section.Text {...this.props} />
        <div>
          <Section.NextSection
            sectionsMap={this.props.text.attributes.sectionsMap}
            textId={this.props.text.id}
            sectionId={this.props.section.id}
            typography={this.props.appearance.typography}
          />
          <Section.Pagination
            textId={this.props.text.id}
            sectionId={this.props.section.id}
            spine={this.props.text.attributes.spine}
          />
        </div>
        <Section.Label text={this.props.text} />
      </div>
    );
  }
}

export default connectAndFetch(SectionContainer);

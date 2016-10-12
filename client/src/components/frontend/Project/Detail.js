import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import fakeData from 'helpers/fakeData';
import get from 'lodash/get';

import {
  Event,
  Project,
  TextList,
  ResourceList,
  ResourceCollectionList
} from 'components/frontend';


class Detail extends Component {

  static displayName = "Project.Detail"

  static propTypes = {
    project: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      activity: fakeData.events,
      categories: [],
      texts: [],
      meta: []
    };

    this.renderActivity = this.renderActivity.bind(this);
    this.renderTexts = this.renderTexts.bind(this);
    this.renderResources = this.renderResources.bind(this);
    this.renderMeta = this.renderMeta.bind(this);
    this.renderHero = this.renderHero.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderActivity() {
    if (!this.state.activity.length > 0) return null;
    return (
      <section>
        <div className="container">
          <header className="section-heading">
            <h4 className="title">
              <i className="manicon manicon-pulse"></i>
              {'Recent Activity'}
            </h4>
            <div className="section-heading-utility-right">
              <Link to={`#`} className="button-primary">
                See all Activity
              </Link>
            </div>
          </header>
          <Event.List events={this.state.activity} />
        </div>
      </section>
    );
  }

  renderMeta() {
    if (!this.state.meta.length > 0) return null;
    return (
      <section>
        <div className="container">
          <header className="section-heading">
            <h4 className="title">
              <i className="manicon manicon-tag"></i>
              {'Metadata'}
            </h4>
          </header>
          <Project.Meta data={this.state.meta} />
        </div>
      </section>
    );
  }

  renderTexts() {
    const project = this.props.project;
    const texts = get(this.props, 'project.relationships.texts');
    if (!texts || texts.length === 0) return null;
    return (
      <section>
        <div className="container">
          <header className="section-heading">
            <h4 className="title">
              <i className="manicon manicon-books-stack"></i>
              {'Texts'}
            </h4>
          </header>
          <TextList.Published text={project.relationships.publishedText} />
          <TextList.Grouped
            excludeIds={[project.relationships.publishedText.id]}
            categories={project.relationships.textCategories}
            texts={project.relationships.texts}
          />
        </div>
      </section>
    );
  }

  renderResources() {
    // Currently returns static resource section
    // Logic to check for existing resources should be here

    // Note that this returns a div with two sections, but in production
    // Should return either a group of collections or a group of resources,
    // and not both
    const project = this.props.project;
    return (
      <div>
        <section className="bg-neutral05">
          <div className="container">
            <header className="section-heading">
              <h4 className="title">
                <i className="manicon manicon-cube-shine"></i>
                {'Resources'}
              </h4>
            </header>
            <ResourceCollectionList.Grid projectId={project.id} />
            <ResourceList.Totals count={2028} projectId={project.id} />
          </div>
        </section>
        <section className="bg-neutral05">
          <div className="container">
            <header className="section-heading">
              <h4 className="title">
                <i className="manicon manicon-cube-shine"></i>
                {'Resources'}
              </h4>
            </header>
            <ResourceList.Thumbnails resources={fakeData.resources} projectId={project.id} />
            <ResourceList.Totals count={2028} projectId={project.id} />
          </div>
        </section>
      </div>
    );
  }

  renderHero() {
    /*
     NB: To use a hero, include the
     class name hero-image in addition to the background image required
     */
    return (
      <section className="project-detail-hero hero-image"
        style={{ backgroundImage: 'url(/static/placeholder/background-waterfall.jpg)' }}
      >
        <div className="container">
          <Project.Hero
            project={this.props.project}
          />
        </div>
      </section>
    );
  }

  renderNavButtons() {
    return (<div>some nav buttons</div>);
  }

  render() {
    if (!this.props.project) return null;
    return (
      <div>
        {this.renderHero()}
        {this.renderActivity()}
        {this.renderTexts()}
        {this.renderResources()}
        {this.renderNavButtons()}
      </div>
    );
  }


}

export default Detail;

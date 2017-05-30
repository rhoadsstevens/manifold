import React, { PureComponent, PropTypes } from 'react';
import { Form as FormContainer } from 'containers/backend';
import { Form } from 'components/backend';
import split from 'lodash/split';
import capitalize from 'lodash/capitalize';
import config from '../../../config';
import humps from 'humps';

export default class FormMakers extends PureComponent {

  static displayName = "Metadata.Form";

  static propTypes = {
  };

  get attributes() {
    return this.props.model.attributes;
  }

  get metadataProperties() {
    if (!this.attributes || !this.attributes.metadataProperties) return [];
    return this.attributes.metadataProperties.sort();
  }

  get config() {
    return config.app.locale.metadata;
  }

  configFor(prop) {
    return this.config[prop];
  }

  labelize(prop) {
    return humps.decamelize(prop, { separator: " " });
  }

  configValueFor(prop, key) {
    const propConfig = this.configFor(prop);
    if (!propConfig || !propConfig.placeholder) return null;
    return propConfig[key];
  }

  placeholderFor(prop) {
    return this.configValueFor(prop, 'placeholder');
  }

  instructionsFor(prop) {
    return this.configValueFor(prop, 'instructions');
  }

  render() {
    return (
      <section>
        <FormContainer.Form
          {...this.props}
        >
          {this.metadataProperties.map((prop, i) => {
            const focus = i === 0 ? true : false;
            return (
              <Form.TextInput
                key={i}
                focusOnMount={focus}
                placeholder={this.placeholderFor(prop)}
                instructions={this.instructionsFor(prop)}
                label={this.labelize(prop)}
                name={`attributes[metadata][${prop}]`}
              />
            );
          })}
          <Form.Save
            text="Save Metadata"
          />
        </FormContainer.Form>
      </section>
    );
  }

}

//
// <Form.TextInput
//   label="ISBN"
//   name="attributes[metadata][isbn]"
//   placeholder="Enter ISBN Number"
// />
// <Form.TextInput
// label="Publisher"
// name="attributes[metadata][publisher]"
// placeholder="Enter Publisher Name"
//   />
//   <Form.TextInput
// label="Place of Publication"
// name="attributes[metadata][placeOfPublication]"
// placeholder="Enter Place of Publication"
//   />
//   <Form.Date
// label="Publication Date"
// name="attributes[publicationDate]"
//   />
//   <Form.TextInput
// label="Digital Object Identifier (DOI)"
// name="attributes[metadata][doi]"
// placeholder="Enter DOI"
//   />
//   <Form.TextInput
// label="Series"
// name="attributes[metadata][series]"
// placeholder="Enter Series Name"
//   />
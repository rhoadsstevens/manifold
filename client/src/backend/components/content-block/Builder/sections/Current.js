import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Header from "./parts/Header";
import resolver from "../../helpers/resolver";
import Block from "../Block";
import { Droppable } from "react-beautiful-dnd";
import classNames from "classnames";

export default class ProjectContentSectionsCurrent extends PureComponent {
  static displayName = "Project.Content.Sections.Current";

  static propTypes = {
    currentBlocks: PropTypes.array.isRequired,
    entityCallbacks: PropTypes.object.isRequired,
    activeDraggableType: PropTypes.string
  };

  static defaultProps = {
    currentBlocks: []
  };

  get topBlocks() {
    return this.props.currentBlocks.filter(
      block => resolver.typeToBlockComponent(block.attributes.type).top === true
    );
  }

  get bottomBlocks() {
    return this.props.currentBlocks.filter(
      block => resolver.typeToBlockComponent(block.attributes.type).top !== true
    );
  }

  get zones() {
    return {
      top: { blocks: this.topBlocks, visible: false },
      bottom: { blocks: this.bottomBlocks, visible: true }
    };
  }

  bindEntityCallbacks(block) {
    const callbacks = this.props.entityCallbacks;
    /* eslint-disable no-param-reassign */
    return Object.keys(callbacks).reduce((memo, key) => {
      memo[key] = () => callbacks[key](block);
      return memo;
    }, {});
    /* eslint-enable no-param-reassign */
  }

  showDropzone(zone) {
    if (this.props.activeDraggableType === zone.toUpperCase()) return true;
    return this.zones[zone].visible && this.zones[zone].blocks.length === 0;
  }

  render() {
    return (
      <div className="form-section">
        <Header subtitle="Layout:" />
        {Object.keys(this.zones).map(zone => (
          <Droppable
            key={zone}
            type={zone.toUpperCase()}
            droppableId={`current-${zone}`}
          >
            {provided => (
              <div
                ref={provided.innerRef}
                className={classNames("content-block-list full-width", {
                  "content-block-list--show-dropzone": this.showDropzone(zone)
                })}
              >
                {this.zones[zone].blocks.map((block, index) => (
                  <Block
                    entityCallbacks={this.bindEntityCallbacks(block)}
                    currentBlocks={this.props.currentBlocks}
                    key={block.id}
                    context="current"
                    entity={block}
                    type={block.attributes.type}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    );
  }
}

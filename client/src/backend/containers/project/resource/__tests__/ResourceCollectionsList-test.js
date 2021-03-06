import React from "react";
import renderer from "react-test-renderer";
import { ProjectResourceCollectionsListContainer } from "../ResourceCollectionsList";
import { wrapWithRouter } from "test/helpers/routing";
import { Provider } from "react-redux";
import build from "test/fixtures/build";

describe("Backend Project Resource CollectionList Container", () => {
  const store = build.store();
  const project = build.entity.project("1");
  const collectionA = build.entity.resourceCollection("2");
  const collectionB = build.entity.resourceCollection("3");
  collectionA.relationships.project = project;
  collectionB.relationships.project = project;

  const component = renderer.create(
    wrapWithRouter(
      <Provider store={store}>
        <ProjectResourceCollectionsListContainer
          project={project}
          resourceCollections={[collectionA, collectionB]}
          resourceCollectionsMeta={{
            pagination: build.pagination()
          }}
          dispatch={store.dispatch}
        />
      </Provider>
    )
  );

  it("renders correctly", () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("doesn't render to null", () => {
    let tree = component.toJSON();
    expect(tree).not.toBe(null);
  });
});

/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { render } from "@testing-library/react";
import ScanInputFormPage from "../pages/scan-input-form";
import { MockedProvider } from "@apollo/client/testing";
import renderer from "react-test-renderer";

describe("Scan Input Form Page: ", () => {
  it("+ renders without crashing", () => {
    render(
      <MockedProvider addTypename={false}>
        <ScanInputFormPage />
      </MockedProvider>
    );
  });

  it("+ matches snapshot", () => {
    const renderedComponent = renderer
      .create(
        <MockedProvider addTypename={false}>
          <ScanInputFormPage />
        </MockedProvider>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});

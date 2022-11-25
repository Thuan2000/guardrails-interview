/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { render } from "@testing-library/react";
import AllScansPage from "../pages/all-scans";
import { MockedProvider } from "@apollo/client/testing";
import renderer from "react-test-renderer";

import {
  scanResultOne,
  scanResultTwo,
  mockScanResultsRequest,
} from "../__mocks__/scan-results.mock";

describe("All Scans Page: ", () => {
  it("+ renders without crashing", () => {
    render(
      <MockedProvider mocks={[mockScanResultsRequest]} addTypename={false}>
        <AllScansPage scans={[scanResultOne, scanResultTwo]} />
      </MockedProvider>
    );
  });

  it("+ matches snapshot", () => {
    const renderedComponent = renderer
      .create(
        <MockedProvider mocks={[mockScanResultsRequest]} addTypename={false}>
          <AllScansPage scans={[scanResultOne, scanResultTwo]} />
        </MockedProvider>
      )
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});

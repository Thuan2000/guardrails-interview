/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { ESeverity, EStatus, ScanResult } from "@generated/index";
import { getScansQuery } from "@graphql/queries";

export const scanResultOne: ScanResult = {
  id: 9,
  repositoryName: "TEST #3",
  status: EStatus.Failure,
  findings: [
    {
      id: 19,
      type: "adsf",
      ruleId: "01",
      location: {
        path: "./test/file/path",
        begin: {
          line: 1,
        },
      },
      metadata: {
        description: "ADSF",
        severity: ESeverity.High,
      },
    },
  ],
  queuedAt: "2022-09-05T17:00:00.000Z",
  scanningAt: "2022-09-08T17:00:00.000Z",
  finishedAt: "2022-09-09T17:00:00.000Z",
};

export const scanResultTwo: ScanResult = {
  id: 7,
  repositoryName: "Repo #33",
  status: EStatus.InProgress,
  findings: [
    {
      id: 22,
      type: "branch",
      ruleId: "002",
      location: {
        path: "./test/path",
        begin: {
          line: 1,
        },
      },
      metadata: {
        description: "adf",
        severity: ESeverity.High,
      },
    },
    {
      id: 21,
      type: "branch",
      ruleId: "001",
      location: {
        path: "./test/path/1",
        begin: {
          line: 1,
        },
      },
      metadata: {
        description: "Desc",
        severity: ESeverity.Low,
      },
    },
  ],
  queuedAt: "2022-09-09T17:00:00.000Z",
  scanningAt: "2022-09-09T17:00:00.000Z",
  finishedAt: "1970-01-01T00:00:00.000Z",
};

export const mockScanResultsRequest = {
  request: {
    query: getScansQuery,
  },
  result: {
    data: {
      getScans: [{ ...scanResultOne }, { ...scanResultTwo }],
    },
  },
};

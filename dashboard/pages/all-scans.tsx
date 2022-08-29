/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import React from "react";
import { GetServerSideProps } from "next";

import PageLayout from "@components/PageLayout";

import { TReactComponentWithLayout } from "constants/common-types";

import { getScansQuery } from "@graphql/queries";
import { generateApollo } from "@lib/withApollo";
import { EStatus, ScanResult } from "@generated/index";
import { Icon, Label, Table } from "semantic-ui-react";

interface IAllScansPageProps {
  scans: ScanResult[];
}

type TimeLabel = {
  [k in EStatus]: string;
};

const timeLabel: TimeLabel = {
  Queued: "Queue at",
  InProgress: "Scanning at",
  Success: "Finished at",
  Failure: "",
};

function getKey(status: EStatus) {
  if (status === EStatus.Queued) return "queuedAt";
  if (status === EStatus.InProgress) return "scanningAt";
  if (status === EStatus.Success) return "finishedAt";
}

function getTimestampLabel(scanResult: ScanResult) {
  return `${timeLabel[scanResult.status]} : ${
    scanResult[getKey(scanResult.status)]
  }`;
}

const AllScansPage: React.FC<IAllScansPageProps> = ({ scans }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Repository Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Findings</Table.HeaderCell>
          <Table.HeaderCell>Time</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {scans.map((s) => {
          return (
            <Table.Row>
              <Table.Cell>{s.repositoryName}</Table.Cell>
              <Table.Cell>{s.status}</Table.Cell>
              <Table.Cell>
                <Label color="yellow">
                  <Icon name="warning sign" /> {s.findings.length}
                </Label>
              </Table.Cell>
              <Table.Cell>{getTimestampLabel(s)}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apollo = generateApollo({}, ctx);
  const { data } = await apollo.query({
    query: getScansQuery,
  });

  return {
    props: {
      scans: data.getScans,
    },
  };
};

(AllScansPage as TReactComponentWithLayout).Layout = PageLayout;

export default AllScansPage;
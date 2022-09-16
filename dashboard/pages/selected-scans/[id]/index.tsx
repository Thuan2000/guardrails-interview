/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import React from "react";
import PageLayout from "@components/PageLayout";

import { TReactComponentWithLayout } from "@constants/common-types";
import { getScanQuery } from "@graphql/queries";
import { generateApollo } from "@lib/withApollo";
import { GetServerSideProps } from "next";
import { ScanResult, useDeleteScanMutation } from "@generated/index";
import {
  Button,
  Container,
  Header,
  Icon,
  List,
  Segment,
} from "semantic-ui-react";
import { getTimestampLabel, getTimestampValue } from "common-utils/util.function";
import { useRouter } from "next/router";
import { ROUTES } from "@constants/routes.constant";

interface ISelectedScansPageProps {
  scan: ScanResult;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const apollo = generateApollo({}, ctx, true);
  const { data } = await apollo.query({
    query: getScanQuery,
    variables: { id: parseInt(query.id as string) },
  });
  const scan = data.getScan;

  return { props: { scan } };
};

const SelectedScansPage: React.FC<ISelectedScansPageProps> = ({ scan }) => {
  const router = useRouter();
  const [deleteScan] = useDeleteScanMutation();

  function handleEditClick(id: number) {
    router.push(`${ROUTES.selectedScansPage}/${id}/edit`);
  }

  function handleDeleteClick(id: number) {
    deleteScan({ variables: { id } });
    router.replace(`${ROUTES.allScansPage}`);
  }

  return (
    <Container>
      <Button color="blue" onClick={() => handleEditClick(scan.id)}>
        <Icon name="edit" />
        Edit
      </Button>
      <Button color="red" onClick={() => handleDeleteClick(scan.id)}>
        <Icon name="trash" /> Delete
      </Button>
      <Segment padded>
        <Header textAlign="center">Repository Detail</Header>
        <List.Item>
          <strong>Repository Name: </strong>
          <span>{scan.repositoryName}</span>
        </List.Item>
        <List.Item>
          <strong>Status: </strong>
          <span>{scan.status}</span>
        </List.Item>
        <List.Item>
          <strong>{getTimestampLabel(scan)}: </strong>
          <span>{getTimestampValue(scan)}</span>
        </List.Item>
        <List.Item>
          <strong>Findings: </strong>
          {scan.findings.map((f) => {
            const {
              id,
              type,
              ruleId,
              location: { path, begin, end },
              metadata: { description, severity },
            } = f;
            return (
              <Segment key={id} padded>
                <List as="ul">
                  <List.Item as={"li"}>
                    <strong>Type: </strong>
                    <span>{type}</span>
                  </List.Item>
                  <List.Item>
                    <strong>Rule ID: </strong>
                    <span>{ruleId}</span>
                  </List.Item>
                  <List.Item>
                    <strong>Location</strong>

                    <Container style={{ paddingLeft: 8 }}>
                      <strong>Path: </strong>
                      <span>{path}</span>
                    </Container>
                    <Container style={{ paddingLeft: 8 }}>
                      <strong>Begin: </strong>
                      <span>{begin.line}</span>
                    </Container>
                    <Container style={{ paddingLeft: 8 }}>
                      <strong>End: </strong>
                      <span>{end.line}</span>
                    </Container>
                  </List.Item>
                  <List.Item>
                    <strong>Vulnerability Detail</strong>
                    <Container style={{ paddingLeft: 8 }}>
                      <strong>Severity Type: </strong>
                      <span>{severity}</span>
                    </Container>
                    <Container style={{ paddingLeft: 8 }}>
                      <strong>Description: </strong>
                      <span>{description}</span>
                    </Container>
                  </List.Item>
                </List>
              </Segment>
            );
          })}
        </List.Item>
      </Segment>
    </Container>
  );
};

(SelectedScansPage as TReactComponentWithLayout).Layout = PageLayout;

export default SelectedScansPage;
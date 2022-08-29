/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import React from "react";
import SecurityScanForm from "@components/contents/security-scan-form";
import PageLayout from "@components/PageLayout";

import { TReactComponentWithLayout } from "constants/common-types";
import { Container, Header } from "semantic-ui-react";

interface IScanInputFormPageProps {}

const ScanInputFormPage: React.FC<IScanInputFormPageProps> = () => {
  return (
    <Container>
      <Header textAlign="center" as="h3">
        Add Your Security Scan Result By Filling This Form
      </Header>
      <SecurityScanForm />
    </Container>
  );
};

(ScanInputFormPage as TReactComponentWithLayout).Layout = PageLayout;

export default ScanInputFormPage;
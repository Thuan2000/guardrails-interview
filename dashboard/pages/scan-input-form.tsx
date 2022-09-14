/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import React from "react";
import SecurityScanForm from "@components/security-scan-form";
import PageLayout from "@components/PageLayout";
import { placeholderSecurityScanFormProps } from '@constants/placeholder-props';

import { TReactComponentWithLayout } from "constants/common-types";
import { Container, Header } from "semantic-ui-react";
import SecurityScanFormContainer from "@containers/SecurityScanForm.container";

interface IScanInputFormPageProps {}

const ScanInputFormPage: React.FC<IScanInputFormPageProps> = () => {
  return (
    <Container>
      <Header textAlign="center" as="h3">
        Add Your Security Scan Result By Filling This Form
      </Header>
      <SecurityScanFormContainer>
        {/* Placeholder values */}
        <SecurityScanForm {...placeholderSecurityScanFormProps}/>
      </SecurityScanFormContainer>
    </Container>
  );
};

(ScanInputFormPage as TReactComponentWithLayout).Layout = PageLayout;

export default ScanInputFormPage;
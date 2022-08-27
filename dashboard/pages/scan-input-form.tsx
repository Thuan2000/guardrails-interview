/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import React from "react";
import SecurityScanForm from "@components/contents/security-scan-form";
import PageLayout from "@components/PageLayout";

import { TReactComponentWithLayout } from "constants/common-types";

interface IScanInputFormPageProps {}

const ScanInputFormPage: React.FC<IScanInputFormPageProps> = () => {
  return <SecurityScanForm />;
};

(ScanInputFormPage as TReactComponentWithLayout).Layout = PageLayout;

export default ScanInputFormPage;
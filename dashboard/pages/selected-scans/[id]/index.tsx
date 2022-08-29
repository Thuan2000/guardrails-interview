/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import React from "react";
import PageLayout from "@components/PageLayout";

import { TReactComponentWithLayout } from "constants/common-types";

interface ISelectedScansPageProps {}

const SelectedScansPage: React.FC<ISelectedScansPageProps> = () => {
  return <div>
    Selected Scans Form
  </div>;
};

(SelectedScansPage as TReactComponentWithLayout).Layout = PageLayout;

export default SelectedScansPage;
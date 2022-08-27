/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import React from "react";
import PageLayout from "@components/PageLayout";

import { TReactComponentWithLayout } from "constants/common-types";

interface IAllScansPageProps {}

const AllScansPage: React.FC<IAllScansPageProps> = () => {
  return <div>
    All Scans Form
  </div>;
};

(AllScansPage as TReactComponentWithLayout).Layout = PageLayout;

export default AllScansPage;
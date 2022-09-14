/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import React from "react";

import PageLayout from "@components/PageLayout";

import { TReactComponentWithLayout } from "constants/common-types";
import { ScanResult } from "@generated/index";
import AllScansTable from "@components/all-scans/AllScansTable";
import AllScansContainer from "@containers/AllScansContainer";

interface IAllScansPageProps {
  scans: ScanResult[] | null;
}

const AllScansPage: React.FC<IAllScansPageProps> = ({ scans = [] }) => {
  return (
    <AllScansContainer>
      <AllScansTable
        scans={scans}
        handleDeleteBtnClick={() => {}}
        handleEditBtnClick={() => {}}
      />
    </AllScansContainer>
  );
};

(AllScansPage as TReactComponentWithLayout).Layout = PageLayout;

export default AllScansPage;
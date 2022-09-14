/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

 import React from "react";

 import PageLayout from "@components/PageLayout";
 
 import { TReactComponentWithLayout } from "constants/common-types";
 import { ScanResult } from "@generated/index";
 import AllScansTable, {
   IAllScansTableProps,
 } from "@components/all-scans/AllScansTable";
 import AllScansContainer from "@containers/AllScans.container";
 
 interface IAllScansPageProps {
   scans: ScanResult[] | null;
 }
 const placeholderAllScansTableProps: IAllScansTableProps = {
   scans: [],
   handleDeleteBtnClick: () => {},
   handleEditBtnClick: () => {},
 };
 
 const AllScansPage: React.FC<IAllScansPageProps> = ({ scans = [] }) => {
   return (
     <AllScansContainer>
       {/* Placeholder values */}
       <AllScansTable {...placeholderAllScansTableProps} />
     </AllScansContainer>
   );
 };
 
 (AllScansPage as TReactComponentWithLayout).Layout = PageLayout;
 
 export default AllScansPage;
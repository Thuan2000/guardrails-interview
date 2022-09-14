/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

 import { EStatus } from '@generated/index';
 import { ISecurityScanFormProps } from "@components/security-scan-form";
 import { IAllScansTableProps } from '@components/all-scans/AllScansTable';
 
 export const placeholderSecurityScanFormProps: ISecurityScanFormProps = {
   initValue: null,
   methods: null,
   status: EStatus.Queued,
   scan: null,
   updateScan: null,
   scanning: false,
   updating: false,
   handleInputChange: () => {},
   onSubmit: null,
   getError: () => {},
 };
 
 /* Placeholder values */
 export const placeholderAllScansTableProps: IAllScansTableProps = {
   scans: [],
   handleDeleteBtnClick: () => {},
   handleEditBtnClick: () => {},
 };
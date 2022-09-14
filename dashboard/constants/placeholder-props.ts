/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { EStatus } from "@generated/index";
import { IAllScansTableProps } from "@components/all-scans/AllScansTable";
import { ISSFContext } from "@containers/SecurityScanForm.container";

export const placeholderSSFContext: ISSFContext = {
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
  handleAddFinding: () => {},
  handleDeleteFinding: () => {},
};

/* Placeholder values */
export const placeholderAllScansTableProps: IAllScansTableProps = {
  scans: [],
  handleDeleteBtnClick: () => {},
  handleEditBtnClick: () => {},
};

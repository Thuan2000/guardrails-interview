/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { ScanResult } from "@generated/index";
import React from "react";
import { Table } from "semantic-ui-react";
import NoScanRecord from "./NoScanRecord";
import ScanRow from "./ScanRow";

export interface IAllScansTableProps {
  scans: ScanResult[];
  handleDeleteBtnClick: (id: number) => void;
  handleEditBtnClick: (id: number) => void;
}

const AllScansTable: React.FC<IAllScansTableProps> = ({
  scans,
  handleDeleteBtnClick,
  handleEditBtnClick,
}) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Repository Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Findings</Table.HeaderCell>
          <Table.HeaderCell>Time</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {!!scans.length ? (
          scans.map((s) => (
            <ScanRow
              key={s.id + "scan-row"}
              scan={s}
              handleEditBtnClick={handleEditBtnClick}
              handleDeleteBtnClick={handleDeleteBtnClick}
            />
          ))
        ) : (
          <NoScanRecord />
        )}
      </Table.Body>
    </Table>
  );
};
export default AllScansTable;

import { ScanResult } from "@generated/index";
import React, { useState } from "react";
import { Table } from "semantic-ui-react";
import NoScanRecord from "./NoScanRecord";
import ScanRow from "./ScanRow";

interface IAllScansTableProps {
  scans: ScanResult[];
}

const AllScansTable: React.FC<IAllScansTableProps> = ({ scans }) => {
  const [_, setIsRefresh] = useState(false);
  const [stateScans, setStateScans] = useState(scans || []);

  function handleDeletedScan(id: number) {
    setStateScans(scans.filter((s) => s.id !== id));
  }

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
        {!!stateScans.length ? (
          stateScans.map((s) => (
            <ScanRow
              key={s.id + "scan-row"}
              scan={s}
              onDeletedScan={handleDeletedScan}
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
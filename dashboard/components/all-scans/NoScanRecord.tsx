import React from "react";
import { Table } from "semantic-ui-react";

interface INoScanRecordProps {}

const NoScanRecord: React.FC<INoScanRecordProps> = ({ ...props }) => {
  return (
    <Table.Row>
      <Table.Cell width={"1"} className="no-border" textAlign="center" />
      <Table.Cell width={"1"} className="no-border" textAlign="center" />
      <Table.Cell width={"1"} className="no-border" textAlign="center">
        There's still no scans recorded on database
      </Table.Cell>
      <Table.Cell width={"1"} className="no-border" textAlign="center" />
      <Table.Cell width={"1"} className="no-border" textAlign="center" />
    </Table.Row>
  );
};
export default NoScanRecord;
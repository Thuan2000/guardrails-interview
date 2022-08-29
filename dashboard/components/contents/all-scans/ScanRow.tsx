import { ROUTES } from "@constants/routes.constant";
import {
  DeleteScanMutation,
  EStatus,
  ScanResult,
  useDeleteScanMutation,
} from "@generated/index";
import { IconEdit, IconTrash } from "@tabler/icons";
import {
  fireDeleteConfirmationModal,
  fireSuccessSwalModal,
} from "functions/swal.function";
import { getTimestampLabel, getTimestampValue } from "functions/util.function";
import Link from "next/link";
import React from "react";
import { Button, Icon, Label, Table } from "semantic-ui-react";

interface IScanRowProps {
  scan: ScanResult;
  onDeletedScan: (id: number) => void;
}

function getTimestampLabel(scanResult: ScanResult) {
  const label = timeLabel[scanResult.status];
  const date = scanResult[getKey(scanResult.status)];
  return `${label} : ${getFormattedDatetime(date)} (${getAgoTime(date)} ago)`;
}

const ScanRow: React.FC<IScanRowProps> = ({ scan, onDeletedScan }) => {
  const [deleteScan] = useDeleteScanMutation({
    onCompleted: handleDeleteComplete,
  });
  const router = useRouter();

  async function handleDeleteComplete(resp: DeleteScanMutation) {
    if (resp.deleteScan.success) {
      const data = await fireSuccessSwalModal(
        "Success Delete Scan",
        "The scan result is successfully deleted"
      );

      // fire onDeletedScan function
      if (data) onDeletedScan(resp.deleteScan.id);
    }
  }

  async function handleEditClick(id: number) {
    router.push(`${ROUTES.selectedScansPage}/${id}/edit`);
  }

  async function handleDeleteClick(id: number) {
    const { isConfirmed } = await fireDeleteConfirmationModal(
      "Delete Scan Result",
      "Are you sure want to delete scan result?"
    );

    if (isConfirmed) deleteScan({ variables: { id } });
  }

  return (
    <Table.Row>
      <Table.Cell>
        <Link href={`${ROUTES.selectedScansPage}/${scan.id}`}>
          {scan.repositoryName}
        </Link>
      </Table.Cell>
      <Table.Cell>{scan.status}</Table.Cell>
      <Table.Cell>
        <Label color="yellow">
          <Icon name="warning sign" /> {scan.findings.length}
        </Label>
      </Table.Cell>
      <Table.Cell>{`${getTimestampLabel(scan)} : ${getTimestampValue(
        scan
      )}`}</Table.Cell>
      <Table.Cell textAlign="center">
        <Button color="blue" onClick={() => handleEditClick(scan.id)}>
          <IconEdit name="edit" /> Edit
        </Button>
        <Button color="red" onClick={() => handleDeleteClick(scan.id)}>
          <IconTrash name="trash" /> Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};
export default ScanRow;
/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { ROUTES } from "@constants/routes.constant";
import { ScanResult } from "@generated/index";
import { IconEdit, IconTrash } from "@tabler/icons";
import { getTimestampLabel, getTimestampValue } from "@common-utils/util.function";
import Link from "next/link";
import React from "react";
import { Button, Icon, Label, Table } from "semantic-ui-react";

interface IScanRowProps {
  scan: ScanResult;
  handleDeleteBtnClick: (id: number) => void;
  handleEditBtnClick: (id: number) => void;
}

const ScanRow: React.FC<IScanRowProps> = ({
  scan,
  handleEditBtnClick,
  handleDeleteBtnClick,
}) => {
  return (
    <Table.Row>
      <Table.Cell>
        <Link href={`${ROUTES.selectedScansPage}/${scan.id}`}>
          {scan.repositoryName}
        </Link>
      </Table.Cell>
      <Table.Cell>{`${scan.status} - ${scan.id}`}</Table.Cell>
      <Table.Cell>
        <Label color="yellow">
          <Icon name="warning sign" /> {scan.findings.length}
        </Label>
      </Table.Cell>
      <Table.Cell>{`${getTimestampLabel(scan)} : ${getTimestampValue(
        scan
      )}`}</Table.Cell>
      <Table.Cell textAlign="center">
        <Button color="blue" onClick={() => handleEditBtnClick(scan.id)}>
          <IconEdit name="edit" /> Edit
        </Button>
        <Button color="red" onClick={() => handleDeleteBtnClick(scan.id)}>
          <IconTrash name="trash" /> Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};
export default React.memo(ScanRow);

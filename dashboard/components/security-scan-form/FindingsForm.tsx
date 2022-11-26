/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { IconPlus } from "@tabler/icons";
import React, { useContext } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button, Divider, Header, Segment } from "semantic-ui-react";
import { Text } from "@mantine/core";
import FindingInput from "./FindingInput";
import { SecurityScanFormContext } from "@containers/SecurityScanForm.container";

interface IFindingsFormProps {}

const FindingsForm: React.FC<IFindingsFormProps> = ({ ...props }) => {
  const SSFC = useContext(SecurityScanFormContext);
  const { handleAddFinding, handleDeleteFinding, fields } = SSFC;

  return (
    <>
      <Header as={"h4"}>Findings Input</Header>
      <Text color="dimmed" mt="md">* You need at least 1 findings to submit the scan result</Text>
      <Segment>
        {fields.map((f, idx) => {
          return (
            <div key={f.id}>
              <FindingInput onDeleteFinding={handleDeleteFinding} idx={idx} />
              <Divider />
            </div>
          );
        })}
        <Button type="button" onClick={handleAddFinding}>
          <IconPlus /> Add Finding
        </Button>
      </Segment>
    </>
  );
};
export default FindingsForm;

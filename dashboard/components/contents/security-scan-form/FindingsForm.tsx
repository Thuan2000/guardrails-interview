import { IconPlus } from "@tabler/icons";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button, Divider, Header, Segment } from "semantic-ui-react";
import FindingForm from "./FindingForm";
import {
  IFindingInput,
  ISecurityScanFormValue,
} from "./SecurityScanFormSchema";

interface IFindingsFormProps {}

const findingDefaultValue: IFindingInput = {
  type: "",
  ruleId: "",
  path: "",
  begin: null,
  end: null,
  description: "",
  severityType: null,
};

const FindingsForm: React.FC<IFindingsFormProps> = ({ ...props }) => {
  const { trigger } = useFormContext<ISecurityScanFormValue>();
  const { fields, append, remove } = useFieldArray<ISecurityScanFormValue>({
    name: "findings",
  });

  async function handleAddFinding() {
    const d = await trigger("findings");
    // First finding form not yet added
    if (!d && fields.length >= 1) return;
    append(findingDefaultValue);
  }

  function handleDeleteFinding(idx: number) {
    remove(idx);
  }

  return (
    <>
      <Header as={"h4"}>Findings Input</Header>
      <Segment>
        {fields.map((f, idx) => {
          return (
            <div key={f.id}>
              <FindingForm onDeleteFinding={handleDeleteFinding} idx={idx} />
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
import { ESeverity } from "@generated/index";
import { IconTrash } from "@tabler/icons";
import { toTitleCase } from "functions/util.function";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import {
  Grid,
  Segment,
  Form,
  DropdownItemProps,
  Header,
  Button,
  Divider,
} from "semantic-ui-react";
import { ISecurityScanFormValue } from "./SecurityScanFormSchema";

interface IFindingFormProps {
  idx: number;
  onDeleteFinding: (idx: number) => void;
}

const severityOptions: DropdownItemProps[] = Object.values(ESeverity).map(
  (s) => ({ text: toTitleCase(s), value: s })
);

const FindingForm: React.FC<IFindingFormProps> = ({ idx, onDeleteFinding }) => {
  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext<ISecurityScanFormValue>();

  useEffect(() => {
    register(`findings.${idx}.type`);
    register(`findings.${idx}.ruleId`);
    register(`findings.${idx}.path`);
    register(`findings.${idx}.begin`);
    register(`findings.${idx}.end`);
    register(`findings.${idx}.description`);
    register(`findings.${idx}.severityType`);
  }, []);

  function handleInputChange(key, value) {
    setValue(key, value);
    trigger(key);
  }

  function getError(key: string) {
    return errors?.findings?.[idx]?.[key]?.message;
  }

  return (
    <>
      <Header as="h5">Finding {idx + 1}</Header>
      <Segment>
        <Form.Input
          autoFocus
          onChange={(e) =>
            handleInputChange(`findings.${idx}.type`, e.target.value)
          }
          label={"Type"}
          error={getError("type")}
        />
        <Form.Input
          onChange={(e) =>
            handleInputChange(`findings.${idx}.ruleId`, e.target.value)
          }
          label={"Rule"}
          error={getError("ruleId")}
        />
        <Form.Input
          onChange={(e) =>
            handleInputChange(`findings.${idx}.path`, e.target.value)
          }
          label={"File Path"}
          error={getError("path")}
        />
        <Form.Input
          onChange={(e) =>
            handleInputChange(`findings.${idx}.begin`, e.target.value)
          }
          label={"Severity Begin"}
          error={getError("begin")}
        />
        <Form.Input
          onChange={(e) =>
            handleInputChange(`findings.${idx}.end`, e.target.value)
          }
          label={"Severity End"}
          error={getError("end")}
        />
        <Form.Input
          onChange={(e) =>
            handleInputChange(`findings.${idx}.description`, e.target.value)
          }
          label={"Description"}
          error={getError("description")}
        />
        <Form.Select
          onChange={(e, { value }) => {
            handleInputChange(`findings.${idx}.severityType`, value);
          }}
          options={severityOptions}
          label={"Severity Type"}
          error={getError("severityType")}
        />
        <Divider />
        <Button onClick={() => onDeleteFinding(idx)} type="button" fluid>
          <IconTrash />
          Delete
        </Button>
      </Segment>
    </>
  );
};
export default FindingForm;
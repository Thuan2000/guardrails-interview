/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { ESeverity } from "@generated/index";
import { IconTrash } from "@tabler/icons";
import { toTitleCase } from "@common-utils/util.function";
import React, { useContext, useEffect } from "react";
import {
  Segment,
  Form,
  DropdownItemProps,
  Header,
  Button,
  Divider,
} from "semantic-ui-react";
import NumberInput from "@components/NumberInput";
import {
  ISSFContext,
  SecurityScanFormContext,
} from "@containers/SecurityScanForm.container";

interface IFindingFormProps {
  idx: number;
  onDeleteFinding: (idx: number) => void;
}

const severityOptions: DropdownItemProps[] = Object.values(ESeverity).map(
  (s) => ({ text: toTitleCase(s), value: s })
);

const FindingInput: React.FC<IFindingFormProps> = ({
  idx,
  onDeleteFinding,
}) => {
  const SSFC = useContext(SecurityScanFormContext);
  const { methods, handleInputChange } = SSFC as ISSFContext;
  const {
    register,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = methods;

  useEffect(() => {
    register(`findings.${idx}.type` as `findings.${number}.type`);
    register(`findings.${idx}.ruleId` as `findings.${number}.type`);
    register(`findings.${idx}.path` as `findings.${number}.type`);
    register(`findings.${idx}.begin` as `findings.${number}.type`);
    register(`findings.${idx}.end` as `findings.${number}.type`);
    register(`findings.${idx}.description` as `findings.${number}.type`);
    register(`findings.${idx}.severityType` as `findings.${number}.type`);
  }, []);

  function __getError(key: string) {
    return errors?.findings?.[idx]?.[key]?.message;
  }

  function __getValue(key) {
    return getValues(`findings.${idx}.${key}` as any);
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
          placeholder={"Type"}
          value={__getValue("type")}
          error={__getError("type")}
        />
        <Form.Input
          onChange={(e) =>
            handleInputChange(`findings.${idx}.ruleId`, e.target.value)
          }
          label={"Rule"}
          placeholder={"Rule"}
          value={__getValue("ruleId")}
          error={__getError("ruleId")}
        />
        <Form.Input
          onChange={(e) =>
            handleInputChange(`findings.${idx}.path`, e.target.value)
          }
          label={"File Path"}
          placeholder={"File Path"}
          value={__getValue("path")}
          error={__getError("path")}
        />
        <NumberInput
          onValueChange={(e) =>
            handleInputChange(`findings.${idx}.begin`, e.floatValue)
          }
          label={"Line Begin"}
          placeholder={"Line Begin"}
          value={__getValue("begin")}
          error={__getError("begin")}
        />
        <NumberInput
          label={"Line End"}
          placeholder={"Line End"}
          onValueChange={(e) => {
            handleInputChange(`findings.${idx}.end`, e.floatValue);
          }}
          value={__getValue("end")}
          error={__getError("end")}
        />
        <Form.Input
          onChange={(e) =>
            handleInputChange(`findings.${idx}.description`, e.target.value)
          }
          label={"Description"}
          value={__getValue("description")}
          error={__getError("description")}
        />
        <Form.Select
          onChange={(e, { value }) => {
            handleInputChange(`findings.${idx}.severityType`, value);
          }}
          options={severityOptions}
          placeholder={"Severity Type"}
          label={"Severity Type"}
          value={__getValue("severityType")}
          error={__getError("severityType")}
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
export default FindingInput;
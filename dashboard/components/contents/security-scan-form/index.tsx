/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */
 
import React, { useEffect } from "react";
import {
  Button,
  Divider,
  DropdownItemProps,
  Form,
  Grid,
  Segment,
} from "semantic-ui-react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DatetimeInput from "@components/DatetimeInput";

import {
  ScanResultInput,
  useInputNewScanMutation,
  InputNewScanMutation,
  FindingInput,
  EStatus,
} from "../../../generated/index";
import { fireSuccessSwalModal } from "functions/swal.function";
import FindingsForm from "./FindingsForm";
import {
  ISecurityScanFormValue,
  securityScanSchema,
} from "./SecurityScanFormSchema";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { toTitleCase } from "functions/util.function";

interface ISecurityScanFormProps {}

const statusOptions: DropdownItemProps[] = Object.values(EStatus).map((s) => ({
  text: toTitleCase(s),
  value: s,
}));

const SecurityScanForm: React.FC<ISecurityScanFormProps> = ({ ...props }) => {
  const methods = useForm<ISecurityScanFormValue>({
    resolver: yupResolver(securityScanSchema),
  });
  const {
    handleSubmit,
    trigger,
    setValue,
    getValues,
    register,
    formState: { errors },
  } = methods;

  useEffect(() => {
    register("repositoryName");
  }, []);

  const [scan] = useInputNewScanMutation({ onCompleted: handleComplete });

  /**
   * Reset all field value
   */
  function resetForm() {
    setValue("repositoryName", "");
    setValue("status", null);
    setValue("queuedAt", null);
    setValue("scanningAt", null);
    setValue("finishedAt", null);
    setValue("findings", []);
  }

  /**
   * Handling if mutation is fired and is completed
   * @param resp From api
   */
  async function handleComplete(resp: InputNewScanMutation) {
    if (resp.inputNewScan.success) {
      fireSuccessSwalModal(
        "Success Add Security Scan",
        "Security scan added successfully, and you can see it on security scan list page"
      );

      // resetForm();
    }
  }

  /**
   * To handle on submit
   * @param value FormValue
   */
  async function onSubmit(value: ISecurityScanFormValue) {
    const findings = value.findings.map((f) => {
      const finding: FindingInput = {
        type: f.type,
        ruleId: f.ruleId,
        locationBeginLine: f.begin,
        locationEndLine: f.end,
        locationPath: f.path,
        metaDescription: f.description,
        metaSeverity: f.severityType,
      };

      return finding;
    });

    const input: ScanResultInput = {
      repositoryName: value.repositoryName,
      findings,
      status: value.status,
      finishedAt: new Date(value.finishedAt).getTime(),
      queuedAt: new Date(value.queuedAt).getTime(),
      scanningAt: new Date(value.scanningAt).getTime(),
    };

    await scan({
      variables: {
        input,
      },
    });
  }

  /**
   * Because {...register(e)} not working on this semantic ui component
   * we customize the value like this
   * @param e HTML Change event
   */
  function handleInputChange(key, value: any) {
    setValue(key, value);
    trigger(key);
  }

  function getError(key) {
    return errors?.[key]?.message;
  }

  return (
    <div style={{ width: "868px", margin: "auto" }}>
      <Segment>
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input
              label="Repository Name"
              placeholder="SDConnect"
              value={getValues("repositoryName") || ""}
              onChange={(e) =>
                handleInputChange("repositoryName", e.target.value)
              }
              error={errors?.repositoryName?.message}
            />
            <Form.Select
              label="Status"
              placeholder="Status"
              options={statusOptions}
              onChange={(_, { value }) => {
                handleInputChange("status", value);
              }}
              error={errors?.status?.message}
            />
            <FindingsForm />
            <div style={{ padding: "10px 0 10px 0" }}>
              <Grid>
                <SemanticDatepicker
                  showToday
                  maxDate={new Date()}
                  label={"Queue Date"}
                  onChange={(e, { value }) => {
                    handleInputChange(`queuedAt`, value);
                  }}
                  error={getError("queuedAt")}
                />
                <SemanticDatepicker
                  showToday
                  maxDate={new Date()}
                  label={"Scanning Date"}
                  onChange={(e, { value }) => {
                    handleInputChange(`scanningAt`, value);
                  }}
                  error={getError("scanningAt")}
                />
                <SemanticDatepicker
                  showToday
                  maxDate={new Date()}
                  label={"Finished Date"}
                  onChange={(e, { value }) => {
                    handleInputChange(`finishedAt`, value);
                  }}
                  error={getError("finishedAt")}
                />
                <DatetimeInput label="Queue Date" />
              </Grid>
            </div>
            <Divider />
            <Button color="blue">Submit</Button>
          </Form>
        </FormProvider>
      </Segment>
    </div>
  );
};
export default SecurityScanForm;

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
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  ScanResultInput,
  useInputNewScanMutation,
  InputNewScanMutation,
  FindingInput,
  EStatus,
  ScanResult,
  useUpdateScanMutation,
  UpdateScanMutation,
} from "../../../generated/index";
import { fireSuccessSwalModal } from "functions/swal.function";
import FindingsForm from "./FindingsForm";
import {
  ISecurityScanFormValue,
  securityScanSchema,
} from "./SecurityScanFormSchema";
import { toTitleCase } from "functions/util.function";
import DatetimeInput from "@components/DatetimeInput";
import { generateScanFormDefaultValue } from "./SecurityFindingFormFunctions";
import { useRouter } from "next/router";
import { ROUTES } from "@constants/routes.constant";

interface ISecurityScanFormProps {
  initValue?: ScanResult;
}


const statusOptions: DropdownItemProps[] = Object.values(EStatus).map((s) => ({
  text: toTitleCase(s),
  value: s,
}));

const timeInputPointRef: { [status in EStatus]: number } = {
  Failure: 3,
  Queued: 1,
  InProgress: 2,
  Success: 3,
};

function getDatetimeInputRefPoint(status: EStatus) {
  return timeInputPointRef[status];
}

const SecurityScanForm: React.FC<ISecurityScanFormProps> = ({ initValue }) => {
  const router = useRouter();
  const methods = useForm<ISecurityScanFormValue>({
    resolver: yupResolver(securityScanSchema),
    defaultValues: generateScanFormDefaultValue(initValue),
  });
  const {
    handleSubmit,
    trigger,
    setValue,
    getValues,
    register,
    control,
    formState: { errors },
  } = methods;

  const status = useWatch<ISecurityScanFormValue>({
    control,
    name: "status",
  }) as EStatus;

  useEffect(() => {
    register("repositoryName");
  }, []);

  const [scan, { loading: scanning }] = useInputNewScanMutation({
    onCompleted: handleCreateComplete,
  });
  const [updateScan, { loading: updating }] = useUpdateScanMutation({
    onCompleted: handleUpdateComplete,
  });

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

  async function handleUpdateComplete(resp: UpdateScanMutation) {
    if (resp.updateScan.success) {
      await fireSuccessSwalModal(
        "Success Update Security Scan",
        "Security scan updated successfully, and you can see it on security scan list page"
      );

      resetForm();
      router.replace(ROUTES.allScansPage);
    }
  }

  /**
   * Handling if mutation is fired and is completed
   * @param resp From api
   */
  async function handleCreateComplete(resp: InputNewScanMutation) {
    if (resp.inputNewScan.success) {
      await fireSuccessSwalModal(
        "Success Add Security Scan",
        "Security scan added successfully, and you can see it on security scan list page"
      );

      resetForm();
      router.replace(ROUTES.allScansPage);
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

    if (!!initValue) {
      updateScan({
        variables: {
          id: parseInt(initValue.id + ""),
          input,
        },
      });
    } else
      scan({
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
              value={getValues("status") || ""}
              error={errors?.status?.message}
            />
            <FindingsForm />
            {!!status && (
              <div style={{ padding: "10px 0 10px 0" }}>
                <Grid>
                  {timeInputPointRef[status] >= 1 && (
                    <DatetimeInput
                      error={getError("queuedAt")}
                      label="Queue Date"
                      value={getValues("queuedAt")}
                      onChange={(e) =>
                        handleInputChange("queuedAt", new Date(e.toString()))
                      }
                    />
                  )}
                  {timeInputPointRef[status] >= 2 && (
                    <DatetimeInput
                      error={getError("scanningAt")}
                      label="Scanning Date"
                      value={getValues("scanningAt")}
                      onChange={(e) =>
                        handleInputChange("scanningAt", new Date(e.toString()))
                      }
                    />
                  )}
                  {timeInputPointRef[status] >= 3 && (
                    <DatetimeInput
                      error={getError("finishedAt")}
                      label="Finished Date"
                      value={getValues("finishedAt")}
                      onChange={(e) =>
                        handleInputChange("finishedAt", new Date(e.toString()))
                      }
                    />
                  )}
                </Grid>
              </div>
            )}
            <Divider />
            <Button loading={scanning || updating} color="blue">
              {!!initValue ? "Update" : "Submit"}
            </Button>
          </Form>
        </FormProvider>
      </Segment>
    </div>
  );
};
export default SecurityScanForm;

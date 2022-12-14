/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import { ESeverity, EStatus } from "@generated/index";
import * as yup from "yup";

export interface IFindingInput {
  type: string;
  ruleId: string;
  path: string;
  begin: number;
  end: number;
  description: string;
  severityType: ESeverity;
}

export interface ISecurityScanFormValue {
  repositoryName: string;
  status: EStatus;
  findings: IFindingInput[];
  queuedAt: Date;
  scanningAt: Date;
  finishedAt: Date;
}

export const securityScanFormSchema = yup.object({
  repositoryName: yup.string().required("Please fill repository name input"),
  status: yup.string().required("Please select status"),
  findings: yup
    .array()
    .of(
      yup.object({
        type: yup.string().required("Please fill Type input"),
        ruleId: yup.string().required("Please fill RuleId input"),
        path: yup.string().required("Please fill Path input"),
        begin: yup
          .number()
          .required("Please fill Begin input")
          .typeError("Begin value must be a number")
          .nullable(),
        end: yup
          .number()
          .min(yup.ref("begin"), "End line must be larger than begin line")
          .required("Please fill End input")
          .typeError("End value must be a number")
          .nullable(),
        description: yup.string().required("Please fill Description input"),
        severityType: yup
          .string()
          .required("Please specify Severity Type input")
          .nullable(),
      })
    )
    .min(1, "Please add finding"),
  queuedAt: yup.string().required("Please input Queued At").nullable(),
  scanningAt: yup
    .string()
    .when("status", {
      is: EStatus.InProgress,
      then: yup.string().required("Please input Scanning At").nullable(),
    })
    .nullable(),
  finishedAt: yup
    .string()
    .when("status", {
      is: EStatus.Success,
      then: yup.string().required("Please input Finished At").nullable(),
    })
    .when("status", {
      is: EStatus.Failure,
      then: yup.string().required("Please input Finished At").nullable(),
    })
    .nullable(),
});

export const findingDefaultValue: IFindingInput = {
  type: "",
  ruleId: "",
  path: "",
  begin: null,
  end: null,
  description: "",
  severityType: null,
};

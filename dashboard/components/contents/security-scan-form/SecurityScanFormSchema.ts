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

export const securityScanSchema = yup.object({
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
  scanningAt: yup.string().required("Please input Scanning At").nullable(),
  finishedAt: yup.string().required("Please input Finished At").nullable(),
});
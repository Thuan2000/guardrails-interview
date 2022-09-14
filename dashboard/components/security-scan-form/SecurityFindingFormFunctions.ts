import { ScanResult } from "@generated/index";
import {
  IFindingInput,
  ISecurityScanFormValue,
} from "./SecurityScanFormSchema";

export function generateScanFormDefaultValue(initValue: ScanResult) {
  if (!initValue) return {};
  const defaultFindingsValue = initValue.findings.map((f) => {
    const finding: IFindingInput = {
      ruleId: f.ruleId,
      type: f.type,
      path: f.location.path,
      begin: f.location.begin.line,
      end: f.location.end.line,
      description: f.metadata.description,
      severityType: f.metadata.severity,
    };

    return finding;
  });

  const defaultValue: ISecurityScanFormValue = {
    repositoryName: initValue.repositoryName,
    status: initValue.status,
    queuedAt: initValue.queuedAt,
    scanningAt: initValue.scanningAt,
    finishedAt: initValue.finishedAt,
    findings: defaultFindingsValue,
  };

  return defaultValue;
}
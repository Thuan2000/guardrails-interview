import { EStatus, ScanResult } from "@generated/index";
import { format, formatDistance } from "date-fns";

export function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
export function getFormattedDatetime(date: Date) {
  return format(new Date(date), "MMMM dd, yyyy H:mma");
}

export function getAgoTime(date: Date) {
  return formatDistance(new Date(date), new Date(), { includeSeconds: true });
}

export function removeTypename({ typename, ...obj }: any) {
  return obj;
}

export function removeTypenameFromArray(array: any[]) {
  return array.map(({ typename, ...obj }) => obj);
}

type TimeLabel = {
  [k in EStatus]: string;
};
const timeLabel: TimeLabel = {
  Queued: "Queue at",
  InProgress: "Scanning at",
  Success: "Finished at",
  Failure: "Finished at",
};

function getKey(status: EStatus) {
  if (status === EStatus.Queued) return "queuedAt";
  if (status === EStatus.InProgress) return "scanningAt";
  if (status === EStatus.Success || status === EStatus.Failure)
    return "finishedAt";
}
export function getTimestampValue(scanResult: ScanResult) {
  const date = scanResult[getKey(scanResult.status)];

  return `${getFormattedDatetime(date)} (${getAgoTime(date)} ago)`;
}

export function getTimestampLabel(scanResult: ScanResult) {
  const label = timeLabel[scanResult.status];
  return label;
}
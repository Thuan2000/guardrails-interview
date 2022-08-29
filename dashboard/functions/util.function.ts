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
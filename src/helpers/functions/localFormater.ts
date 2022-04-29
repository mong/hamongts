import { formatLocale } from "d3-format";

const formatDefinition = {
  decimal: ",",
  thousands: "\u202f",
  grouping: [3],
};

export const customFormat = formatLocale(formatDefinition).format;

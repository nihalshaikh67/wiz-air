import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
dayjs.extend(relativeTime);

export const formatEpochToDate = (epoch: number, format = "DD MMM") => {
  return dayjs.unix(epoch).format(format);
};

console.log(formatEpochToDate(Date.now()), "new");

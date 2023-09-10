import { nextSunday, previousSunday } from "date-fns";

const getSundaysOf = (nWeeks) => {
  if (typeof nWeeks != "number") return;
  const result = [];
  const isTodaySunday = () => new Date().getDay() == 0;

  for (let i = 0; i < nWeeks; i++) {
    if (i == 0) {
      if (isTodaySunday()) {
        result.push(new Date());
      } else {
        result.push(previousSunday(new Date(Date.now())));
      }
    } else {
      result.push(nextSunday(new Date(result[i - 1])));
    }
  }
  return result.map((x) => x.toLocaleDateString());
};

export default getSundaysOf;

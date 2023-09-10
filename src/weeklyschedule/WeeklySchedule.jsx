import { useState } from "react";
import { daysOfWeeks } from "./utils";
import Sundays from "./Sundays";
import DayOfWeek from "./DayOfWeek";

const WeeklySchedule = () => {
  const [weekyOf, setWeekOf] = useState("");

  return (
    <>
      <h1>Create a Schedule</h1>
      <form>
        <div>
          <label htmlFor="weekOf">Week of</label>
          <select
            value={weekyOf}
            id="weekOf"
            onChange={(e) => setWeekOf(e.target.value)}
          >
            <Sundays />
          </select>
        </div>
        <div>
          {daysOfWeeks.map((day) => (
            <DayOfWeek key={day} day={day} />
          ))}
        </div>
      </form>
    </>
  );
};

export default WeeklySchedule;

import getSundaysOf from "./getSundaysOf";

const WeeklySchedule = () => {
  return (
    <>
      <h1>Create a Schedule</h1>
      <form>
        <div>
          <label htmlFor="week-of">Week of</label>
          <select id="week-of">
            {getSundaysOf(5).map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </div>

        {/* only show the rest of the form after the user has selected a week. */}

        <div>
          <p>Sunday</p>
          <div>
            <p>Morning</p>
            <label htmlFor="sunday-morning-meal">Meal</label>
            <input id="sunday-morning-meal" type="text" />
            <label htmlFor="sunday-morning-meal-recipe">Recipe</label>
            <input id="sunday-morning-meal-recipe" type="text" />
            <label htmlFor="sunday-morning-meal-st-time">
              When will you start?
            </label>
            <input id="sunday-morning-meal-st-time" type="time" />
          </div>

          <div>
            <p>AFternoon</p>
            <label htmlFor="sunday-afternoon-meal">Meal</label>
            <input id="sunday-afternoon-meal" type="text" />
            <label htmlFor="sunday-afternoon-meal-recipe">Recipe</label>
            <input id="sunday-afternoon-meal-recipe" type="text" />
            <label htmlFor="sunday-afternoon-meal-st-time">
              When will you start?
            </label>
            <input id="sunday-afternoon-meal-st-time" type="time" />
          </div>

          <div>
            <p>Evening</p>
            <label htmlFor="sunday-evening-meal">Meal</label>
            <input id="sunday-evening-meal" type="text" />
            <label htmlFor="sunday-evening-meal-recipe">Recipe</label>
            <input id="sunday-evening-meal-recipe" type="text" />
            <label htmlFor="sunday-evening-meal-st-time">
              When will you start?
            </label>
            <input id="sunday-evening-meal-st-time" type="time" />
          </div>
        </div>
      </form>
    </>
  );
};

export default WeeklySchedule;

import Period from "./Period";

const DayOfWeek = ({ day }) => {
  const periodsOfDay = ["Morning", "Afternoon", "Evening"];

  return (
    <>
      <h4>{day}</h4>
      <div>
        {periodsOfDay.map((period) => (
          <Period key={day + period} period={period} day={day} />
        ))}
      </div>
    </>
  );
};

export default DayOfWeek;

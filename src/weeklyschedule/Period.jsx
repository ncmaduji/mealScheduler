const Period = ({ period, day }) => {
  return (
    <>
      <p>{period}</p>
      <label htmlFor={`${day}-${period}-meal`}>Meal</label>
      <input id={`${day}-${period}-meal`} type="text" />
      <label htmlFor={`${day}-${period}-recipe`}>Recipe</label>
      <input id={`${day}-${period}-recipe`} type="text" />
      <label htmlFor={`${day}-${period}-st-time`}>When will you start?</label>
      <input id={`${day}-${period}-st-time`} type="time" />
    </>
  );
};

export default Period;

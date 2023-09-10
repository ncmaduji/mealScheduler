import getSundaysOf from "./getSundaysOf";

const Sundays = () =>
  getSundaysOf(5)?.map((sunday) => (
    <option value={sunday} key={sunday}>
      {sunday}
    </option>
  )) ?? "";

export default Sundays;

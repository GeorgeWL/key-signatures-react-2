import { CircleOfFifthsKeys } from "../../helpers/getScales";
import CircleKeyButtons from "./CircleKeyButtons";
const CircleBody = () => (
  <ul>
    {CircleOfFifthsKeys.map((item, index) => (
      <li key={index + "-note"}>
        <CircleKeyButtons
          item={item}
          onClick={(x, y) => console.log("No Handler", { x, y })}
        />
      </li>
    ))}
  </ul>
);
export default CircleBody;

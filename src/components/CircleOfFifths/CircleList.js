import { CircleOfFifthsKeys } from "../../helpers/getScales";
import CircleKeyButtons from "./CircleKeyButtons";
import styles from "../../styles/circleList.module.scss";
const CircleBody = () => (
  <ul className={styles.list}>
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

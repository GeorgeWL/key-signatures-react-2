import { CircleOfFifthsKeys } from "../../data/circleOfFifths";
import styles from "../../styles/circleList.module.scss";
import CircleKeyButtons from "./CircleKeyButtons";
const CircleList = () => (
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
export default CircleList;

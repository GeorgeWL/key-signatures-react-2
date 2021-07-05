import { CircleOfFifthsKeys } from "../../data/circleOfFifths";
import CircleKeyButtons from "./CircleKeyButtons";
import styles from "../../styles/circleList.module.scss";
import { useLocation } from "react-router";
import classNames from "classnames";
const CircleBody = () => {
  let location = useLocation();
  console.log({
    pathname: location.pathname,
    isMatch: location.pathname.includes("chord")
  });

  return (
    <ul
      className={classNames(styles.list, {
        [styles.listBackground]: location.pathname.includes("chord")
      })}
    >
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
};
export default CircleBody;

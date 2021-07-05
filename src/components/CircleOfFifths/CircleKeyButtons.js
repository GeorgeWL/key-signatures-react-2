import { Link } from "react-router-dom";
import styles from "../../styles/key.module.scss";

const CircleKeyButton = ({ item }) => {
  const { major, minor } = item;
  const encodedMajorLabel = encodeURIComponent(major.label);
  const encodedMinorLabel = encodeURIComponent(minor.label);
  const path = `/chord?major=${encodedMajorLabel}&minor=${encodedMinorLabel}`;
  return (
    <Link className={styles.keyButton} to={path}>
      <div className={styles.keyColumn}>
        <CircleKeyButtonItem item={item} itemKey="major" />
      </div>
      <div className={styles.keyColumn}>
        <CircleKeyButtonItem item={item} itemKey="minor" />
      </div>
    </Link>
  );
};
const CircleKeyButtonItem = ({ item, itemKey }) => {
  const label = item[itemKey].label;
  return (
    <div key={"key-" + itemKey + "-chord" + label}>
      <h3>{label}</h3>
    </div>
  );
};
export default CircleKeyButton;

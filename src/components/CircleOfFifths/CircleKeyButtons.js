import { Link } from "react-router-dom";
import styles from "../../styles/key.module.scss";

const CircleKeyButton = ({ item }) => {
  const route = encodeURIComponent(`${item.major.label}|${item.minor.label}`);
  return (
    <Link className={styles.keyButton} to={route}>
      <div className={styles.keyColumn}>
        <CircleKeyButtonItem item={item} itemKey="major" />
      </div>
      <hr />
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

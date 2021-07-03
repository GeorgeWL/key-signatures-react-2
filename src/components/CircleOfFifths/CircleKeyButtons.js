import classNames from "classnames";
import styles from "../../styles/key.module.scss";
const getKeyValuesFromObject = (object) => {
  return Object.entries(object).map((entry) => {
    const [label, value] = entry;
    return { label, value };
  });
};
const CircleKeyButton = ({ item, onClick }) => {
  return (
    <button className={styles.keyButton}>
      <div className={styles.keyColumn}>
        <CircleKeyButtonItem item={item} itemKey="major" />
      </div>
      <div className={styles.keyColumn}>
        <CircleKeyButtonItem item={item} itemKey="minor" />
      </div>
    </button>
  );
};
const CircleKeyButtonItem = ({ item, itemKey }) =>
  getKeyValuesFromObject(item[itemKey]).map((entry) => {
    const { label, value } = entry;
    return (
      <div key={"key-" + itemKey + "-chord" + label}>
        <h2>
          <small>{label}</small>
        </h2>
        <div className={styles.keyboard}>
          {value.map((keyName) => (
            <span
              className={classNames(styles.key, {
                [styles.keyBlack]:
                  keyName.includes("b") || keyName.includes("#")
              })}
              key={"key-" + keyName + "-chord" + label}
            >
              {keyName}
            </span>
          ))}
        </div>
      </div>
    );
  });

export default CircleKeyButton;

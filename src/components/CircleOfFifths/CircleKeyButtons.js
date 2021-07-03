import classNames from "classnames";

const getKeyValuesFromObject = (object) => {
  return Object.entries(object).map((entry) => {
    const [label, value] = entry;
    return { label, value };
  });
};
const CircleKeyButton = ({ item, onClick }) => {
  return (
    <>
      <button>
        <CircleKeyButtonItem item={item} itemKey="major" />
      </button>
      <button>
        <CircleKeyButtonItem item={item} itemKey="minor" />
      </button>
    </>
  );
};
const CircleKeyButtonItem = ({ item, itemKey }) =>
  getKeyValuesFromObject(item[itemKey]).map((entry) => {
    const { label, value } = entry;
    return (
      <>
        <h2>
          <small>{label}</small>
        </h2>
        {value.map((keyName) => (
          <span
            className={classNames("key", {
              "key-black": keyName.includes("b") || keyName.includes("#")
            })}
            key={"key-" + keyName + "-chord" + label}
          >
            {keyName}
          </span>
        ))}
        {item.equivalents && item.equivalents[itemKey] && (
          <>
            <hr />
            <CircleKeyButtonItem item={item.equivalents} itemKey={itemKey} />
          </>
        )}
      </>
    );
  });

export default CircleKeyButton;

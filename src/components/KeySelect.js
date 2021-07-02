import { getAllMajorScales, getAllMinorScales } from "../helpers/getScales";
const majorScales = getAllMajorScales();
const minorScales = getAllMinorScales();
export const KeySelect = ({ type }) => {
  return (
    <div>
      {Object.entries(getScales(type)).map((item) =>
        JSON.stringify(Object.keys(item[1]))
      )}
    </div>
  );
};

const getScales = (type) => {
  switch (type) {
    case "minor":
      return majorScales;
    case "major":
      return minorScales;
    case "all":
    default:
      return { majorScales, minorScales };
  }
};
export default KeySelect;

import { useParams } from "react-router";
import { getAllMajorScales, getAllMinorScales } from "../helpers/getScales";
const majorScales = getAllMajorScales();
const minorScales = getAllMinorScales();
export const KeySelect = () => {
  const { type } = useParams();
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

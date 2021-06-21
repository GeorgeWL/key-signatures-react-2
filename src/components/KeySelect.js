import { useParams } from "react-router";
import { getAllMajorScales, getAllMinorScales } from "../helpers/getScales";

export const KeySelect = () => {
  const { type } = useParams();
  return <div>{getChildren(type)}</div>;
};
const getChildren = (type) => {
  switch (type) {
    case "minor":
      return <>{JSON.stringify(getAllMajorScales())}</>;
    case "major":
      return <>{JSON.stringify(getAllMinorScales())}</>;
    case "all":
    default:
      return type;
  }
};
export default KeySelect;

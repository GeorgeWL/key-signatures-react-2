import { useLocation } from "react-router";
import qs from "query-string";
const ChordCard = () => {
  let location = useLocation();
  let search = qs.parse(location.search, "&");
  return <div>{JSON.stringify(search)}</div>;
};
export default ChordCard;

import { useLocation } from "react-router";
import qs from "query-string";
import styles from "../styles/chordCard.module.scss";
const ChordCard = () => {
  let location = useLocation();
  let search = qs.parse(location.search, "&");
  return (
    <div className={styles.container}>
      <div className={styles.modal}>{JSON.stringify(search)}</div>
    </div>
  );
};
export default ChordCard;

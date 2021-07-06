import { useLocation } from "react-router";
import qs from "query-string";
import styles from "../styles/chordCard.module.scss";
import KeyboardKeys from "./KeySignature/KeyboardKeys";
import { getScaleNotes } from "../helpers/scaleHelpers";
const ChordCard = () => {
  let location = useLocation();
  let search = qs.parse(location.search, "&");
  const keyNotes = getScaleNotes(search.major);
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <KeyboardKeys activeNotes={keyNotes} />
        <div className={styles.buttons}>
          <button>Show Notes</button>
          <button>Show Key Signature</button>
        </div>
      </div>
    </div>
  );
};
export default ChordCard;

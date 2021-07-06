import classNames from "classnames";
import * as Tone from "tone";
import styles from "../../styles/key.module.scss";
const notes = [
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
  "A",
  "A#/Bb",
  "B"
];

const KeyboardKeys = ({ activeNotes = [] }) => {
  const synth = new Tone.PolySynth().toDestination();
  // set the attributes across all the voices using 'set'
  synth.set({ detune: -1200 });
  return (
    <div>
      {notes.map((noteName) => {
        const [note] = noteName.split("/");
        const isBlackKey = note.includes("#");
        return (
          <button
            onClick={() => synth.triggerAttackRelease(note + "4", 1)}
            className={classNames(
              styles.key,
              isBlackKey && styles.keyBlack,
              activeNotes.includes(noteName) && styles.keyActive
            )}
          >
            {noteName}
          </button>
        );
      })}
    </div>
  );
};
export default KeyboardKeys;

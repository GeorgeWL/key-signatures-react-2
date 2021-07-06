import { getMajorMinorNotes } from "../helpers/scaleHelpers";

export const CircleOfFifthsKeys = [
  getMajorMinorNotes("A major", "F# minor"),
  getMajorMinorNotes("E major", "C# minor"),
  getMajorMinorNotes(
    "B major",
    "G# minor",
    getMajorMinorNotes("Cb major", "Ab minor")
  ),
  getMajorMinorNotes(
    "Gb major",
    "Eb minor",
    getMajorMinorNotes("F# major", "D# minor")
  ),
  getMajorMinorNotes(
    "C# major",
    "A# minor",
    getMajorMinorNotes("Db major", "Bb minor")
  ),
  getMajorMinorNotes("Ab major", "F minor"),
  getMajorMinorNotes("Eb major", "C minor"),
  getMajorMinorNotes("Bb major", "G minor"),
  getMajorMinorNotes("F major", "D minor"),
  getMajorMinorNotes("C major", "A minor"),
  getMajorMinorNotes("G major", "E minor"),
  getMajorMinorNotes("D major", "B minor")
];

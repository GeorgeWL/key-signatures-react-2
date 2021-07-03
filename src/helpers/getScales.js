import Scale from "@tonaljs/scale";
export const getScaleNotes = (scaleName) => Scale.get(scaleName).notes;
export const getMajorMinorNotes = (major, minor, equivalents) => ({
  major: { [major ?? ""]: getScaleNotes(major) },
  minor: { [minor ?? ""]: getScaleNotes(major) },
  equivalents
});
const mapKeyNames = (keyNames) =>
  keyNames.map((name) => ({ [name]: getScaleNotes(name) }));
export function getAllMajorScales() {
  const keyNames = [
    "A major",
    "B major",
    "C major",
    "D major",
    "E major",
    "F major",
    "G major",
    "F# major",
    "Gb major",
    "Db major",
    "Ab major",
    "Eb major",
    "Bb major"
  ];
  return mapKeyNames(keyNames);
}
export function getAllMinorScales() {
  const keyNames = [
    "A minor",
    "E minor",
    "B minor",
    "F# minor",
    "C# minor",
    "G# minor",
    "D# minor",
    "Eb minor",
    "Bb minor",
    "F minor",
    "C minor",
    "G minor",
    "D minor"
  ];
  return mapKeyNames(keyNames);
}

export const CircleOfFifthsKeys = [
  getMajorMinorNotes("C major", "A minor"),
  getMajorMinorNotes("G major", "E minor"),
  getMajorMinorNotes("D major", "B minor"),
  getMajorMinorNotes("A major", "F# minor"),
  getMajorMinorNotes("E major", "C# minor"),
  getMajorMinorNotes(
    "Cb major",
    "Ab minor",
    getMajorMinorNotes("B major", "G# minor")
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
  getMajorMinorNotes("F major", "D minor")
];

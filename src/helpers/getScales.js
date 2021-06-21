import Scale from "@tonaljs/scale";
export const getScaleNotes = (scaleName) => Scale.get(scaleName).notes;
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

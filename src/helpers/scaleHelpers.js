import Scale from "@tonaljs/scale";
export const getScaleNotes = (scaleName) => Scale.get(scaleName).notes;
export const getMajorMinorNotes = (major, minor, equivalents) => ({
  major: { label: major ?? "", notes: getScaleNotes(major) },
  minor: { label: minor ?? "", notes: getScaleNotes(major).sort() },
  equivalents
});

export interface Note {
  pitchName: "C" | "C#" | "Db" | "D" | "D#" | "Eb" | "E" | "Fb" |
             "F" | "F#" | "Gb" | "G" | "G#" | "Ab" | "A" | "A#" | "Bb" | "B";
  degree: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
 
export interface Scale {
  key: Note['pitchName']; // 主調
  notes: Note[];          // 按主調排序的音階
}

export const flatNoteMap = {
  "C": 1,
  "D♭": 2,
  "D": 3,
  "E♭": 4,
  "E": 5,
  "F": 6,
  "G♭": 7,
  "G": 8,
  "A♭": 9,
  "A": 10,
  "B♭": 11,
  "B": 12
};

export const sharpNoteMap = {
  "C": 1,
  "C#": 2,
  "D": 3,
  "D#": 4,
  "E": 5,
  "F": 6,
  "F#": 7,
  "G": 8,
  "G#": 9,
  "A": 10,
  "A#": 11,
  "B": 12
};

export function AllNoteScaleGenerator(tonic: Note['pitchName']): Scale {
  const noteMap = tonic.includes('b') ? flatNoteMap : sharpNoteMap;

  // 获取主音的数值
  const tonicValue = noteMap[tonic as keyof typeof noteMap];
  if (tonicValue === undefined) {
    throw new Error(`无效的主音: ${tonic}`);
  }

  const notesInScale: Note[] = [];
  const noteEntries = Object.entries(noteMap);
  for (let i = 0; i < 12; i++) {
    const currentValue = (tonicValue + i - 1) % 12 + 1;
    const pitchName = noteEntries.find(([, value]) => value === currentValue)?.[0];
    if (pitchName) {
      notesInScale.push({
        pitchName: pitchName as Note['pitchName'],
        degree: (i + 1) as Note['degree'],
      });
    }
  }

  return {
    key: tonic,
    notes: notesInScale,
  };
}

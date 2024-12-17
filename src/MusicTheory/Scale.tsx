import { Note, Scale, flatNoteMap, sharpNoteMap } from "../Interface/Scale";

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
  
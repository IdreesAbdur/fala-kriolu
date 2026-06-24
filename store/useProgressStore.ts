// store/useProgressStore.ts
// This is GLOBAL APP STATE - not server state, not local state.
// It tracks things geuninely about the user's app-wide expeerience

import { create } from "zustand";

type ProgressState = {
  streakCount: number;
  completedChapterIds: string[];
  audioEnabled: boolean;

  // Encapsulation from Module 2: these aee the ONLY ways anything outside this file can change the values above

  incrementStreak: () => void;
  resetStreak: () => void;
  markChapterComplete: (chapterId: string) => void;
  toggleAudio: () => void;
};

export const useProgressStore = create<ProgressState>((set) => ({
  streakCount: 0,
  completedChapterIds: [],
  audioEnabled: true,

  incrementStreak: () =>
    set((state) => ({ streakCount: state.streakCount + 1 })),

  resetStreak: () => set({ streakCount: 0 }),

  markChapterComplete: (chapterId) =>
    //avoid duplicate entries if already completed
    set((state) => ({
      completedChapterIds: state.completedChapterIds.includes(chapterId)
        ? state.completedChapterIds
        : [...state.completedChapterIds, chapterId],
    })),

  toggleAudio: () => set((state) => ({ audioEnabled: !state.audioEnabled })),
}));

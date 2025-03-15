import { create } from "zustand";

export const useStore = create((set) => ({
  darkMode: true,
  setDarkMode: (darkMode) => set({ darkMode: darkMode }),
}));

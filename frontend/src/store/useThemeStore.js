import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Zetra-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("Zetra-theme", theme);
    set({ theme });
  },
}));
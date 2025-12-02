import { create } from "zustand";

const useThemeStore = create((set) => ({
    darkMode: false,
    toggleTheme: () =>
        set((state) => {
            const next = !state.darkMode;
            const root = document.documentElement;
            if (next) {
                root.classList.add("dark-mode");
            } else {
                root.classList.remove("dark-mode");
            }
            return { darkMode: next };
        }),
}));

export default useThemeStore;

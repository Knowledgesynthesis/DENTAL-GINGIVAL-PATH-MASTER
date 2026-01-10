import { create } from 'zustand'

interface ThemeState {
  isDark: boolean
  toggleTheme: () => void
  setTheme: (isDark: boolean) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: true, // Default to dark mode
  toggleTheme: () => set((state) => {
    const newIsDark = !state.isDark
    if (newIsDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
    return { isDark: newIsDark }
  }),
  setTheme: (isDark: boolean) => set(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    return { isDark }
  }),
}))

// Initialize theme from localStorage or system preference
export function initializeTheme() {
  const stored = localStorage.getItem('theme')
  if (stored) {
    const isDark = stored === 'dark'
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    return isDark
  }
  // Default to dark mode as per spec
  document.documentElement.classList.add('dark')
  return true
}

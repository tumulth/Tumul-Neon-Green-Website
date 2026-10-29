import React, { createContext, useContext } from 'react';

// The site is designed as fixed fields of black, paper and lime, so there is one theme.
// The provider stays so the older case-study components keep working unchanged.
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const value: ThemeContextType = { theme: 'light', toggleTheme: () => {}, setTheme: () => {} };
const ThemeContext = createContext<ThemeContextType>(value);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
);

export const useTheme = (): ThemeContextType => useContext(ThemeContext);

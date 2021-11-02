import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();
  const ToggleTheme = () => {
    setTheme(prevState => !prevState);
  }
  return ( 
    <ThemeContext.Provider value={{theme, ToggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
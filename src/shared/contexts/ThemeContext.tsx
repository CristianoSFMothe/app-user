import {createContext, useCallback, useContext, useMemo, useState} from "react";
import {DarkTheme, LightTheme} from "./../themes";
import {Box, ThemeProvider} from "@mui/material";

interface IThemContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

interface IAppThemeProviderProps {
  children: React.ReactNode
}

const ThemeContext = createContext({} as IThemContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({children}) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');
  
  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'dark' ? 'light' : 'dark');
  },[]);
  
  const theme = useMemo(() => {
    if (themeName === 'dark') return DarkTheme; 
    
    return LightTheme
  }, [themeName])
  
  return (
    <ThemeContext.Provider value={{themeName, toggleTheme}}>
      <ThemeProvider theme={theme}>
        <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
          {children}
        </Box>        
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
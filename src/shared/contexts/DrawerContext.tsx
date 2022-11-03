import React, {createContext, useCallback, useContext, useState} from 'react';

interface IAppThemeProviderProps {
  children: React.ReactNode
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOptions[];
  setDrawerOptions: (newDrawserOptions: IDrawerOptions[]) => void;
}

interface IDrawerOptions {
  icon: string,
  path: string,
  label: string,
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IAppThemeProviderProps> = ({children}) => {
  const [isDrawerOpen, setIsDrawerOpen] =
    useState(false);

  const [drawerOptions, setIsDrawerOptions] =
    useState<IDrawerOptions[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback(
    (newDrawserOptions: IDrawerOptions[]) => {
      setIsDrawerOptions(newDrawserOptions);
    }, []);

  return (
    <DrawerContext.Provider value={{
      isDrawerOpen, 
      drawerOptions, 
      toggleDrawerOpen,
      setDrawerOptions: handleSetDrawerOptions
    }}>
      {children}
    </DrawerContext.Provider>
  );
};
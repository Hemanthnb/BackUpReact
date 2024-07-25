import { createContext, useContext } from "react";
import ModeThemes from "../../shared/types/themes";

const defaultTheme: ModeThemes = {
    mode: 'light',
    setMode: () => {}
}

const ThemeContext = createContext<ModeThemes>(defaultTheme);

export const ThemeContextProvider= ThemeContext.Provider;

export const useTheme=()=>{
    return useContext(ThemeContext);
}
import { createContext, useContext } from "react"


type mode = {
    mode: string,
    setMode: (mode: string) => void
}

const defaultMode: mode = {
    mode: "light",
    setMode: () => { }
}

export const AdvanceContext = createContext<mode>(defaultMode);

export const AdvanceContextProvide = AdvanceContext.Provider;

export const useTheme = () => {
    return useContext(AdvanceContext);
}


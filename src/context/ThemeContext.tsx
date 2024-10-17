import React, { createContext } from "react";

type ThemeContextProviderProps = {
    children: React.ReactNode
}

const theme = {
    light: {
        main: 'white'
    },
    dark:{
        main: 'black'
    }
}
export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>
    {children}
    </ThemeContext.Provider>
}
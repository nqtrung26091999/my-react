import { useState, createContext } from "react"

const ThemeContext = createContext()

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark')

    const handleSetTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const value = {
        theme,
        handleSetTheme
    }

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }
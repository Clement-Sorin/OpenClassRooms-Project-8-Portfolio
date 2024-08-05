import { createContext, useState, useContext } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState("fr")
    const [theme, setTheme] = useState("light")

    const changeLanguage = (lang) => setLanguage(lang)
    const changeTheme = (theme) => setTheme(theme)

    return (
        <AppContext.Provider
            value={{ language, theme, changeLanguage, changeTheme }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)

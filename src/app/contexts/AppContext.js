import { createContext, useState, useContext, useEffect } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState("fr")
    const [theme, setTheme] = useState("light")

    const changeLanguage = (lang) => setLanguage(lang)

    const changeTheme = (newTheme) => {
        setTheme(newTheme)
    }

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    return (
        <AppContext.Provider
            value={{ language, theme, changeLanguage, changeTheme }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)

import { createContext, useState, useContext, useEffect } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState("fr")
    const [theme, setTheme] = useState("light")
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Language context

    const getInitialLanguage = () => {
        return (
            localStorage.getItem("language") ||
            navigator.language.split("_")[0] ||
            "fr"
        )
    }

    const changeLanguage = (lang) => {
        setLanguage(lang)
        localStorage.setItem("language", lang)
    }

    // Theme context

    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) return savedTheme
    }

    const changeTheme = (newTheme) => {
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    // Modal

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    // useEffect Application on Language and Theme

    useEffect(() => {
        // Language
        const initialLanguage = getInitialLanguage()
        setLanguage(initialLanguage === "fr" ? "fr" : "en")

        if (!localStorage.getItem("language")) {
            const userLanguage = navigator.language.split(/[_-]/)[0]
            userLanguage === "fr" ? setLanguage("fr") : setLanguage("en")
        }

        //Theme
        const initialTheme = getInitialTheme()
        setTheme(initialTheme)

        const prefersDarkTheme =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches

        if (!localStorage.getItem("theme")) {
            setTheme(prefersDarkTheme ? "dark" : "light")
        }
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
    }, [theme])

    return (
        <AppContext.Provider
            value={{
                language,
                theme,
                isModalOpen,
                changeLanguage,
                changeTheme,
                openModal,
                closeModal,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)

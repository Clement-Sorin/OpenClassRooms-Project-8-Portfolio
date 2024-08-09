import { useAppContext } from "../contexts/AppContext"

function Language() {
    const { language, changeLanguage, theme } = useAppContext()

    return (
        <div className="flex gap-2 items-center dark:text-dark-text">
            <button
                className={`${
                    language === "fr" ? "font-bold" : "font-normal"
                } ${
                    theme === "light"
                        ? "transition-hover-light"
                        : "transition-hover-dark"
                }`}
                onClick={() => changeLanguage("fr")}
            >
                FR
            </button>
            <p>/</p>
            <button
                className={`${
                    language === "en" ? "font-bold" : "font-normal"
                } ${
                    theme === "light"
                        ? "transition-hover-light"
                        : "transition-hover-dark"
                }`}
                onClick={() => changeLanguage("en")}
            >
                EN
            </button>
        </div>
    )
}

export default Language

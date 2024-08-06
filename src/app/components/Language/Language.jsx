import { Link } from "react-router-dom"
import { useAppContext } from "../../contexts/AppContext"

function Language() {
    const { language, changeLanguage, theme } = useAppContext()

    return (
        <div className="flex gap-2 items-center dark:text-dark-text">
            <Link
                to=""
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
            </Link>
            <p>/</p>
            <Link
                to=""
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
            </Link>
        </div>
    )
}

export default Language

import { Link } from "react-router-dom"
import { useAppContext } from "../contexts/AppContext"
import text from "../../assets/texts/Header.json"

function Navbar() {
    const { language, theme } = useAppContext()

    return (
        <nav className="hidden md:flex max-w-[50%] w-full justify-evenly dark:text-dark-text">
            <Link
                to="#technologies"
                className={
                    theme === "light"
                        ? "transition-hover-light"
                        : "transition-hover-dark"
                }
            >
                {language === "fr" ? text.techno.fr : text.techno.en}
            </Link>
            <Link
                to="#projects"
                className={
                    theme === "light"
                        ? "transition-hover-light"
                        : "transition-hover-dark"
                }
            >
                {language === "fr" ? text.projects.fr : text.projects.en}
            </Link>
            <Link
                to="#profile"
                className={
                    theme === "light"
                        ? "transition-hover-light"
                        : "transition-hover-dark"
                }
            >
                {language === "fr" ? text.profile.fr : text.profile.en}
            </Link>
            <Link
                to="#contact"
                className={
                    theme === "light"
                        ? "transition-hover-light"
                        : "transition-hover-dark"
                }
            >
                {language === "fr" ? text.contact.fr : text.contact.en}
            </Link>
        </nav>
    )
}

export default Navbar

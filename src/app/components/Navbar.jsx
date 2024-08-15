import { Link } from "react-router-dom"
import { useAppContext } from "../contexts/AppContext"
import text from "../../assets/texts/Header.json"

function Navbar({ navTabDesk, navMob }) {
    const { language, theme } = useAppContext()

    return (
        <nav className={`${navTabDesk} ${navMob} dark:text-dark-text`}>
            <Link
                to="#"
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

import { useAppContext } from "../contexts/AppContext"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import text from "../../assets/datas/Header.json"

function Navbar({ navTabDesk, navMob, setToggleMenu }) {
    const { language, theme } = useAppContext()
    const technologies = useIntersectionObserver("technologies")
    const projects = useIntersectionObserver("section-projects")
    const profile = useIntersectionObserver("profile")
    const contact = useIntersectionObserver("contact")

    return (
        <nav className={`${navTabDesk} ${navMob} dark:text-dark-text`}>
            <a
                href="/#technologies"
                className={`${
                    theme === "light"
                        ? "transition-hover-light"
                        : "transition-hover-dark"
                } ${technologies ? "transition-font-weight" : ""}`}
                onClick={
                    window.innerWidth < 768 ? () => setToggleMenu(false) : ""
                }
            >
                {language === "fr" ? text.techno.fr : text.techno.en}
            </a>
            <a
                href="/#section-projects"
                className={`${
                    theme === "light"
                        ? "transition-hover-light"
                        : "transition-hover-dark"
                } ${projects ? "transition-font-weight" : ""}`}
                onClick={
                    window.innerWidth < 768 ? () => setToggleMenu(false) : ""
                }
            >
                {language === "fr" ? text.projects.fr : text.projects.en}
            </a>
            <a
                href="/#profile"
                className={`${
                    theme === "light"
                        ? "transition-hover-light"
                        : "transition-hover-dark"
                } ${profile ? "transition-font-weight" : ""}`}
                onClick={
                    window.innerWidth < 768 ? () => setToggleMenu(false) : ""
                }
            >
                {language === "fr" ? text.profile.fr : text.profile.en}
            </a>
            <a
                href="/#contact"
                className={`${
                    theme === "light"
                        ? "transition-hover-light"
                        : "transition-hover-dark"
                } ${contact ? "transition-font-weight" : ""}`}
                onClick={
                    window.innerWidth < 768 ? () => setToggleMenu(false) : ""
                }
            >
                {language === "fr" ? text.contact.fr : text.contact.en}
            </a>
        </nav>
    )
}

export default Navbar

import { Link } from "react-router-dom"
import text from "../../assets/texts/Header.json"
import { useAppContext } from "../contexts/AppContext"
import useScrollAnchor from "../hooks/useScrollAnchor"
import Language from "./Language"
import Theme from "./Theme"

function Header() {
    const { language, theme } = useAppContext()
    const firstScroll = useScrollAnchor("section-2")

    return (
        <header
            className={`h-24 z-10 fixed top-0 left-0 right-0  p-5 bg-light-grey+ dark:bg-dark-blue+ ${
                !firstScroll ? "shadow-head-0" : "shadow-head-100"
            }`}
        >
            <div className="mw-auto flex items-center justify-between">
                <p
                    className={`text-2xl text-red dark:text-yellow font-heading font-semibold ${
                        !firstScroll ? "opa-0" : "opa-100"
                    }`}
                >
                    {text.title}
                </p>
                <nav className="flex gap-20 dark:text-dark-text">
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
                        {language === "fr"
                            ? text.projects.fr
                            : text.projects.en}
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
                <div className="flex gap-10">
                    <Language />
                    <Theme />
                </div>
            </div>
        </header>
    )
}

export default Header

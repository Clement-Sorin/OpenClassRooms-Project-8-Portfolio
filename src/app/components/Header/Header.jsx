import { Link } from "react-router-dom"
import text from "./text.json"
import Language from "../Language/Language"
import Theme from "../Theme/Theme"
import { useAppContext } from "../../context/AppContext"

function Header() {
    const { language } = useAppContext()

    return (
        <header className="h-24 bg-light-grey+ flex items-center justify-between p-5">
            <p className="text-2xl text-red font-heading font-semibold">
                {text.title}
            </p>
            <nav className="flex gap-20">
                <Link to="#technologies">
                    {language === "fr" ? text.techno.fr : text.techno.en}
                </Link>
                <Link to="#projects">
                    {language === "fr" ? text.projects.fr : text.projects.en}
                </Link>
                <Link to="#profile">
                    {language === "fr" ? text.profile.fr : text.profile.en}
                </Link>
                <Link to="#contact">
                    {language === "fr" ? text.contact.fr : text.contact.en}
                </Link>
            </nav>
            <div className="flex gap-10">
                <Language />
                <Theme />
            </div>
        </header>
    )
}

export default Header

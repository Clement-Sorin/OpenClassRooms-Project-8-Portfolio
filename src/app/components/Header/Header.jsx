import { Link } from "react-router-dom"
import text from "./text.json"
import Language from "../Language/Language"
import Theme from "../Theme/Theme"

function Header() {
    return (
        <header className="h-24 bg-light-grey+ flex items-center justify-between">
            <p className="text-2xl text-red font-heading font-semibold">
                {text.title}
            </p>
            <nav className="flex gap-20">
                <Link to="#technologies">{text.techno.fr}</Link>
                <Link to="#projects">{text.projects.fr}</Link>
                <Link to="#profile">{text.profile.fr}</Link>
                <Link to="#contact">{text.contact.fr}</Link>
            </nav>
            <div className="flex gap-10">
                <Language />
                <Theme />
            </div>
        </header>
    )
}

export default Header

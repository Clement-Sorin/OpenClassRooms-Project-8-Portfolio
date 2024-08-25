import { useAppContext } from "../contexts/AppContext"
import LinkProjects from "./LinkProjects"
import Position from "./Position"
import ProjectsTechnos from "./ProjectsTechnos"

function SingleProject({
    position,
    title,
    technos,
    description,
    links,
    challenge,
    images,
}) {
    const { theme, language } = useAppContext()

    return (
        <div id={title}>
            <div
                className={`details ${
                    theme === "light" ? "text-black" : "text-dark-text"
                }`}
            >
                <Position position={position} />
                <h2>{title}</h2>
                <ProjectsTechnos technos={technos} />
                <p>{language === "fr" ? description.fr : description.en}</p>
                <LinkProjects links={links} />
                <p>
                    <span className="font-bold">Challenge : </span>
                    {language === "fr" ? challenge.fr : challenge.en}
                </p>
            </div>
            <div className="image"></div>
        </div>
    )
}

export default SingleProject

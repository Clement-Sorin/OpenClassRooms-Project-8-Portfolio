import { useAppContext } from "../contexts/AppContext"
import useScrollAnchor from "../hooks/useScrollAnchor"
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
    const scrollSingleProject = useScrollAnchor("transition-2")

    return (
        <div
            id={title}
            className="flex single-project gap-20 justify-center items-center w-full h-full"
        >
            <div
                className={`flex flex-col gap-2 w-[40%] ${
                    theme === "light" ? "text-black" : "text-dark-text"
                } ${scrollSingleProject ? "details-projects" : ""}`}
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
            <img
                src={images[0]}
                className={`images-projects fade-in max-w-[500px] max-h-[300px] ${
                    scrollSingleProject ? "images-projects" : ""
                }`}
                alt={"landing screenshot of " + title}
            ></img>
        </div>
    )
}

export default SingleProject

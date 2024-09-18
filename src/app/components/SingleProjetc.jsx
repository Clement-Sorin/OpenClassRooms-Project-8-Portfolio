import { useAppContext } from "../contexts/AppContext"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import ImagesProjects from "./ImagesProjects"
import LinkProjects from "./LinkProjects"
import Position from "./Position"
import ProjectsTechnos from "./ProjectsTechnos"

function SingleProject({
    index,
    position,
    title,
    technos,
    description,
    links,
    challenge,
    images,
}) {
    const { theme, language } = useAppContext()
    const scrollSingleProject = useIntersectionObserver(`${title}`)

    return (
        <div
            id={title}
            className={`project flex flex-col snap-start snap-always ${
                position % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } single-project h-[100vh] gap-8 md:gap-20 mw-auto mr-5 ml-5 justify-center items-center w-full h-full`}
        >
            <div
                className={`flex flex-col gap-2 w-[80%] md:w-[40%]  ${
                    theme === "light" ? "text-black" : "text-dark-text"
                } ${scrollSingleProject ? "details-projects" : ""}`}
            >
                <Position position={position} />
                <h2 className="text-[20px] md:text-2xl">{title}</h2>
                <ProjectsTechnos technos={technos} />
                <p className="sm:text-[14px] md:text-[16px]">
                    {language === "fr" ? description.fr : description.en}
                </p>
                <div className="container-links-projects flex items-end gap-2">
                    <p className="font-bold">
                        {language === "fr"
                            ? `Lien${links.length > 1 ? "s" : ""} :`
                            : `Link${links.length > 1 ? "s" : ""} :`}
                    </p>
                    <LinkProjects links={links} />
                </div>
                <p className="sm:text-[14px] md:text-[16px]">
                    <span className="font-bold">Challenge : </span>
                    {language === "fr" ? challenge.fr : challenge.en}
                </p>
            </div>
            <ImagesProjects images={images} title={title} index={index} />
        </div>
    )
}

export default SingleProject

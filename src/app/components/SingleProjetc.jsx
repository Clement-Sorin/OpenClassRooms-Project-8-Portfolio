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
        <div
            id={title}
            className="flex justify-center items-center w-full h-full"
            style={{ minWidth: "100vw" }}
        >
            <div
                className={`details flex-col gap-5 ${
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
            <img
                src={images[0]}
                className="max-w-[500px] max-h-[300px]"
                alt={"landing screenshot of " + title}
            ></img>
        </div>
    )
}

export default SingleProject

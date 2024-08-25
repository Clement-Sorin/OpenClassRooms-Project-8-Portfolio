import { useAppContext } from "../contexts/AppContext"
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
    const { theme } = useAppContext()

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
            </div>
            <div className="image"></div>
        </div>
    )
}

export default SingleProject

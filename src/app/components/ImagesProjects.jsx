import useScrollAnchor from "../hooks/useScrollAnchor"
import { useAppContext } from "../contexts/AppContext"

function ImagesProjects({ images, title }) {
    const scrollSingleProject = useScrollAnchor("transition-2")
    const { theme } = useAppContext()

    return (
        <img
            src={images[0]}
            className={`images-projects fade-in sm:max-w-[250px] sm:max-h-[150px] sm2:max-w-[350px] sm2:max-h-[350px] lg:max-w-[500px] lg:max-h-[500px]  ${
                scrollSingleProject ? "images-projects" : ""
            }`}
            style={{
                boxShadow: `${
                    theme === "light"
                        ? "0px 0px 15px rgba(0,0,0,0.25)"
                        : "0px 0px 15px rgba(247,243,245,0.6)"
                }`,
            }}
            alt={"landing screenshot of " + title}
        ></img>
    )
}

export default ImagesProjects

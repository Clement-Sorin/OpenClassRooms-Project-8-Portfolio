import Transition2 from "../components/Transition2"
import useScrollAnchor from "../hooks/useScrollAnchor"
import datas from "../../assets/datas/Projects.json"

function Projects() {
    const scrollProjects = useScrollAnchor("transition-2")

    return (
        <section id="projects">
            <Transition2 />
            <div
                className={`${
                    scrollProjects ? "projects" : "hidden"
                } sm:top-16 md:top-20 lg:top-24 h-full w-full`}
            ></div>
        </section>
    )
}

export default Projects

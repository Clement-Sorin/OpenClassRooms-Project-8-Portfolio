import Transition2 from "../components/Transition2"
import useScrollAnchor from "../hooks/useScrollAnchor"

function Projects() {
    const scrollProjects = useScrollAnchor("transition-2")

    return (
        <section id="projects">
            <Transition2 />
            <div className={`${scrollProjects ? "projects" : "hidden"} sm:top-16 md:top-20 lg:top-24 h-full w-full`}>
                <h2>TEST</h2>

            </div>
        </section>
    )
}

export default Projects

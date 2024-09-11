import { useAppContext } from "../contexts/AppContext"
import datas from "../../assets/datas/Projects.json"
import SingleProject from "../components/SingleProjetc"
import ModalGallery from "../components/ModalGallery"

function Projects() {
    const { theme } = useAppContext()

    return (
        <section
            id="section-projects"
            className={`h-full w-full ${
                theme === "light" ? "bg-light-grey+" : "bg-dark-blue+"
            }`}
        >
            <div
                className={`all-projects flex flex-col w-full `}
                style={{ minHeight: `${100 * datas.length}vh` }}
            >
                {datas.map((item, index) => (
                    <SingleProject
                        key={index}
                        index={index}
                        position={index + 1}
                        title={item.title}
                        technos={item.tech}
                        description={item.description}
                        links={item.links}
                        challenge={item.challenge}
                        images={item.images}
                    />
                ))}
            </div>
            <ModalGallery></ModalGallery>
        </section>
    )
}

export default Projects

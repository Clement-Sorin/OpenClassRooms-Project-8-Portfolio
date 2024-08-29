import { useState, useEffect } from "react"
import Transition2 from "../components/Transition2"
import useScrollAnchor from "../hooks/useScrollAnchor"
import datas from "../../assets/datas/Projects.json"
import SingleProject from "../components/SingleProjetc"

function Projects() {
    const scrollProjects = useScrollAnchor("transition-2")
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleWheel = (event) => {
        const scrollAmount = event.deltaY * 1.5
        const mainContainer = document.getElementById("main-scroll")
        const trackWidthPx = document.getElementById("track").scrollWidth
        const containerWidthPx = mainContainer.clientWidth

        setScrollLeft((prevScrollLeft) => {
            let newScrollLeft = prevScrollLeft + scrollAmount
            const maxScrollLeft = trackWidthPx - containerWidthPx

            newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft))

            return newScrollLeft
        })
        const newScrollLeft = scrollLeft + scrollAmount
        if (newScrollLeft <= 0) {
            event.preventDefault()
        }
    }

    return (
        <section
            id="section-projects"
            className="overflow-hidden h-full w-full"
        >
            <Transition2 />
            <div
                className={`all-projects fixed w-full h-full ${
                    scrollProjects ? "projects" : "hidden"
                } sm:top-16 md:top-20 lg:top-24`}
                onWheel={handleWheel}
            >
                <div
                    id="container-track"
                    className="w-full h-full overflow-x-auto"
                    style={{
                        scrollBehavior: "smooth",
                        overflowX: "auto",
                    }}
                >
                    <div
                        id="track"
                        className="flex w-full h-full"
                        style={{
                            minWidth: `${100 * datas.length}vw`,
                            transform: `translateX(-${scrollLeft}px)`,
                        }}
                    >
                        {datas.map((item, index) => (
                            <SingleProject
                                key={index}
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
                </div>
            </div>
        </section>
    )
}

export default Projects

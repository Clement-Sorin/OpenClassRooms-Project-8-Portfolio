import { useState, useEffect } from "react"
import Transition2 from "../components/Transition2"
import useScrollAnchor from "../hooks/useScrollAnchor"
import datas from "../../assets/datas/Projects.json"
import SingleProject from "../components/SingleProjetc"

function Projects() {
    const firstScroll = useScrollAnchor("transition-1")
    const scrollProjects = useScrollAnchor("transition-2")
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleWheel = (event) => {
        const scrollMove = event.deltaY > 0 ? 100 : -100

        setScrollLeft((prevScrollLeft) => {
            let newScrollLeft = prevScrollLeft + scrollMove
            const dataLenght = datas.length * 100

            if (newScrollLeft < 0) {
                newScrollLeft = 0
            } else if (newScrollLeft >= dataLenght - 100) {
                newScrollLeft = dataLenght - 100
            }

            return newScrollLeft
        })
    }

    useEffect(() => {
        const body = document.querySelector("body")

        if (scrollLeft === 0) {
            body.classList.remove("overflow-y-hidden")
        } else {
            body.classList.add("overflow-y-hidden")
        }
    }, [scrollLeft])

    return (
        <section
            id="section-projects"
            className={`h-full w-full ${!firstScroll ? "hidden" : ""}`}
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
                            transform: `translateX(-${scrollLeft}vw)`,
                            transition: "0.3s ease-in",
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

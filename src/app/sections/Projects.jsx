import { useState, useEffect } from "react"
import Transition2 from "../components/Transition2"
import useScrollAnchor from "../hooks/useScrollAnchor"
import datas from "../../assets/datas/Projects.json"
import SingleProject from "../components/SingleProjetc"
import ModalGallery from "../components/ModalGallery"

function Projects() {
    const firstScroll = useScrollAnchor("transition-1")
    const scrollProjects = useScrollAnchor("transition-2")
    const [scrollLeft, setScrollLeft] = useState(0)
    const [touchStartY, setTouchStartY] = useState(0)
    const scrollThreshold = 70

    console.log("scrollLeft :", scrollLeft)

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

    const handleTouchStart = (event) => {
        setTouchStartY(event.touches[0].clientY)
    }

    const handleTouchMove = (event) => {
        const currentY = event.touches[0].clientY
        const direction = touchStartY - currentY

        if (Math.abs(direction) > scrollThreshold) {
            const scrollMove = direction > 0 ? 100 : -100

            setScrollLeft((prevScrollLeft) => {
                let newScrollLeft = prevScrollLeft + scrollMove
                const dataLength = datas.length * 100

                if (newScrollLeft < 0) {
                    newScrollLeft = 0
                } else if (newScrollLeft >= dataLength - 100) {
                    newScrollLeft = dataLength - 100
                }

                return newScrollLeft
            })
            setTouchStartY(currentY)
        }
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
                } sm:top-16 md:top-16 lg:top-16`}
                onWheel={handleWheel}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
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
                            index={index}
                            position={index + 1}
                            title={item.title}
                            technos={item.tech}
                            description={item.description}
                            links={item.links}
                            challenge={item.challenge}
                            images={item.images}
                            scrollLeft={scrollLeft}
                        />
                    ))}
                </div>
            </div>
            <ModalGallery></ModalGallery>
        </section>
    )
}

export default Projects

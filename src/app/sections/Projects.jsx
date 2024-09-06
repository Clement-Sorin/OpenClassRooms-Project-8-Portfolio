import { useState, useEffect, useRef } from "react"
import { useAppContext } from "../contexts/AppContext"
import datas from "../../assets/datas/Projects.json"
import SingleProject from "../components/SingleProjetc"
import ModalGallery from "../components/ModalGallery"

function Projects() {
    const { theme } = useAppContext()
    const trackRef = useRef(null)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [touchStartY, setTouchStartY] = useState(0)
    const scrollThreshold = 70

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

    return (
        <section
            id="section-projects"
            className={`h-full w-full snap-start snap-always ${
                theme === "light" ? "bg-light-grey+" : "bg-dark-blue+"
            }`}
        >
            <div
                className={`all-projects flex flex-col w-full `}
                style={{ minHeight: `${100 * datas.length}vh` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
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
            <ModalGallery></ModalGallery>
        </section>
    )
}

export default Projects

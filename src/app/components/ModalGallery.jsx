import { useRef, useEffect, useState } from "react"
import { useAppContext } from "../contexts/AppContext"
import projects from "../../assets/datas/Projects.json"
import { ReactComponent as PolygonLeft } from "../../assets/icons/polygon-left.svg"
import { ReactComponent as PolygonRight } from "../../assets/icons/polygon-right.svg"

function ModalGallery() {
    const { modalState, closeModal, theme } = useAppContext()
    const divModal = useRef(null)
    const [imageIndex, setImageIndex] = useState(0)
    const [lastScrollTop, setLastScrollTop] = useState(0)

    // Closing modal fonctionnality

    const project = projects[modalState.data]
    const images = project ? project.images : []

    const handleOutsideClick = (event) => {
        if (divModal.current && !divModal.current.contains(event.target)) {
            closeModal()
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    }, [modalState.isOpen])

    // Carrousel fonctionnality

    const handleNextClick = () => {
        const nextImage = imageIndex + 1
        if (imageIndex >= images.length - 1) {
            setImageIndex(0)
        } else {
            setImageIndex(nextImage)
        }
    }

    const handlePrevClick = () => {
        const nextImage = imageIndex - 1
        if (imageIndex === 0) {
            setImageIndex(images.length - 1)
        } else {
            setImageIndex(nextImage)
        }
    }
    d
    if (!modalState.isOpen && !modalState.data) return null

    return (
        <>
            <div
                className={`overlay-modal fixed inset-0 bg-black z-20 ${
                    theme === "light" ? "opacity-10" : "opacity-25"
                }`}
            ></div>
            <div
                ref={divModal}
                className={`modal fixed top-1/2 left-1/2 flex items-center z-20 ${
                    modalState.isOpen ? "" : "hidden"
                }`}
                style={{
                    transform: `translate(-50%, -50%) `,
                }}
            >
                <div
                    className={`backdrop-blur-sm flex items-center p-4 ${
                        theme === "light"
                            ? "bg-[rgba(255,255,255,0.5)]"
                            : "bg-[rgba(255,255,255,0.8)]"
                    } `}
                >
                    <PolygonLeft stroke="black" onClick={handlePrevClick} />
                    <div className="custom-border-box m-2 flex justify-center">
                        <img
                            ref={divModal}
                            src={images[imageIndex]}
                            alt={images[imageIndex]}
                            className="max-w-[80vw] md:max-w-[60vw] max-h-[60vh] p-4"
                        ></img>
                    </div>
                    <PolygonRight stroke="black" onClick={handleNextClick} />
                </div>
            </div>
        </>
    )
}

export default ModalGallery

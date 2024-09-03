import { useRef, useEffect, useState } from "react"
import { useAppContext } from "../contexts/AppContext"
import projects from "../../assets/datas/Projects.json"
import { ReactComponent as PolygonLeft } from "../../assets/icons/polygon-left.svg"
import { ReactComponent as PolygonRight } from "../../assets/icons/polygon-right.svg"

function ModalGallery() {
    const { modalState, closeModal, theme } = useAppContext()
    const divModal = useRef(null)
    const [imageIndex, setImageIndex] = useState(0)
    const body = document.querySelector("body")
    const project = projects[modalState.data]
    const images = project ? project.images : []
    const pagingIndex = imageIndex + 1
    const pagingMax = images.length

    console.log("pagingIndex :", pagingIndex)

    if (modalState.isOpen) {
        body.classList.add("overflow-y-hidden")
    } else if (!modalState.isOpen) {
        body.classList.remove("overflow-y-hidden")
    }

    useEffect(() => {
        setImageIndex(0)
    }, [modalState.data])

    // Closing modal fonctionnality

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

    const handleScroll = (event) => {
        const scrollMove = event.deltaY
        if (scrollMove === -100) {
            handlePrevClick()
        } else if (scrollMove === 100) {
            handleNextClick()
        }
    }

    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e) => {
        touchStartX = e.targetTouches[0].clientX
    }
    const handleTouchEnd = (e) => {
        if (touchStartX - touchEndX > 0) {
            handlePrevClick()
        } else if (touchEndX - touchStartX > 0) {
            handleNextClick()
        }
    }
    const handleTouchMove = (e) => {
        touchEndX = e.targetTouches[0].clientX
    }

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
                    className={`backdrop-blur-sm flex flex-col items-center p-4 ${
                        theme === "light"
                            ? "bg-[rgba(255,255,255,0.5)]"
                            : "bg-[rgba(255,255,255,0.8)]"
                    } `}
                >
                    <div className="flex justify-center items-center">
                        <PolygonLeft
                            stroke="black"
                            onClick={handlePrevClick}
                            className="sm:hidden md:block"
                        />
                        <div className="custom-border-box m-2">
                            <img
                                ref={divModal}
                                src={images[imageIndex]}
                                alt={images[imageIndex]}
                                className="max-w-[90vw] max-h-[80vh] md:max-w-[60vw] md:max-h-[60vh] p-4"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                                onWheel={handleScroll}
                            ></img>
                        </div>
                        <PolygonRight
                            stroke="black"
                            onClick={handleNextClick}
                            className="sm:hidden md:block"
                        />
                    </div>
                    <p>
                        {pagingIndex} / {pagingMax}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ModalGallery

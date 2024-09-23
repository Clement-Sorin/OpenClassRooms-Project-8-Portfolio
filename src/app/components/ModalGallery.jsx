import { useRef, useEffect, useState, useCallback } from "react"
import { useAppContext } from "../contexts/AppContext"
import projects from "../../assets/datas/Projects.json"
import photo_profile from "../../assets/photos/photo_profile.webp"
import { ReactComponent as ArrowScroll } from "../../assets/icons/arrow-scroll.svg"
import { ReactComponent as FingerSwipe } from "../../assets/icons/finger.svg"
import { ReactComponent as ArrowsSwipe } from "../../assets/icons/arrow.svg"

function ModalGallery() {
    const { modalState, closeModal, theme } = useAppContext()
    const divModal = useRef(null)
    const imgGallery = useRef(null)
    const [imageIndex, setImageIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [isPhotoProfile, setIsPhotoProfile] = useState()
    const project = projects[modalState.data]
    const images = project ? project.images : []
    const pagingIndex = imageIndex + 1
    const pagingMax = images.length

    useEffect(() => {
        setImageIndex(0)
    }, [modalState.data])

    // Checking if photo profile or not

    useEffect(() => {
        if (modalState.data === "profile-picture") {
            setIsPhotoProfile(true)
        } else {
            setIsPhotoProfile(false)
        }
    }, [modalState])

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
    })

    // Carrousel fonctionnality

    const selectNextImage = useCallback(() => {
        const nextImage = imageIndex + 1
        setImageIndex(nextImage >= images.length ? 0 : nextImage)
        setIsLoading(true)
    }, [imageIndex, images.length])

    const selectPrevImage = useCallback(() => {
        const prevImage = imageIndex - 1
        setImageIndex(prevImage < 0 ? images.length - 1 : prevImage)
        setIsLoading(true)
    }, [imageIndex, images.length])

    useEffect(() => {
        const handleWheel = (event) => {
            if (modalState.isOpen) {
                event.preventDefault()
            }

            const scrollMove = event.deltaY
            if (scrollMove < 0) {
                selectPrevImage()
            } else if (scrollMove > 0) {
                selectNextImage()
            }
        }
        document.addEventListener("wheel", handleWheel, { passive: false })

        return () => {
            document.removeEventListener("wheel", handleWheel)
        }
    }, [selectNextImage, selectPrevImage, modalState])

    useEffect(() => {
        const handleTouchMove = (event) => {
            if (modalState.isOpen) {
                event.preventDefault()
            }
        }

        document.addEventListener("touchmove", handleTouchMove, {
            passive: false,
        })

        return () => {
            document.removeEventListener("touchmove", handleTouchMove)
        }
    }, [modalState])

    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e) => {
        touchStartX = e.targetTouches[0].clientX
    }
    const handleTouchEnd = (e) => {
        if (touchStartX - touchEndX > 0) {
            selectNextImage()
        } else if (touchEndX - touchStartX > 0) {
            selectPrevImage()
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
                        <div className="custom-border-box m-2 before:border-black before:dark:border-black after:border-black after:dark:border-black flex justify-center">
                            <img
                                ref={imgGallery}
                                src={
                                    isPhotoProfile
                                        ? photo_profile
                                        : images[imageIndex]
                                }
                                alt={images[imageIndex]}
                                className={`max-w-[90vw] max-h-[65vh] md:max-w-[60vw] md:max-h-[60vh] p-4 ${
                                    isLoading === true ? "opa-0" : "opa-100"
                                }`}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                                onLoad={() => setIsLoading(false)}
                            ></img>
                        </div>
                    </div>
                    <div className={isPhotoProfile ? "hidden" : ""}>
                        <p>
                            {pagingIndex} / {pagingMax}
                        </p>
                        <div
                            className={`w-[25px] h-[40px]  border rounded-full m-2 opacity-90 border-black hidden lg:flex justify-center items-center`}
                        >
                            <ArrowScroll
                                className="arrow-scroll w-[20px] h-[20px]"
                                color="black"
                                opacity={0.9}
                            ></ArrowScroll>
                        </div>
                        <div className="lg:hidden flex flex-col items-center mt-2">
                            <div className="relative top-[3px] arrows-swipe flex gap-3">
                                <ArrowsSwipe
                                    width="15"
                                    height="15"
                                    className="rotate-180"
                                />
                                <ArrowsSwipe width="15" height="15" />
                            </div>
                            <FingerSwipe
                                width="20"
                                height="20"
                                className="ml-1 finger-swipe"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalGallery

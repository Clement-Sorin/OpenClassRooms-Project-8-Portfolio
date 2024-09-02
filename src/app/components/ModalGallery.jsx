import { useRef, useEffect } from "react"
import { useAppContext } from "../contexts/AppContext"
import projects from "../../assets/datas/Projects.json"

function ModalGallery() {
    const { modalState, closeModal, theme } = useAppContext()
    const divModal = useRef(null)

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
                className={`modal fixed top-1/2 left-1/2 bg-white z-20 ${
                    modalState.isOpen ? "" : "hidden"
                }`}
                style={{
                    transform: `translate(-50%, -50%) `,
                }}
            >
                <img
                    src={images[0]}
                    alt={images[0]}
                    className="max-w-[80vw] md:max-w-[60vw] max-h-[60vh]"
                ></img>
            </div>
        </>
    )
}

export default ModalGallery

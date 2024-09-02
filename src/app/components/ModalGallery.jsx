import { useRef, useEffect } from "react"

function ModalGallery({ isModalOpen, closeModal }) {
    const divModal = useRef(null)

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
    }, [isModalOpen])

    return (
        <div
            ref={divModal}
            className={`modal fixed top-1/2 left-1/2 w-[80vw] md:w-[60vw] h-[60vh] bg-white z-20 ${
                isModalOpen ? "" : "hidden"
            }`}
            style={{
                transform: `translate(-50%, -50%) `,
            }}
        >
            <button
                className="w-10 h-10 border-2 border-red"
                onClick={closeModal}
            >
                X
            </button>
        </div>
    )
}

export default ModalGallery

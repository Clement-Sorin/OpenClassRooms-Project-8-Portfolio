function ModalGallery({ isModalOpen, openModal, closeModal }) {
    console.log("isModalOpen :", isModalOpen)

    return (
        <div
            className={`modal fixed top-1/2 left-1/2 w-[60vw] h-[60vh] bg-white z-20 ${
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

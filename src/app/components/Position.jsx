import { useAppContext } from "../contexts/AppContext"

function Position({ position }) {
    const { theme } = useAppContext()

    return (
        <div className="position flex gap-2 ">
            <div
                className={`position-line h-4 w-5 border-b-2  ${
                    theme === "light" ? "border-black" : "border-dark-text"
                }`}
            ></div>
            <h2 className="sm:text-[20px] md:text-[22px] ">
                {position < 10 ? "0" + position : position}
            </h2>
        </div>
    )
}

export default Position

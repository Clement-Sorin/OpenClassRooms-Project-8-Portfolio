import useScrollAnchor from "../hooks/useScrollAnchor"
import { useAppContext } from "../contexts/AppContext"

function Transition2() {
    const scrollProjects = useScrollAnchor("transition-2")
    const { theme } = useAppContext()

    return (
        <div
            className="mt-[100vh] flex justify-center h-full w-full "
            id="transition-2"
        >
            <div
                className={`fixed left-1/2 transform -translate-x-1/2 w-full bottom-[-40rem] z-8  ${
                    theme === "light" ? "bg-light-grey+" : "bg-dark-blue"
                } ${
                    !scrollProjects
                        ? "transition2-unscrolled"
                        : "transition2-scrolled"
                } `}
            ></div>
            <div
                className={`fixed left-1/2 transform -translate-x-1/2 w-full bottom-[-44rem] z-9  ${
                    theme === "light" ? "bg-light-grey" : "bg-dark-blue+"
                } ${
                    !scrollProjects
                        ? "transition2-unscrolled"
                        : "transition2-scrolled mask-delayed"
                }`}
            ></div>
        </div>
    )
}

export default Transition2

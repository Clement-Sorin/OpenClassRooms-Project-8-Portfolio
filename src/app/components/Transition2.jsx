import useScrollAnchor from "../hooks/useScrollAnchor"
import { useAppContext } from "../contexts/AppContext"

function Transition2() {
    const scrollProjects = useScrollAnchor("transition-2")
    const { theme } = useAppContext()

    return (
        <div className="h-full w-full" id="transition-2">
            <div
                className={`fixed w-full h-full bottom-0 z-8  ${
                    theme === "light" ? "bg-light-grey+" : "bg-dark-blue"
                } ${
                    !scrollProjects
                        ? "transition2-unscrolled"
                        : "transition2-scrolled"
                } `}
            ></div>
            <div
                className={`fixed w-full h-full  bottom-0 z-9  ${
                    theme === "light" ? "bg-light-grey" : "bg-dark-blue+"
                } ${
                    !scrollProjects
                        ? "transition2-unscrolled"
                        : "transition2-scrolled mask-delayed-2"
                }`}
            ></div>
        </div>
    )
}

export default Transition2

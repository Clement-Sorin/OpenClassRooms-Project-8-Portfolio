import useScrollAnchor from "../hooks/useScrollAnchor"
import { useAppContext } from "../contexts/AppContext"

function Transition1() {
    const firstScroll = useScrollAnchor("transition-1")
    const { theme } = useAppContext()

    return (
        <div
            className="mt-[100vh] flex justify-center h-full w-full"
            id="transition-1"
        >
            <div
                className={`fixed overflow-hidden left-1/2 transform -translate-x-1/2 w-full bottom-[-40rem] z-8 rounded-full ${
                    theme === "light" ? "bg-light-grey+" : "bg-dark-blue"
                }  ${
                    !firstScroll
                        ? "transition1-unscrolled"
                        : "transition1-scrolled"
                }`}
            ></div>
            <div
                className={`fixed overflow-hiddens left-1/2 transform -translate-x-1/2 w-full bottom-[-44rem] z-9 rounded-full ${
                    theme === "light" ? "bg-light-grey" : "bg-dark-blue+"
                } ${
                    !firstScroll
                        ? "transition1-unscrolled"
                        : "transition1-scrolled mask-delayed"
                }`}
            ></div>
        </div>
    )
}

export default Transition1

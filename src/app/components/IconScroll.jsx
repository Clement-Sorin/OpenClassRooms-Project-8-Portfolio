import { ReactComponent as ArrowScroll } from "../../assets/icons/arrow-scroll.svg"
import { useAppContext } from "../contexts/AppContext"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import { useRef } from "react"

function IconScroll() {
    const { theme } = useAppContext()
    const landingScroll = useIntersectionObserver("landing")
    const contactScroll = useIntersectionObserver("contact")
    const divRef = useRef(null)

    return (
        <div
            ref={divRef}
            className={`fixed bottom-6 flex justify-center right-0 w-full mx-auto ${
                landingScroll ? "opa-100" : "opa-0"
            } ${contactScroll ? "hidden" : ""}`}
        >
            <div
                className={`w-[20px] h-[40px] md:w-[30px] md:h-[60px] border rounded-full opacity-90 ${
                    theme === "light"
                        ? "border-lines-light"
                        : "border-lines-dark"
                } flex justify-center items-center`}
            >
                <ArrowScroll
                    className="arrow-scroll w-[15px] h-[15px] md:w-[20px] md:h-[20px]"
                    color={theme === "light" ? "#757780" : "#E7DAE0"}
                    opacity={0.9}
                ></ArrowScroll>
            </div>
        </div>
    )
}

export default IconScroll

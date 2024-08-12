import { ReactComponent as ArrowScroll } from "../../assets/icons/arrow-scroll.svg"
import { useAppContext } from "../contexts/AppContext"
import useScrollAnchor from "../hooks/useScrollAnchor"

function IconScroll() {
    const { theme } = useAppContext()
    const firstScroll = useScrollAnchor("transition-1")

    return (
        <div
            className={`fixed bottom-2 md:bottom-6 flex justify-center right-0 w-full mx-auto ${
                !firstScroll ? "opa-100" : "opa-0"
            }`}
        >
            <div
                className={`w-[20px] h-[40px] md:w-[30px] md:h-[60px] border rounded-full opacity-90 ${
                    theme === "light"
                        ? "border-lines-light"
                        : "border-lines-dark"
                } relative flex justify-center items-center`}
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

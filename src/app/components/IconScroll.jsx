import { ReactComponent as ArrowScroll } from "../../assets/icons/arrow-scroll.svg"
import { useAppContext } from "../contexts/AppContext"
import useScrollAnchor from "../hooks/useScrollAnchor"

function IconScroll() {
    const { theme } = useAppContext()
    const firstScroll = useScrollAnchor("section-2")

    return (
        <div
            className={`fixed bottom-6 left-[48%] right-0 w-full mx-auto ${
                !firstScroll ? "opa-100" : "opa-0"
            }`}
        >
            <div
                className={`w-[30px] h-[60px] border rounded-full opacity-90 ${
                    theme === "light"
                        ? "border-lines-light"
                        : "border-lines-dark"
                } relative flex justify-center items-center`}
            >
                <ArrowScroll
                    className="arrow-scroll"
                    width={20}
                    height={20}
                    color={theme === "light" ? "#757780" : "#E7DAE0"}
                    opacity={0.9}
                ></ArrowScroll>
            </div>
        </div>
    )
}

export default IconScroll

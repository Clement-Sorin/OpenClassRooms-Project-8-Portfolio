import { ReactComponent as ArrowScroll } from "../../../assets/icons/double-arrow-down-svgrepo-com.svg"
import { useAppContext } from "../../contexts/AppContext"
import "./styles.css"

function IconScroll() {
    const { theme } = useAppContext()

    return (
        <div className="flex justify-center">
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

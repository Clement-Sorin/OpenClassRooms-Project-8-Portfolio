import datas from "../../assets/datas/Error404.json"
import { ReactComponent as BracketLeft } from "../../assets/svgs/bracket-left.svg"
import { ReactComponent as BracketRight } from "../../assets/svgs/bracket-right.svg"
import { ReactComponent as FrameSubmit } from "../../assets/svgs/frame-submit.svg"
import { useAppContext } from "../contexts/AppContext"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import { useState } from "react"
import { Link } from "react-router-dom"

function Error404() {
    const { language, theme } = useAppContext()
    const [isHovered, setIsHovered] = useState()
    const error404Display = useIntersectionObserver("error-404")

    const changeButtonColor = () => {
        setIsHovered(true)
    }
    const removeButtonColor = () => {
        setIsHovered(false)
    }

    return (
        <section
            id="error-404"
            className={`min-h-[calc(100vh-150px)] pt-[50px] md:pt-[75px] lg:pt-[100px] flex flex-col gap-12 h-full justify-center items-center ${
                theme === "light" ? "bg-light-grey" : "bg-dark-blue+"
            }`}
        >
            <div className="flex items-center justify-center w-[300px] sm2:w-[360px]">
                <BracketLeft
                    stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                    className={`${
                        error404Display
                            ? "translate-x-0 transition-transform duration-1000 ease-out"
                            : "translate-x-[400%] lg:translate-x-[500%]"
                    }`}
                />
                <h1
                    className={`${theme === "light" ? "" : "text-dark-text"} ${
                        error404Display
                            ? "opacity-1 transition-opacity duration-300 ease-out delay-1000"
                            : "opacity-0 "
                    }`}
                >
                    {language === "fr" ? datas.title.fr : datas.title.en}
                </h1>
                <BracketRight
                    stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                    className={`${
                        error404Display
                            ? "translate-x-0 transition-transform duration-1000 ease-out"
                            : "translate-x-[-400%] lg:translate-x-[-500%]"
                    }`}
                />
            </div>
            <div
                className={`flex flex-col items-center gap-5 w-[300px] sm2:w-full ${
                    theme === "light" ? "" : "text-dark-text"
                }`}
            >
                <p className="text-center">
                    {language === "fr" ? datas.text_1.fr : datas.text_1.en}
                </p>
                <p className="text-center">
                    {language === "fr" ? datas.text_2.fr : datas.text_2.en}
                </p>
            </div>
            <Link
                to="/"
                className="flex justify-center items-center relative"
                onMouseEnter={changeButtonColor}
                onMouseLeave={removeButtonColor}
            >
                <h2
                    className={`${
                        isHovered
                            ? theme === "light"
                                ? "input-submit-hovered-lt"
                                : "input-submit-hovered-dk"
                            : theme === "light"
                            ? "input-submit-lt"
                            : "input-submit-dk"
                    } text-[16px] md:text-lg absolute top-1 flex justify-center items-centers w-[124px] h-[36px]`}
                >
                    Reset
                </h2>
                <FrameSubmit
                    className={`${
                        isHovered
                            ? theme === "light"
                                ? "frame-submit-hovered-lt"
                                : "frame-submit-hovered-dk"
                            : theme === "light"
                            ? "frame-submit-lt"
                            : "frame-submit-dk"
                    } w-[124px]`}
                />
            </Link>
        </section>
    )
}

export default Error404

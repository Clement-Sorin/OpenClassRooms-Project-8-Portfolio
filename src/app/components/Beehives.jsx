import { ReactComponent as Beehive } from "../../assets/svgs/beehive.svg"
import { useAppContext } from "../contexts/AppContext"
import { useState } from "react"
import useScrollAnchor from "../hooks/useScrollAnchor"

function Beehives({ logo, logo_dark, title, className, delayAnim, index }) {
    const { theme } = useAppContext()
    const firstScroll = useScrollAnchor("technologies")
    const [toggleEffect, setToggleEffect] = useState(false)

    const handleToggle = () => {
        setToggleEffect(true)
        setTimeout(() => {
            setToggleEffect(false)
        }, 500)
    }

    return (
        <div
            className={`mapped-technos ${className}  ${
                firstScroll ? "fade-in" : ""
            } flex flex-col mb-[-70px] md:mb-0 ${
                toggleEffect ? "grow-in" : ""
            }`}
            style={{ animationDelay: `${delayAnim + index * 280}ms` }}
        >
            <div className="container-beehive relative flex items-center justify-center">
                <Beehive
                    className="beehive-techno w-[120px] sm2:w-[200px]"
                    fill={theme === "light" ? "#F5F5F5" : "#082a35"}
                    stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                />
                <img
                    onClick={handleToggle}
                    src={theme === "light" ? logo : logo_dark}
                    alt={title + " logo"}
                    className={`logo-techno absolute max-w-[72px] max-h-[30%] sm2:max-w-[120px] sm2:max-h-[45%] transition duration-300 dark:${
                        toggleEffect
                            ? "brightness-[0%]"
                            : "logo-techno-dark-unclicked dark:brightness-[1000%]"
                    }`}
                    style={{ animationDelay: `${delayAnim + index * 280}ms` }}
                />
            </div>
            <div
                className={`line-${className} + " w-[10%] border-b border-${
                    theme === "light" ? "lines-light" : "lines-dark"
                } opacity-0 md:opacity-100`}
            ></div>
            <p className="dark:text-dark-text text-[14px] sm2:text-[16px] mt-[-20px] mb-5 sm2:mt-0 sm2:mb-16 md:mb-0 ">
                {title}
            </p>
        </div>
    )
}

export default Beehives

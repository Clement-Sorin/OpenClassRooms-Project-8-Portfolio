import { ReactComponent as Beehive } from "../../assets/svgs/beehive.svg"
import { useAppContext } from "../contexts/AppContext"
import { useState } from "react"

function Beehives({ logo, logo_dark, title, className, delayAnim, index }) {
    const { theme } = useAppContext()
    const [toggleEffect, setToggleEffect] = useState(false)

    const handleToggle = () => {
        setToggleEffect(true)
        setTimeout(() => {
            setToggleEffect(false)
        }, 500)
    }

    return (
        <div
            onClick={handleToggle}
            className={`mapped-technos ${className} fade-in flex flex-col mb-[-70px] md:mb-0 ${
                toggleEffect === true ? "grow-in" : ""
            }`}
            style={{ animationDelay: `${delayAnim + index * 280}ms` }}
        >
            <div className="container-beehive relative flex items-center justify-center">
                <Beehive
                    className="beehive-techno w-[120px] md:w-[200px]"
                    fill={theme === "light" ? "#F5F5F5" : "#082a35"}
                    stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                />
                <img
                    src={theme === "light" ? logo : logo_dark}
                    alt={title + " logo"}
                    className="logo-techno absolute max-w-[75px] max-h-[30%] md:max-w-[45%] md:max-h-[45%] dark:brightness-[1000%]"
                    style={{ animationDelay: `${delayAnim + index * 280}ms` }}
                />
            </div>
            <div
                className={`line-${className} + " w-[10%] border-b border-${
                    theme === "light" ? "lines-light" : "lines-dark"
                } opacity-0 md:opacity-100`}
            ></div>
            <p className="dark:text-dark-text mt-[-20px] mb-5 md:mt-0 md:mb-16">
                {title}
            </p>
        </div>
    )
}

export default Beehives

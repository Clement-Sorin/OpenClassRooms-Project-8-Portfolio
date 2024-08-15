import { ReactComponent as Beehive } from "../../assets/svgs/beehive.svg"
import { useAppContext } from "../contexts/AppContext"

function Beehives({ logo, title, className, delayAnim, index }) {
    const { theme } = useAppContext()

    return (
        <div
            className={`mapped-technos ${className} fade-in flex flex-col mb-[-50px] md:mb-0`}
            style={{ animationDelay: `${delayAnim + index * 280}ms` }}
        >
            <div className="container-beehive relative flex items-center justify-center">
                <Beehive
                    className="beehive-techno w-[180px] md:w-[200px]"
                    fill={theme === "light" ? "#F5F5F5" : "#F5F5F5"}
                    stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                />
                <img
                    src={logo}
                    alt={title + " logo"}
                    className="logo-techno absolute max-w-[45%] max-h-[45%]"
                    style={{ animationDelay: `${delayAnim + index * 280}ms` }}
                />
            </div>
            <div
                className={`line-${className} + " w-[10%] border-b border-${
                    theme === "light" ? "lines-light" : "lines-dark"
                } opacity-0 md:opacity-100`}
            ></div>
            <p className="dark:text-dark-text">{title}</p>
        </div>
    )
}

export default Beehives

import { ReactComponent as Beehive } from "../../assets/svgs/beehive.svg"
import { useAppContext } from "../contexts/AppContext"

function Beehives({ logo, title, className, delayAnim, index }) {
    const { theme } = useAppContext()

    return (
        <div
            className={`mapped-technos ${className} fade-in flex flex-col`}
            style={{ animationDelay: `${delayAnim + index * 280}ms` }}
        >
            <div className="container-beehive relative flex items-center justify-center grayscale hover:grayscale-0">
                <Beehive
                    className="beehive-techno w-full"
                    fill="#F5F5F5"
                    stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                />
                <img
                    src={logo}
                    alt={title + " logo"}
                    className="logo-techno absolute max-w-[50%] max-h-[50%]"
                />
            </div>
            <div
                className={`line-${className} + " w-[10%] border border-${
                    theme === "light" ? "lines-light" : "lines-dark"
                }`}
            ></div>
            <p className="dark:text-dark-text">{title}</p>
        </div>
    )
}

export default Beehives

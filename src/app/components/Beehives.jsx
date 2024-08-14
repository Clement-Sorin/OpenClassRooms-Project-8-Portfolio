import { ReactComponent as Beehive } from "../../assets/svgs/beehive.svg"
import { useAppContext } from "../contexts/AppContext"

function Beehives({ logo, title }) {
    const { theme } = useAppContext()

    return (
        <div className="flex flex-col">
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
            <p>{title}</p>
        </div>
    )
}

export default Beehives

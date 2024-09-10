import { useAppContext } from "../contexts/AppContext"
import { ReactComponent as Beehive } from "../../assets/svgs/vertical-beehive.svg"

function Rates({ rateValue }) {
    const { theme } = useAppContext()

    return (
        <div className="flex gap-1">
            {Array.from({ length: rateValue }).map((_, index) => (
                <Beehive
                    key={index}
                    className="beehive-sm w-[17px]"
                    stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                    fill={theme === "light" ? "#757780" : "#E7DAE0"}
                />
            ))}
            {Array.from({ length: 5 - rateValue }).map((_, index) => (
                <Beehive
                    key={index}
                    className="beehive-sm w-[17px]"
                    stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                />
            ))}
        </div>
    )
}

export default Rates

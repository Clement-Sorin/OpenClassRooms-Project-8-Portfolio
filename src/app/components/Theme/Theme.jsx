import { ReactComponent as IconSun } from "../../../assets/icons/sun.svg"
import { ReactComponent as IconDark } from "../../../assets/icons/dark.svg"
import { Link } from "react-router-dom"
import { useAppContext } from "../../context/AppContext"

function Theme() {
    const { theme, changeTheme } = useAppContext()

    return (
        <div className="flex gap-2 items-center">
            <Link to="" onClick={() => changeTheme("light")}>
                <IconSun
                    width={25}
                    height={25}
                    stroke={theme === "light" ? "black" : "#F7F3F5"}
                    strokeWidth="2px"
                    fill={theme === "light" ? "black" : "#F7F3F5"}
                />
            </Link>
            <p className="dark:text-dark-text">/</p>
            <Link to="" onClick={() => changeTheme("dark")}>
                <IconDark
                    width={25}
                    height={25}
                    stroke={theme === "light" ? "black" : "#F7F3F5"}
                    strokeWidth="0px"
                    fill={theme === "light" ? "black" : "#F7F3F5"}
                />
            </Link>
        </div>
    )
}

export default Theme

import { ReactComponent as IconSun } from "../../assets/icons/sun.svg"
import { ReactComponent as IconDark } from "../../assets/icons/dark.svg"
import { Link } from "react-router-dom"
import { useAppContext } from "../contexts/AppContext"

function Theme() {
    const { theme, changeTheme } = useAppContext()

    return (
        <div className="flex gap-2 items-center">
            <button onClick={() => changeTheme("light")}>
                <IconSun
                    width={25}
                    height={25}
                    stroke={theme === "light" ? "black" : "#F7F3F5"}
                    strokeWidth="2px"
                    fill={theme === "light" ? "black" : "#F7F3F5"}
                    className={
                        theme === "light"
                            ? "transition-hover-svg-light"
                            : "transition-hover-svg-dark"
                    }
                />
            </button>
            <p className="dark:text-dark-text">/</p>
            <button onClick={() => changeTheme("dark")}>
                <IconDark
                    width={25}
                    height={25}
                    stroke={theme === "light" ? "black" : "#F7F3F5"}
                    strokeWidth="0px"
                    fill={theme === "light" ? "black" : "#F7F3F5"}
                    className={
                        theme === "light"
                            ? "transition-hover-svg-light"
                            : "transition-hover-svg-dark"
                    }
                />
            </button>
        </div>
    )
}

export default Theme

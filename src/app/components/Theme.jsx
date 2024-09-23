import { ReactComponent as IconSun } from "../../assets/icons/sun.svg"
import { ReactComponent as IconDark } from "../../assets/icons/dark.svg"
import { useAppContext } from "../contexts/AppContext"

function Theme({ menuMobileOn }) {
    const { theme, changeTheme } = useAppContext()

    const toggleMobileLight = () => {
        const html = document.querySelector("html")
        if (menuMobileOn) {
            changeTheme("light")
            setTimeout(() => {
                html.classList.add("overflow-y-hidden")
            }, 0)
        } else {
            setTimeout(() => {
                html.classList.remove("overflow-y-hidden")
            }, 0)
        }
    }

    const toggleMobileDark = () => {
        const html = document.querySelector("html")
        if (menuMobileOn) {
            changeTheme("dark")
            setTimeout(() => {
                html.classList.add("overflow-y-hidden")
            })
        } else {
            setTimeout(() => {
                html.classList.remove("overflow-y-hidden")
            })
        }
    }

    return (
        <div className="flex gap-2 items-center">
            <div
                onClick={() => {
                    if (window.innerWidth < 768) {
                        toggleMobileLight()
                    } else {
                        changeTheme("light")
                    }
                }}
            >
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
            </div>
            <p className="dark:text-dark-text">/</p>
            <div
                onClick={() => {
                    if (window.innerWidth < 768) {
                        toggleMobileDark()
                    } else {
                        changeTheme("dark")
                    }
                }}
            >
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
            </div>
        </div>
    )
}

export default Theme

import { ReactComponent as IconSetting } from "../../assets/icons/settings.svg"
import { useAppContext } from "../contexts/AppContext"
import { useState } from "react"
import Language from "./Language"
import Theme from "./Theme"

function MenuTablet({ landingScroll }) {
    const { theme } = useAppContext()
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggle = () => {
        setToggleMenu((prevState) => !prevState)
    }

    return (
        <>
            <button
                className="hidden md:block lg:hidden"
                onClick={handleToggle}
                aria-label="toggle menu button"
            >
                <IconSetting
                    width={25}
                    height={25}
                    fill={theme === "light" ? "black" : "#F7F3F5"}
                    className={`${
                        theme === "light"
                            ? "transition-hover-svg-light"
                            : "transition-hover-svg-dark"
                    } ${
                        toggleMenu === true
                            ? "menu-tablet-on"
                            : "menu-tablet-off"
                    }`}
                />
            </button>
            <div
                className={`${
                    toggleMenu === true
                        ? "menu-tablet-open dark:bg-dark-blue shadow-tablet-100"
                        : "menu-tablet-close dark:bg-dark-blue shadow-tablet-0"
                }  sm:hidden md:block lg:hidden relative`}
            >
                <div className="h-[15px] w-[150px] overflow-hidden absolute right-0 bg-light-grey+ dark:bg-dark-blue mt-[-15px]"></div>
                <div
                    className={`w-full h-full flex-col  justify-evenly items-center ${
                        toggleMenu === false
                            ? "flex opacity-0"
                            : "flex opacity-1 transition-opacity delay-150 duration-300 ease-in"
                    } }`}
                >
                    <Language />
                    <Theme />
                </div>
            </div>
        </>
    )
}

export default MenuTablet

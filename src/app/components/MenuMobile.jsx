import { useAppContext } from "../contexts/AppContext"
import { useState } from "react"
import Navbar from "./Navbar"
import Language from "./Language"
import Theme from "./Theme"

function MenuMobile() {
    const { theme } = useAppContext()
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggle = () => {
        setToggleMenu((prevState) => !prevState)
    }

    return (
        <>
            <button
                className="flex flex-col md:hidden w-6 gap-1 justify-around h-[25px] mr-5"
                onClick={handleToggle}
            >
                <div
                    className={`burg-top w-full h-1 ${
                        theme === "light" ? "bg-lines-light" : "bg-lines-dark"
                    } ${toggleMenu === true ? "burger-on" : "burger-off"}`}
                ></div>
                <div
                    className={`burg-mid w-full h-1 ${
                        theme === "light" ? "bg-lines-light" : "bg-lines-dark"
                    } ${toggleMenu === true ? "burger-on" : "burger-off"}`}
                ></div>
                <div
                    className={`burg-down w-full h-1 ${
                        theme === "light" ? "bg-lines-light" : "bg-lines-dark"
                    } ${toggleMenu === true ? "burger-on" : "burger-off"}`}
                ></div>
            </button>
            <div
                className={`${
                    toggleMenu === true
                        ? "menu-mobile-open dark:bg-dark-blue+"
                        : "menu-mobile-close dark:bg-dark-blue+"
                } sm:block md:hidden lg:hidden`}
            >
                <div
                    className={`hidden sm:flex flex-col justify-evenly items-center h-full w-full ${
                        toggleMenu === false
                            ? "opacity-0"
                            : "opacity-1 transition-opacity duration-300 ease-in"
                    }`}
                >
                    <Navbar
                        navMob={"flex flex-col w-full gap-10 items-center"}
                    />
                    <div className="flex flex-col gap-10 items-center options-mob pt-10 border-t-[1px] border-black border-lines-light dark:border-lines-dark">
                        <Language />
                        <Theme />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuMobile

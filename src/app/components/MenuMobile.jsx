import { useAppContext } from "../contexts/AppContext"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Language from "./Language"
import Theme from "./Theme"

function MenuMobile() {
    const { theme } = useAppContext()
    const [toggleMenu, setToggleMenu] = useState(false)
    const [startY, setStartY] = useState(0)
    const [translateY, setTranslateY] = useState(0)

    const handleToggle = () => {
        setToggleMenu((prevState) => !prevState)
    }

    useEffect(() => {
        const html = document.querySelector("html")
        if (toggleMenu) {
            html.classList.toggle("overflow-y-hidden")
            setTranslateY(0)
        } else {
            html.classList.remove("overflow-y-hidden")
            setTranslateY(-500)
        }
    }, [toggleMenu])

    // Swipe to close

    const handleTouchStart = (e) => {
        const touchStartY = e.touches[0].clientY
        setStartY(touchStartY)
    }

    const handleTouchMove = (e) => {
        const touchCurrentY = e.touches[0].clientY
        const moveY = (touchCurrentY - startY) * 5
        setTranslateY(Math.min(0, Math.max(-500, moveY)))
    }

    const handleTouchEnd = () => {
        if (translateY === 0) {
            setToggleMenu(true)
        } else if (translateY < -400) {
            setToggleMenu(false)
        }
    }

    console.log("toggleMenu", toggleMenu)

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
                        ? `menu-mobile-open dark:bg-dark-blue`
                        : "menu-mobile-close dark:bg-dark-blue"
                } sm:"" md:hidden lg:hidden`}
                style={{
                    transform: `translateY(${translateY}px)`,
                    transition: "transform 0.3s ease-in-out",
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
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
                        <Language menuMobileOn={toggleMenu} />
                        <Theme menuMobileOn={toggleMenu} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuMobile

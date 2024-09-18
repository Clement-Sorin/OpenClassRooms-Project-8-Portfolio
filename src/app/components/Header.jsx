import useIntersectionObserver from "../hooks/useIntersectionObserver"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Language from "./Language"
import Theme from "./Theme"
import Navbar from "./Navbar"
import MenuTablet from "./MenuTablet"
import MenuMobile from "./MenuMobile"

function Header() {
    const landingScroll = useIntersectionObserver("landing")
    const [toggleMenu, setToggleMenu] = useState(false)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => setLoaded(true), 100)
    }, [])

    const handleClick = () => {
        window.scrollTo(0, 0)
        setToggleMenu(false)
    }

    return (
        <header
            className={`sm:h-16 md:h-20 lg:h-24 z-20 fixed top-0 left-0 right-0 p-5 bg-light-grey+ dark:bg-dark-blue ${
                loaded
                    ? landingScroll
                        ? "shadow-head-0"
                        : "shadow-head-100"
                    : "shadow-head-0"
            }`}
        >
            <div className="h-full flex items-center justify-between">
                <Link
                    to="/"
                    onClick={handleClick}
                    className={`text-xl sm2:text-2xl text-red dark:text-yellow font-heading ${
                        loaded ? (landingScroll ? "opa-0" : "opa-100") : "opa-0"
                    }`}
                >
                    Clément_Sorin
                </Link>
                <div className="hidden md:block lg:block max-w-[50%] w-full">
                    <Navbar navTabDesk={"flex justify-between w-full"} />
                </div>
                <div className="hidden lg:flex gap-10">
                    <Language />
                    <Theme />
                </div>
                <MenuTablet landingScroll={landingScroll} />
                <MenuMobile
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
            </div>
        </header>
    )
}

export default Header

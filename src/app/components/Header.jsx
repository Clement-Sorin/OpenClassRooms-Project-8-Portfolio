import useScrollAnchor from "../hooks/useScrollAnchor"
import Language from "./Language"
import Theme from "./Theme"
import Navbar from "./Navbar"
import MenuTablet from "./MenuTablet"
import MenuMobile from "./MenuMobile"

function Header() {
    const firstScroll = useScrollAnchor("transition-1")

    return (
        <header
            className={`sm:h-16 md:h-20 lg:h-24 z-10 fixed top-0 left-0 right-0  p-5 bg-light-grey+ dark:bg-dark-blue ${
                !firstScroll ? "shadow-head-0" : "shadow-head-100"
            }`}
        >
            <div className="mw-auto h-full flex items-center justify-between">
                <p
                    className={`text-2xl text-red dark:text-yellow font-heading font-semibold  ${
                        !firstScroll ? "opa-0" : "opa-100"
                    }`}
                >
                    Clément Sorin
                </p>
                <div className="hidden md:block lg:block max-w-[50%] w-full">
                    <Navbar navTabDesk={"flex justify-between w-full"} />
                </div>
                <div className="hidden lg:flex gap-10">
                    <Language />
                    <Theme />
                </div>
                <MenuTablet />
                <MenuMobile />
            </div>
        </header>
    )
}

export default Header

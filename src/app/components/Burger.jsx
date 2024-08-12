import { useAppContext } from "../contexts/AppContext"
import { useState } from "react"

function Burger() {
    const { theme } = useAppContext()
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggle = () => {
        setToggleMenu((prevState) => !prevState)
    }

    return (
        <button
            className="flex flex-col md:hidden w-8 gap-1 justify-around h-[25px] mr-5"
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
    )
}

export default Burger

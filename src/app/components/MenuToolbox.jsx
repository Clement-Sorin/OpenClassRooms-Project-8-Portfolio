import { useState } from "react"
import { useAppContext } from "../contexts/AppContext"

function MenuToolbox({ datas, selectedTool, setSelectedTool }) {
    const { theme, language } = useAppContext()
    const menuData = datas.menu
    const [hoverButton, setHoverButton] = useState({ hovered: false, index: 0 })

    console.log(hoverButton)

    return (
        <div className="h-full p-4">
            <div
                className={`h-full border p-8 flex flex-col gap-5 ${
                    theme === "light" ? "border-black" : "border-lines-dark"
                }`}
            >
                {Object.entries(menuData).map(([key, value], index) => (
                    <div
                        key={index}
                        className={`btn-menu-toolbox h-12 border rounded-md flex justify-center items-center ${
                            theme === "light"
                                ? "border-black"
                                : "border-lines-dark"
                        } ${
                            selectedTool === index
                                ? theme === "light"
                                    ? "bg-light-grey+ font-semibold"
                                    : "bg-dark-blue font-semibold"
                                : ""
                        } ${
                            hoverButton.hovered === true &&
                            hoverButton.index === index &&
                            index !== selectedTool
                                ? theme === "light"
                                    ? "toolbox-button hovered-toolbox-button-light"
                                    : "toolbox-button hovered-toolbox-button-dark"
                                : "toolbox-button"
                        }`}
                        onClick={() => setSelectedTool(index)}
                        onMouseEnter={() =>
                            setHoverButton({ hovered: true, index: index })
                        }
                        onMouseLeave={() =>
                            setHoverButton({ hovered: false, index: 0 })
                        }
                    >
                        <p>{language === "fr" ? value.fr : value.en}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuToolbox

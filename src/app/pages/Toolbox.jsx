import { useState } from "react"
import { useAppContext } from "../contexts/AppContext"
import datas from "../../assets/datas/Toolbox.json"
import MenuToolbox from "../components/MenuToolbox"

function Toolbox() {
    const { theme, language } = useAppContext()
    const [selectedTool, setSelectedTool] = useState(0)

    return (
        <section
            className={`relative min-h-[calc(100vh-150px)] pt-16 md:pt-20 lg:pt-24 flex flex-col ${
                theme === "light"
                    ? "bg-light-grey text-black"
                    : "bg-dark-blue+ text-dark-text"
            }`}
        >
            <div className="flex justify-center p-5 md:p-8">
                <h1 className="text-2xl sm2:text-3xl md:text-[2.875rem]">
                    {language === "fr" ? datas.title.fr : datas.title.en}
                </h1>
            </div>
            <div className="flex flex-grow h-full mw-auto p-2">
                <div className="lg:min-w-[25%]">
                    <MenuToolbox
                        datas={datas}
                        selectedTool={selectedTool}
                        setSelectedTool={setSelectedTool}
                    />
                </div>
                <div id="content-toolbox" className="lg:min-w-[75%] p-4">
                    <div
                        className={`h-full border ${
                            theme === "light"
                                ? "border-black"
                                : "border-lines-dark"
                        }`}
                    ></div>
                </div>
            </div>
        </section>
    )
}

export default Toolbox

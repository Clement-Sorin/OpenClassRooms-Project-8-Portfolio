import { useState } from "react"
import { useAppContext } from "../contexts/AppContext"
import { ReactComponent as ArrowCollapse } from "../../assets/icons/arrow-collapse.svg"

function Collapse({ key, value, index }) {
    const { theme, language } = useAppContext()
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }
    return (
        <div key={index} id={key} className={!isOpen ? "h-[50px]" : ""}>
            <div
                onClick={toggleCollapse}
                className={`title-collapse relative w-[400px] flex items-center justify-between p-2 border-2 z-10 ${
                    theme === "light"
                        ? "border-lines-light bg-light-grey+"
                        : "border-lines-dark bg-dark-blue"
                } rounded-md`}
            >
                <p className="text-[20px]">
                    {language === "fr" ? value?.title.fr : value?.title.en}
                </p>
                <ArrowCollapse
                    fill={theme === "light" ? "#757780" : "#E7DAE0"}
                />
            </div>
            <div
                className={`content-collapse pl-1 pt-3 z-0 ${
                    isOpen
                        ? "collapse-open"
                        : "collapse-closed translate-y-[-100%] "
                }`}
            >
                {Object.entries(value?.data).map(([key, value], index) => (
                    <p key={index} className="flex gap-1">
                        {value?.subtitle ? (
                            <span className="font-bold">
                                {language === "fr"
                                    ? value?.subtitle.fr
                                    : value?.subtitle.en}
                            </span>
                        ) : (
                            ""
                        )}
                        {language === "fr" ? value?.value.fr : value?.value.en}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Collapse

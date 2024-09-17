import { useState } from "react"
import { useAppContext } from "../contexts/AppContext"
import { ReactComponent as ArrowCollapse } from "../../assets/icons/arrow-collapse.svg"

function Collapse({ propKey, value }) {
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
        <div
            id={propKey}
            className={`sm:w-[300px] sm2:w-[450px] md:w-[700px] ${
                !isOpen ? "collapse-closed" : "collapse-open"
            }`}
        >
            <div
                className={`relative z-10  ${
                    theme === "light"
                        ? "bg-light-grey text-black"
                        : "bg-dark-blue+ text-dark-text"
                }`}
            >
                <div
                    onClick={toggleCollapse}
                    className={`title-collapse w-full sm2:w-[450px] md:w-[700px] flex items-center justify-between p-2 border-2 ${
                        theme === "light"
                            ? "border-lines-light bg-light-grey+"
                            : "border-lines-dark bg-dark-blue"
                    } rounded-md`}
                >
                    <p className="text-[16px] md:text-[20px]">
                        {language === "fr" ? value?.title.fr : value?.title.en}
                    </p>
                    <ArrowCollapse
                        fill={theme === "light" ? "#757780" : "#E7DAE0"}
                        className={
                            isOpen
                                ? "arrow-collapse-open"
                                : "arrow-collapse-closed"
                        }
                    />
                </div>
            </div>
            <div
                className={`content-collapse pl-1 pt-3  ${
                    isOpen ? "content-collapse-open" : "content-collapse-closed"
                }`}
            >
                {Object.entries(value?.data).map(([key, value], index) => (
                    <p key={index} className="text-[14px] md:text-[16px]">
                        {value?.subtitle ? (
                            <span className="font-bold">
                                {language === "fr"
                                    ? value?.subtitle.fr
                                    : value?.subtitle.en}{" "}
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

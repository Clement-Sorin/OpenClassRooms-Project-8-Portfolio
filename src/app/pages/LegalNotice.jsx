import datas from "../../assets/datas/LegalNotice.json"
import { useAppContext } from "../contexts/AppContext"
import Collapse from "../components/Collapse"

function LegalNotice() {
    const { language, theme } = useAppContext()

    return (
        <section
            className={`relative h-full pt-16 md:pt-20 lg:pt-24 ${
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
            <div className="datas flex flex-col gap-5 px-2 pt-5 pb-8 sm2:p-10">
                {Object.entries(datas.data).map(([key, value], index) => (
                    <Collapse key={index} propKey={key} value={value} />
                ))}
            </div>
        </section>
    )
}

export default LegalNotice

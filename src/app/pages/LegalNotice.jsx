import datas from "../../assets/datas/LegalNotice.json"
import { useAppContext } from "../contexts/AppContext"
import Collapse from "../components/Collapse"

function LegalNotice() {
    const { language, theme } = useAppContext()

    return (
        <section
            className={`h-full mt-24 ${
                theme === "light"
                    ? "bg-light-grey text-black"
                    : "bg-dark-blue+ text-dark-text"
            }`}
        >
            <div className="flex justify-center p-8">
                <h1>{language === "fr" ? datas.title.fr : datas.title.en}</h1>
            </div>
            <div className="datas flex flex-col gap-5 p-10">
                {Object.entries(datas.data).map(([key, value], index) => (
                    <Collapse key={key} value={value} index={index} />
                ))}
            </div>
        </section>
    )
}

export default LegalNotice

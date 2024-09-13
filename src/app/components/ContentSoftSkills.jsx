import { useAppContext } from "../contexts/AppContext"
import Rates from "./Rates"

function ContentSoftSkills({ datas }) {
    const { theme, language } = useAppContext()
    const dataSoft = datas.soft_skills
    const softDetails = dataSoft.data

    return (
        <div
            className={`content-soft absolute top-3 sm2:top-0 pt-5 pl-9 pr-7 flex flex-col gap-6 w-full ${
                theme === "light" ? "" : "text-dark-text"
            }`}
        >
            <h2>{dataSoft.title}</h2>
            <div className="flex flex-col gap-2">
                {Object.entries(softDetails).map(([key, value], index) => (
                    <div key={index} className="flex justify-between">
                        <p className="text-content-profile text-sm">
                            {language === "fr" ? value?.title.fr : ""}
                            {language === "en" ? value?.title.en : ""}
                        </p>
                        <div>
                            <Rates rateValue={value?.rate} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContentSoftSkills

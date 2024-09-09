import { useAppContext } from "../contexts/AppContext"
import Rates from "./Rates"

function ContentHardSkills({ datas }) {
    const { theme, language } = useAppContext()
    const dataHard = datas.hard_skills
    const hardDetails = dataHard.data

    return (
        <div
            className={`content-profile absolute top-0 pt-5 pl-9 pr-7 flex flex-col gap-8 w-full ${
                theme === "light" ? "" : "text-dark-text"
            }`}
        >
            <h2>{dataHard.title}</h2>
            <div className="flex flex-col gap-3">
                {Object.entries(hardDetails).map(([key, value], index) => (
                    <div key={index} className="flex justify-between">
                        <p className="text-sm">{value?.title}</p>
                        <div>
                            <Rates rateValue={value?.rate} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContentHardSkills

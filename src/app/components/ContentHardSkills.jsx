import { useAppContext } from "../contexts/AppContext"
import Rates from "./Rates"

function ContentHardSkills({ datas, profileScroll }) {
    const { theme } = useAppContext()
    const dataHard = datas.hard_skills
    const hardDetails = dataHard.data

    return (
        <div
            className={`content-hard absolute sm:top-3 sm2:top-0 pt-5 pl-9 pr-7 flex flex-col gap-8 w-full ${
                theme === "light" ? "" : "text-dark-text"
            }`}
        >
            <h2
                className={`${
                    window.innerWidth > 450
                        ? profileScroll
                            ? "fade-in"
                            : "opacity-0"
                        : ""
                }`}
                style={{ animationDelay: "2.3s", animationDuration: "0.15s" }}
            >
                {dataHard.title}
            </h2>
            <div className="flex flex-col gap-3">
                {Object.entries(hardDetails).map(([key, value], index) => (
                    <div
                        key={index}
                        className={`flex justify-between ${
                            window.innerWidth > 450
                                ? profileScroll
                                    ? "fade-in"
                                    : "opacity-0"
                                : ""
                        }`}
                        style={{
                            animationDelay: `${2.4 + index * 0.07}s`,
                            animationDuration: "0.15s",
                        }}
                    >
                        <p className="text-content-profile text-sm">
                            {value?.title}
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

export default ContentHardSkills

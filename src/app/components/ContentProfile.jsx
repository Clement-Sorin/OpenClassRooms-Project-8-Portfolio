import { useAppContext } from "../contexts/AppContext"
import photoProfile from "../../assets/photos/ZFC_3073.png"
import { ReactComponent as Beehive } from "../../assets/svgs/vertical-beehive.svg"
import { ReactComponent as BeehiveLarge } from "../../assets/svgs/vertical-beehive-large.svg"

function ContentProfile({ datas }) {
    const dataProfile = datas.profile
    const profileDetails = dataProfile.data
    const { theme, language } = useAppContext()

    const age = () => {
        const birthday = new Date("1988-08-07")
        const today = new Date()
        let age = today.getFullYear() - birthday.getFullYear()
        const monthDifference = today.getMonth() - birthday.getMonth()
        const dayDifference = today.getDate() - birthday.getDate()

        if (
            monthDifference < 0 ||
            (monthDifference === 0 && dayDifference < 0)
        ) {
            age--
        }

        return age
    }

    return (
        <div
            className={`content-profile absolute top-0 p-5 flex flex-col gap-2 ${
                theme === "light" ? "" : "text-dark-text"
            }`}
        >
            <h2>
                {language === "fr"
                    ? `${dataProfile.title.fr}`
                    : `${dataProfile.title.en}`}
            </h2>
            <div className="flex justify-center relative h-[170px]">
                <BeehiveLarge
                    className="absolute"
                    width="170px"
                    height="170px"
                    stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                />
                <img
                    src={photoProfile}
                    alt="Clément Sorin profile"
                    className="absolute top-1/2 translate-y-[-50%] w-[155px] h-[155px]"
                ></img>
            </div>
            <div className=" flex flex-col gap-1 pr-1">
                {Object.entries(profileDetails).map(([key, value], index) => (
                    <div key={index} className="flex gap-2 items-start">
                        <Beehive
                            className="min-w-5 mt-[4px]"
                            stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                        />
                        <p>
                            <span className="font-bold">
                                {language === "fr" ? value?.title?.fr : ""}
                                {language === "en" ? value?.title?.en : ""}
                            </span>
                            {key === "age" ? (
                                <>
                                    <span>{age() + " "}</span>
                                    <span>
                                        {language === "fr"
                                            ? value?.data?.fr
                                            : ""}
                                        {language === "en"
                                            ? value?.data?.en
                                            : ""}
                                    </span>
                                </>
                            ) : (
                                <>
                                    {language === "fr" ? value?.data?.fr : ""}
                                    {language === "en" ? value?.data?.en : ""}
                                </>
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContentProfile

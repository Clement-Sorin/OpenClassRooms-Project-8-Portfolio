import { useAppContext } from "../contexts/AppContext"
import photoProfile from "../../assets/photos/ZFC_3073.webp"
import { ReactComponent as Beehive } from "../../assets/svgs/vertical-beehive.svg"
import { ReactComponent as BeehiveLarge } from "../../assets/svgs/vertical-beehive-large.svg"
import { useState } from "react"

function ContentProfile({ datas, profileScroll }) {
    const dataProfile = datas.profile
    const profileDetails = dataProfile.data
    const { theme, language, openModal } = useAppContext()
    const [isImageHovered, setIsImageHovered] = useState()

    const imageHoveredOn = () => {
        setIsImageHovered(true)
    }
    const imageHoveredOff = () => {
        setIsImageHovered(false)
    }

    const handleOpenModal = (event) => {
        openModal(event.currentTarget.id)
    }

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
            className={`content-profile h-full absolute top-3 sm2:top-0 p-5 flex flex-col gap-4 ${
                theme === "light" ? "" : "text-dark-text"
            }`}
        >
            <h2
                className={`pl-5 ${
                    window.innerWidth > 450
                        ? profileScroll
                            ? "fade-in"
                            : "opacity-0"
                        : ""
                }`}
                style={{ animationDelay: "0.5s", animationDuration: "0.15s" }}
            >
                {language === "fr"
                    ? `${dataProfile.title.fr}`
                    : `${dataProfile.title.en}`}
            </h2>
            <div
                className={`container-photo-profile flex justify-center relative h-[170px] ${
                    window.innerWidth > 450
                        ? profileScroll
                            ? "fade-in"
                            : "opacity-0"
                        : ""
                }`}
                style={{ animationDelay: "0.7s", animationDuration: "0.15s" }}
            >
                <BeehiveLarge
                    className={`frame-photo-profile absolute  ${
                        isImageHovered
                            ? theme === "dark"
                                ? "shadow-active delay-0"
                                : "shadow-active delay-0"
                            : ""
                    } ${
                        theme === "dark"
                            ? "drop-shadow-dark-image"
                            : "drop-shadow-light-image"
                    }`}
                    width="170px"
                    height="170px"
                    stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                    fill={theme === "light" ? "#FAFAFA" : "#0B3847"}
                />
                <img
                    id="profile-picture"
                    src={photoProfile}
                    alt="Clément Sorin profile"
                    className="photo-profile absolute top-1/2 translate-y-[-50%] w-[155px] h-[155px]"
                    onMouseEnter={imageHoveredOn}
                    onMouseLeave={imageHoveredOff}
                    onClick={handleOpenModal}
                ></img>
            </div>
            <div className={`flex flex-col gap-1 pr-1`}>
                {Object.entries(profileDetails).map(([key, value], index) => (
                    <div
                        key={index}
                        className={`text-content-profile flex gap-2 items-start text-sm ${
                            window.innerWidth > 450
                                ? profileScroll
                                    ? "fade-in"
                                    : "opacity-0"
                                : ""
                        }`}
                        style={{
                            animationDelay: `${0.8 + index * 0.1}s`,
                            animationDuration: "0.15s",
                        }}
                    >
                        <div className="sm:w-[13px] sm2:w-[17px]">
                            <Beehive
                                className="beehive-sm  mt-[4px]"
                                width="17px"
                                height="17"
                                stroke={
                                    theme === "light" ? "#757780" : "#E7DAE0"
                                }
                            />
                        </div>
                        <p className="text-content-profile">
                            <span className="font-bold ">
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

import { ReactComponent as FrameLarge } from "../../assets/svgs/profile-frame-big.svg"
import { ReactComponent as FrameSmall } from "../../assets/svgs/profile-frame-small.svg"
import { useAppContext } from "../contexts/AppContext"
import ContentProfile from "../components/ContentProfile"
import datas from "../../assets/datas/Profile.json"

function Profile() {
    const { theme } = useAppContext()

    return (
        <section
            id="profile"
            className={`snap-start snap-always h-screen w-full pt-24 ${
                theme === "light" ? "bg-light-grey" : "bg-dark-blue+"
            }`}
        >
            <div className="all-frames h-full flex flex-wrap justify-between items-center pl-10 pr-10">
                <div className="profile relative">
                    <FrameLarge
                        fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                        stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                        className={`${
                            theme === "dark" ? "drop-shadow-lg" : ""
                        }`}
                    ></FrameLarge>
                    <ContentProfile datas={datas} />
                </div>
                <div className="middle flex flex-col justify-between">
                    <div className="certifications">
                        <FrameSmall
                            fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                            stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                            className={theme === "dark" ? "drop-shadow-lg" : ""}
                        ></FrameSmall>
                    </div>
                    <div className="soft-skills">
                        <FrameSmall
                            fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                            stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                            className={theme === "dark" ? "drop-shadow-lg" : ""}
                        ></FrameSmall>
                    </div>
                </div>
                <div className="hard-skills">
                    <FrameLarge
                        fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                        stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                        className={theme === "dark" ? "drop-shadow-lg" : ""}
                    ></FrameLarge>
                </div>
            </div>
        </section>
    )
}

export default Profile

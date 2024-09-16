import { ReactComponent as FrameLarge } from "../../assets/svgs/profile-frame-big.svg"
import { ReactComponent as FrameSmall } from "../../assets/svgs/profile-frame-small.svg"
import { ReactComponent as FrameProfileSm } from "../../assets/svgs/frame-profile-sm.svg"
import { ReactComponent as FrameCertifSm } from "../../assets/svgs/frame-certif-sm.svg"
import { ReactComponent as FrameSoftSm } from "../../assets/svgs/frame-soft-sm.svg"
import { ReactComponent as FrameHardSm } from "../../assets/svgs/frame-hard-sm.svg"
import { useAppContext } from "../contexts/AppContext"
import datas from "../../assets/datas/Profile.json"
import ContentProfile from "../components/ContentProfile"
import ContentCertifications from "../components/ContentCertifications"
import ContentSoftSkills from "../components/ContentSoftSkills"
import ContentHardSkills from "../components/ContentHardSkills"

function Profile() {
    const { theme } = useAppContext()

    return (
        <section
            id="profile"
            className={`snap-proximity lg:snap-mandatory snap-start snap-always min-h-screen h-full w-full ${
                theme === "light" ? "bg-light-grey" : "bg-dark-blue+"
            }`}
        >
            <div className="all-frames min-h-screen mw-auto pt-24 flex flex-wrap justify-evenly items-center ">
                <div className="profile relative">
                    <FrameLarge
                        fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                        stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                        width="382"
                        height="581"
                        className={`frame-lg sm:hidden sm2:block ${
                            theme === "dark" ? "drop-shadow-lg" : ""
                        }`}
                    ></FrameLarge>
                    <FrameProfileSm
                        fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                        stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                        width="300"
                        className={`sm2:hidden ${
                            theme === "dark" ? "drop-shadow-lg" : ""
                        }`}
                    ></FrameProfileSm>
                    <ContentProfile datas={datas} />
                </div>
                <div className="middle flex flex-col justify-between">
                    <div className="certifications relative">
                        <FrameSmall
                            fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                            stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                            width="382"
                            height="290"
                            className={`frame-sm sm:hidden sm2:block ${
                                theme === "dark" ? "drop-shadow-lg" : ""
                            }`}
                        ></FrameSmall>
                        <FrameCertifSm
                            fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                            stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                            width="300"
                            className={`sm2:hidden ${
                                theme === "dark" ? "drop-shadow-lg" : ""
                            }`}
                        />
                        <ContentCertifications datas={datas} />
                    </div>
                    <div className="soft-skills relative">
                        <FrameSmall
                            fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                            stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                            width="382"
                            height="290"
                            className={`frame-sm sm:hidden sm2:block ${
                                theme === "dark" ? "drop-shadow-lg" : ""
                            }`}
                        ></FrameSmall>
                        <FrameSoftSm
                            fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                            stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                            width="300"
                            className={`sm2:hidden ${
                                theme === "dark" ? "drop-shadow-lg" : ""
                            }`}
                        />
                        <ContentSoftSkills datas={datas} />
                    </div>
                </div>
                <div className="hard-skills relative">
                    <FrameLarge
                        fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                        stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                        width="382"
                        height="581"
                        className={`frame-lg sm:hidden sm2:block ${
                            theme === "dark" ? "drop-shadow-lg" : ""
                        }`}
                    ></FrameLarge>
                    <FrameHardSm
                        fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                        stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                        width="300"
                        className={` sm2:hidden ${
                            theme === "dark" ? "drop-shadow-lg" : ""
                        }`}
                    />
                    <ContentHardSkills datas={datas} />
                </div>
            </div>
        </section>
    )
}

export default Profile

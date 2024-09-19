import { ReactComponent as FrameLarge } from "../../assets/svgs/profile-frame-big.svg"
import { ReactComponent as FrameSmall } from "../../assets/svgs/profile-frame-small.svg"
import { ReactComponent as FrameProfileSm } from "../../assets/svgs/frame-profile-sm.svg"
import { ReactComponent as FrameCertifSm } from "../../assets/svgs/frame-certif-sm.svg"
import { ReactComponent as FrameSoftSm } from "../../assets/svgs/frame-soft-sm.svg"
import { ReactComponent as FrameHardSm } from "../../assets/svgs/frame-hard-sm.svg"
import { useAppContext } from "../contexts/AppContext"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import datas from "../../assets/datas/Profile.json"
import ContentProfile from "../components/ContentProfile"
import ContentCertifications from "../components/ContentCertifications"
import ContentSoftSkills from "../components/ContentSoftSkills"
import ContentHardSkills from "../components/ContentHardSkills"

function Profile() {
    const { theme } = useAppContext()
    const profileScroll = useIntersectionObserver("profile")

    return (
        <section
            id="profile"
            className={`snap-start snap-always min-h-screen h-full w-full ${
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
                        className={`sm:hidden sm2:block ${
                            theme === "dark"
                                ? "drop-shadow-lg"
                                : "frame-profile"
                        } ${profileScroll ? "svg-path" : ""}`}
                    ></FrameLarge>
                    <FrameProfileSm
                        fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                        stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                        width="300"
                        className={`sm2:hidden ${
                            theme === "dark"
                                ? "drop-shadow-lg"
                                : "frame-profile "
                        }`}
                    ></FrameProfileSm>
                    <ContentProfile datas={datas} />
                </div>
                <div className="middle flex flex-col justify-between lg:gap-3">
                    <div className="certifications relative">
                        <FrameSmall
                            fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                            stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                            width="382"
                            height="290"
                            className={`sm:hidden sm2:block ${
                                theme === "dark"
                                    ? "drop-shadow-lg"
                                    : "frame-profile "
                            }`}
                        ></FrameSmall>
                        <FrameCertifSm
                            fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                            stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                            width="300"
                            className={`sm2:hidden ${
                                theme === "dark"
                                    ? "drop-shadow-lg"
                                    : "frame-profile "
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
                            className={`sm:hidden sm2:block ${
                                theme === "dark"
                                    ? "drop-shadow-lg"
                                    : "frame-profile "
                            }`}
                        ></FrameSmall>
                        <FrameSoftSm
                            fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                            stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                            width="300"
                            className={`sm2:hidden ${
                                theme === "dark"
                                    ? "drop-shadow-lg"
                                    : "frame-profile "
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
                        className={`sm:hidden sm2:block ${
                            theme === "dark"
                                ? "drop-shadow-lg"
                                : "frame-profile "
                        }`}
                    ></FrameLarge>
                    <FrameHardSm
                        fill={theme === "light" ? "#FaFaFa" : "#0B3847"}
                        stroke={theme === "light" ? "#757780" : "#E7DAE0"}
                        width="300"
                        className={`sm2:hidden ${
                            theme === "dark"
                                ? "drop-shadow-lg"
                                : "frame-profile "
                        }`}
                    />
                    <ContentHardSkills datas={datas} />
                </div>
            </div>
        </section>
    )
}

export default Profile

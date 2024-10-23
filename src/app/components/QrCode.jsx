import { useAppContext } from "../contexts/AppContext"
import { ReactComponent as FrameNameLgTL } from "../../assets/svgs/frame-name-lg-tl.svg"
import { ReactComponent as FrameNameLgBR } from "../../assets/svgs/frame-name-lg-br.svg"
import Cursor from "./Cursor"
import { useState } from "react"

function QrCode({ selectedTool, datas }) {
    const { language, theme } = useAppContext()
    const generalSettingsData = datas.content.qr_code.general_settings
    const [rangeValue, setRangeValue] = useState("")

    console.log(rangeValue)

    return (
        <div className={`${selectedTool === 0 ? "" : "hidden"} p-8`}>
            <form>
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl">
                        {language === "fr"
                            ? generalSettingsData.title.fr
                            : generalSettingsData.title.en}
                    </h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <label className="w-[150px]">
                                {language === "fr"
                                    ? generalSettingsData.url_data.fr
                                    : generalSettingsData.url_data.en}
                            </label>
                            <div className="relative flex justify-center items-center">
                                <input
                                    type="text"
                                    name="input-data"
                                    aria-label="data input field"
                                    className="absolute left-0 z-[2] w-[256px] bg-transparent outline-none p-2"
                                ></input>
                                <div className="z-[1]">
                                    <FrameNameLgTL
                                        className={`${
                                            window.innerWidth > 450
                                                ? "svg-path shadow-active"
                                                : "opa-0"
                                        } w-[250px]`}
                                        stroke={
                                            theme === "light"
                                                ? "#757780"
                                                : "#E7DAE0"
                                        }
                                        strokeDasharray="2000"
                                        strokeDashoffset={
                                            window.innerWidth > 450
                                                ? "2000"
                                                : "0"
                                        }
                                        style={{
                                            animationDelay: "0.5s",
                                            animationDuration: "5s",
                                        }}
                                    />
                                    <FrameNameLgBR
                                        className={`absolute top-0 left-2 ${
                                            window.innerWidth > 450
                                                ? "svg-path shadow-active"
                                                : "opa-0"
                                        } w-[250px]`}
                                        stroke={
                                            theme === "light"
                                                ? "#757780"
                                                : "#E7DAE0"
                                        }
                                        strokeDasharray="2000"
                                        strokeDashoffset={
                                            window.innerWidth > 450
                                                ? "2000"
                                                : "0"
                                        }
                                        style={{
                                            animationDelay: "0.5s",
                                            animationDuration: "5s",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <label className="w-[150px]">
                                {language === "fr"
                                    ? generalSettingsData.size.title.fr
                                    : generalSettingsData.size.title.en}
                            </label>
                            <Cursor
                                dataName={generalSettingsData.size.id}
                                maxLength={
                                    generalSettingsData.size.set_size.length
                                }
                                defaultValue={3}
                                dataArray={generalSettingsData.size.set_size}
                                setRangeValue={setRangeValue}
                            />
                        </div>
                        <div className="flex items-center">
                            <label className="w-[150px]">
                                {language === "fr"
                                    ? generalSettingsData.logo.fr
                                    : generalSettingsData.logo.en}
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default QrCode

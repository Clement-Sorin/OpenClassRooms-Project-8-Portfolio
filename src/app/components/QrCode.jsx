import { useAppContext } from "../contexts/AppContext"
import { ReactComponent as FrameNameLgTL } from "../../assets/svgs/frame-name-lg-tl.svg"
import { ReactComponent as FrameNameLgBR } from "../../assets/svgs/frame-name-lg-br.svg"
import { ReactComponent as SubmitFrame } from "../../assets/svgs/frame-submit.svg"
import Cursor from "./Cursor"
import { useEffect, useRef, useState } from "react"
import QrCanvas from "./QrCanvas"
import cs from "../../assets/icons/cs.png"

function QrCode({ selectedTool, datas }) {
    const { language, theme } = useAppContext()
    const generalSettingsData = datas.content.qr_code.general_settings
    const otherSettings = datas.content.qr_code.other_settings
    const formRef = useRef(null)
    const [urlData, setUrlData] = useState("")
    const [rangeValue, setRangeValue] = useState({
        dataName: "",
        value: {
            width: "",
            height: "",
        },
    })
    const [canvasSize, setCanvasSize] = useState({
        width: 400,
        height: 400,
    })
    const browseInput = useRef(null)
    const [qrData, setQrData] = useState({
        data: "exemple.com",
        width: canvasSize.width,
        height: canvasSize.height,
        image: cs,
    })

    const handleUrlData = (event) => {
        setUrlData(event.target.value)
    }

    useEffect(() => {
        if (rangeValue.dataName === "canvas_size") {
            setCanvasSize({
                width: rangeValue.value.width,
                height: rangeValue.value.height,
            })
        }
    }, [rangeValue])

    useEffect(() => {
        setQrData((prevQrData) => ({
            ...prevQrData,
            data: urlData,
            width: canvasSize.width,
            height: canvasSize.height,
        }))
    }, [urlData, canvasSize])

    console.log("qrData", qrData)

    return (
        <div className={`${selectedTool === 0 ? "" : "hidden"} p-8`}>
            <form ref={formRef}>
                <div className="flex justify-between">
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
                                        name="data"
                                        aria-label="data input field"
                                        className="absolute left-0 z-[2] w-[256px] bg-transparent outline-none p-2"
                                        onChange={handleUrlData}
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
                                    dataArray={
                                        generalSettingsData.size.set_size
                                    }
                                    setRangeValue={setRangeValue}
                                />
                            </div>
                            <div className="flex items-center">
                                <label className="w-[150px]">
                                    {language === "fr"
                                        ? generalSettingsData.logo.title.fr
                                        : generalSettingsData.logo.title.en}
                                </label>
                                <input
                                    ref={browseInput}
                                    type="file"
                                    name="image"
                                    accept=".jpg,.png"
                                    className="hidden"
                                />
                                <div
                                    className="flex justify-center items-center "
                                    onClick={() => browseInput.current.click()}
                                >
                                    <SubmitFrame
                                        className="w-[130px]"
                                        stroke={
                                            theme === "light"
                                                ? "#757780"
                                                : "#E7DAE0"
                                        }
                                        fill={
                                            theme === "light"
                                                ? "#FAFAFA"
                                                : "#0B3847"
                                        }
                                    />
                                    <p className="absolute hover:transition-font">
                                        {language === "fr"
                                            ? generalSettingsData.logo.input.fr
                                            : generalSettingsData.logo.input.en}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <QrCanvas qrData={qrData} />
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl">
                        {language === "fr"
                            ? otherSettings.title.fr
                            : otherSettings.title.en}
                    </h2>
                    <div className="flex flex-col gap-4"></div>
                </div>
            </form>
        </div>
    )
}

export default QrCode

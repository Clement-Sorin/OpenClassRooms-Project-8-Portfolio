import { useAppContext } from "../contexts/AppContext"
import { ReactComponent as FrameName } from "../../assets/svgs/frame-contact-name.svg"
import { ReactComponent as FrameMessage } from "../../assets/svgs/frame-contact-message.svg"
import { ReactComponent as FrameSubmit } from "../../assets/svgs/frame-submit.svg"
import { ReactComponent as FrameMessageSm2 } from "../../assets/svgs/frame-message-sm2.svg"
import { ReactComponent as FrameMessageSm } from "../../assets/svgs/frame-message-sm.svg"
import { useState } from "react"
import datas from "../../assets/datas/Contact.json"

function Contact() {
    const { theme, language } = useAppContext()
    const [isHovered, setIsHovered] = useState()
    const [result, setResult] = useState("")
    const [isNameRight, setIsNameRight] = useState(true)
    const [isNameFilled, setIsNameFilled] = useState(false)
    const [isEmailRight, setIsEmailRight] = useState(true)
    const [isEmailFilled, setIsEmailFilled] = useState(false)
    const [isMessageRight, setIsMessageRight] = useState(true)
    const [isMessageFilled, setIsMessageFilled] = useState(false)

    const changeButtonColor = () => {
        setIsHovered(true)
    }
    const removeButtonColor = () => {
        setIsHovered(false)
    }

    // Regex check

    const checkInputName = (event) => {
        setIsNameRight(false)
        const value = event.target.value.trim()
        const regex = new RegExp("[a-z]{4,}")
        let result = regex.test(value)
        if (!result) {
            setIsNameFilled(false)
            setIsNameRight(false)
        }
        if (result) {
            setIsNameFilled(true)
            setIsNameRight(true)
        }
        if (value === "") {
            setIsNameFilled(false)
            setIsNameRight(true)
        }
    }

    const checkInputEmail = (event) => {
        setIsEmailRight(false)
        const value = event.target.value.trim()
        const regex = new RegExp(
            "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
        )
        let result = regex.test(value)
        if (!result) {
            setIsEmailFilled(false)
            setIsEmailRight(false)
        }
        if (result) {
            setIsEmailFilled(true)
            setIsEmailRight(true)
        }
        if (value === "") {
            setIsEmailFilled(false)
            setIsEmailRight(true)
        }
    }

    const checkInputMessage = (event) => {
        setIsMessageRight(false)
        const value = event.target.value.trim().replace(/\s+/g, "")
        const regex = new RegExp("[a-zA-Z]{10,}")
        let result = regex.test(value)
        if (!result) {
            setIsMessageFilled(false)
            setIsMessageRight(false)
        }
        if (result) {
            setIsMessageFilled(true)
            setIsMessageRight(true)
        }
        if (value === "") {
            setIsMessageFilled(false)
            setIsMessageRight(true)
        }
    }

    // Submit

    const onSubmit = async (event) => {
        event.preventDefault()

        if (
            isNameFilled &&
            isEmailFilled &&
            isMessageFilled &&
            isNameRight &&
            isEmailRight &&
            isMessageRight
        ) {
            setResult(language === "fr" ? "envoi..." : "sending...")
            const formData = new FormData(event.target)

            formData.append("access_key", process.env.REACT_APP_WEB3FORM_KEY)

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            })

            const data = await response.json()
            if (data.success) {
                setResult(
                    language === "fr"
                        ? "Votre message a bien été envoyé"
                        : "Form Submitted Successfully"
                )
                setTimeout(() => {
                    setResult("")
                }, 5000)
                event.target.reset()
            } else {
                console.log("Error", data)
                setResult(
                    language === "fr"
                        ? "Il y a eu une erreur dans l'envoi de votre message"
                        : "Form Submition failed"
                )
                setTimeout(() => {
                    setResult("")
                }, 5000)
            }
        } else {
            setResult(
                language === "fr"
                    ? datas.wrong_submit_value.fr
                    : datas.wrong_submit_value.en
            )
            setTimeout(() => {
                setResult("")
            }, 5000)
        }
    }

    return (
        <section
            id="contact"
            className={`snap-start snap-always min-h-[80vh] h-full w-full ${
                theme === "light" ? "bg-light-grey" : "bg-dark-blue+"
            }`}
        >
            <div className="container-contact min-h-[80vh] w-full flex justify-center items-center lg:pt-24">
                <form onSubmit={onSubmit} action="/submit" method="post">
                    <h2 className="text-center my-8 lg:hidden">
                        {datas.title}
                    </h2>
                    <div
                        className={`container-form flex flex-col pb-16 md:pb-0 ${
                            theme === "light" ? "text-black" : "text-dark-text"
                        }`}
                    >
                        <div className="contact-name flex sm:flex-col sm:gap-2 md:flex-row justify-between">
                            <label
                                htmlFor="input-name"
                                className="label text-[16px] md:text-xl"
                            >
                                {language === "fr"
                                    ? datas.name.fr
                                    : datas.name.en}
                            </label>
                            <div className="input-name md:w-[500px] relative flex flex-col justify-start">
                                <input
                                    type="text"
                                    name="name"
                                    id="input-name"
                                    className="absolute w-[302px] h-[52px] bg-transparent outline-none p-2"
                                    aria-label="name input field"
                                    onBlur={checkInputName}
                                ></input>
                                <FrameName
                                    stroke={
                                        theme === "light"
                                            ? isNameRight
                                                ? "#757780"
                                                : "#E3170A"
                                            : isNameRight
                                            ? "#E7DAE0"
                                            : "#CFD11A"
                                    }
                                    width="302"
                                    height="52"
                                    className="frame-contact-name "
                                />
                                <p
                                    className={`min-h-6 text-center w-[302px] text-sm md:text-base ${
                                        !isNameRight ? "opa-100" : "opa-0"
                                    } ${
                                        theme === "light"
                                            ? "text-red"
                                            : "text-yellow"
                                    }`}
                                >
                                    {!isNameRight
                                        ? language === "fr"
                                            ? datas.wrong_name_value.fr
                                            : datas.wrong_name_value.en
                                        : ""}
                                </p>
                            </div>
                        </div>
                        <div className="contact-email flex sm:flex-col sm:gap-2 md:flex-row justify-between">
                            <label
                                htmlFor="input-email"
                                className="label text-[16px] md:text-xl"
                            >
                                {language === "fr"
                                    ? datas.email.fr
                                    : datas.email.en}
                            </label>
                            <div className="input-email relative md:w-[500px] flex flex-col justify-start">
                                <input
                                    type="email"
                                    name="email"
                                    id="input-email"
                                    className="absolute w-[302px] h-[52px] bg-transparent outline-none p-2"
                                    aria-label="email input field"
                                    onBlur={checkInputEmail}
                                ></input>
                                <FrameName
                                    stroke={
                                        theme === "light"
                                            ? isEmailRight
                                                ? "#757780"
                                                : "#E3170A"
                                            : isEmailRight
                                            ? "#E7DAE0"
                                            : "#CFD11A"
                                    }
                                    width="302"
                                    height="52"
                                    className="frame-contact-name "
                                />
                                <p
                                    className={`min-h-6 text-center w-[302px] ${
                                        !isEmailRight ? "opa-100" : "opa-0"
                                    } ${
                                        theme === "light"
                                            ? "text-red"
                                            : "text-yellow"
                                    }`}
                                >
                                    {!isEmailRight
                                        ? language === "fr"
                                            ? datas.wrong_email_value.fr
                                            : datas.wrong_email_value.en
                                        : ""}
                                </p>
                            </div>
                        </div>
                        <div className="contact-message flex sm:flex-col sm:gap-2 md:flex-row justify-between md:gap-10">
                            <label
                                htmlFor="area-message"
                                className="label text-[16px] md:text-xl"
                            >
                                {language === "fr"
                                    ? datas.message.fr
                                    : datas.message.en}
                            </label>
                            <div className="container-message relative flex flex-col justify-start">
                                <textarea
                                    name="message"
                                    id="area-message"
                                    className="absolute w-[302px] h-[269px] sm2:w-[383px] sm2:h-[266px] md:w-[499px] md:h-[182px] bg-transparent outline-none p-2 resize-none"
                                    aria-label="message input field"
                                    onBlur={checkInputMessage}
                                ></textarea>
                                <FrameMessage
                                    stroke={
                                        theme === "light"
                                            ? isMessageRight
                                                ? "#757780"
                                                : "#E3170A"
                                            : isMessageRight
                                            ? "#E7DAE0"
                                            : "#CFD11A"
                                    }
                                    width="499"
                                    height="182"
                                    className="frame-contact-message hidden md:block"
                                />
                                <FrameMessageSm2
                                    stroke={
                                        theme === "light"
                                            ? isMessageRight
                                                ? "#757780"
                                                : "#E3170A"
                                            : isMessageRight
                                            ? "#E7DAE0"
                                            : "#CFD11A"
                                    }
                                    className="hidden sm2:block md:hidden"
                                />
                                <FrameMessageSm
                                    stroke={
                                        theme === "light"
                                            ? isMessageRight
                                                ? "#757780"
                                                : "#E3170A"
                                            : isMessageRight
                                            ? "#E7DAE0"
                                            : "#CFD11A"
                                    }
                                    className="block sm2:hidden"
                                />
                                <p
                                    className={`min-h-8 text-center w-[302px] ${
                                        !isMessageRight ? "opa-100" : "opa-0"
                                    } ${
                                        theme === "light"
                                            ? "text-red"
                                            : "text-yellow"
                                    }`}
                                >
                                    {!isMessageRight
                                        ? language === "fr"
                                            ? datas.wrong_message_value.fr
                                            : datas.wrong_message_value.en
                                        : ""}
                                </p>
                            </div>
                        </div>
                        <div className="contact-sumbit relative flex justify-center group">
                            <input
                                type="submit"
                                value={
                                    language === "fr"
                                        ? datas.submit.fr
                                        : datas.submit.en
                                }
                                aria-label="send message form"
                                className={`${
                                    isHovered
                                        ? theme === "light"
                                            ? "input-submit-hovered-lt"
                                            : "input-submit-hovered-dk"
                                        : theme === "light"
                                        ? "input-submit-lt"
                                        : "input-submit-dk"
                                } text-[16px] md:text-lg absolute w-[124px] h-[36px]`}
                                onMouseEnter={changeButtonColor}
                                onMouseLeave={removeButtonColor}
                            ></input>
                            <FrameSubmit
                                className={`${
                                    isHovered
                                        ? theme === "light"
                                            ? "frame-submit-hovered-lt"
                                            : "frame-submit-hovered-dk"
                                        : theme === "light"
                                        ? "frame-submit-lt"
                                        : "frame-submit-dk"
                                } w-[124px]`}
                            />
                        </div>
                        <p
                            className={`text-center h-8 py-5 ${
                                !isNameFilled ||
                                !isEmailFilled ||
                                !isMessageFilled
                                    ? theme === "light"
                                        ? "text-red"
                                        : "text-yellow"
                                    : ""
                            } ${result === "" ? "opa-0" : "opa-100"}`}
                        >
                            {result}
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact

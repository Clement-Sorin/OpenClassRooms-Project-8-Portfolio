import { useAppContext } from "../contexts/AppContext"
import { ReactComponent as FrameSubmit } from "../../assets/svgs/frame-submit.svg"
import { ReactComponent as FrameNameLgTL } from "../../assets/svgs/frame-name-lg-tl.svg"
import { ReactComponent as FrameNameLgBR } from "../../assets/svgs/frame-name-lg-br.svg"
import { ReactComponent as FrameMessageLgTL } from "../../assets/svgs/frame-message-lg-tl.svg"
import { ReactComponent as FrameMessageLgBR } from "../../assets/svgs/frame-message-lg-br.svg"
import { ReactComponent as FrameMessageSm2TL } from "../../assets/svgs/frame-message-sm2-tl.svg"
import { ReactComponent as FrameMessageSm2BR } from "../../assets/svgs/frame-message-sm2-br.svg"
import { ReactComponent as FrameMessageSmTL } from "../../assets/svgs/frame-message-sm-tl.svg"
import { ReactComponent as FrameMessageSmBR } from "../../assets/svgs/frame-message-sm-br.svg"
import { useState } from "react"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
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
    const contactScroll = useIntersectionObserver("contact")

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
            "^[a-zA-Z0-9._%+-]+[@]+[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,}$"
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
            className={`snap-start snap-always pt-24 h-full min-h-[80vh] w-full flex flex-col justify-center ${
                theme === "light"
                    ? "bg-light-grey"
                    : "bg-dark-blue+ text-dark-text"
            }`}
        >
            <div className="container-contact h-full w-full flex flex-col justify-end items-center">
                <form onSubmit={onSubmit} action="/submit" method="post">
                    <h2
                        className={`text-center my-8 lg:hidden ${
                            window.innerWidth > 450
                                ? contactScroll
                                    ? "opacity-100 transition-opacity duration-500 delay-200"
                                    : "opacity-0"
                                : ""
                        }`}
                    >
                        {datas.title}
                    </h2>
                    <div
                        className={`container-form flex flex-col ${
                            theme === "light" ? "text-black" : "text-dark-text"
                        }`}
                    >
                        <div className="contact-name flex sm:flex-col sm:gap-2 md:flex-row justify-between">
                            <label
                                htmlFor="input-name"
                                className={`label text-[16px] md:text-xl ${
                                    window.innerWidth > 450
                                        ? contactScroll
                                            ? "opacity-100 transition-opacity duration-500 delay-500"
                                            : "opacity-0"
                                        : ""
                                }`}
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
                                    className="absolute w-[302px] h-[52px] bg-transparent outline-none p-2 z-[2]"
                                    aria-label="name input field"
                                    onBlur={checkInputName}
                                ></input>
                                <div className="z-[1]">
                                    <FrameNameLgTL
                                        className={`${
                                            window.innerWidth > 450
                                                ? contactScroll
                                                    ? "svg-path shadow-active"
                                                    : "opa-0"
                                                : ""
                                        }`}
                                        stroke={
                                            theme === "light"
                                                ? isNameRight
                                                    ? "#757780"
                                                    : "#E3170A"
                                                : isNameRight
                                                ? "#E7DAE0"
                                                : "#CFD11A"
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
                                                ? contactScroll
                                                    ? "svg-path shadow-active"
                                                    : "opa-0"
                                                : ""
                                        }`}
                                        stroke={
                                            theme === "light"
                                                ? isNameRight
                                                    ? "#757780"
                                                    : "#E3170A"
                                                : isNameRight
                                                ? "#E7DAE0"
                                                : "#CFD11A"
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
                                className={`label text-[16px] md:text-xl ${
                                    window.innerWidth > 450
                                        ? contactScroll
                                            ? "opacity-100 transition-opacity duration-500 delay-[0.8s]"
                                            : "opacity-0"
                                        : ""
                                }`}
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
                                    className="absolute w-[302px] h-[52px] bg-transparent outline-none p-2 z-[2]"
                                    aria-label="email input field"
                                    onBlur={checkInputEmail}
                                ></input>
                                <div className="z-[1]">
                                    <FrameNameLgTL
                                        className={`${
                                            window.innerWidth > 450
                                                ? contactScroll
                                                    ? "svg-path shadow-active"
                                                    : "opa-0"
                                                : ""
                                        }`}
                                        stroke={
                                            theme === "light"
                                                ? isEmailRight
                                                    ? "#757780"
                                                    : "#E3170A"
                                                : isEmailRight
                                                ? "#E7DAE0"
                                                : "#CFD11A"
                                        }
                                        strokeDasharray="2000"
                                        strokeDashoffset={
                                            window.innerWidth > 450
                                                ? "2000"
                                                : "0"
                                        }
                                        style={{
                                            animationDelay: "0.8s",
                                            animationDuration: "5s",
                                        }}
                                    />
                                    <FrameNameLgBR
                                        className={`absolute top-0 left-2 ${
                                            window.innerWidth > 450
                                                ? contactScroll
                                                    ? "svg-path shadow-active"
                                                    : "opa-0"
                                                : ""
                                        }`}
                                        stroke={
                                            theme === "light"
                                                ? isEmailRight
                                                    ? "#757780"
                                                    : "#E3170A"
                                                : isEmailRight
                                                ? "#E7DAE0"
                                                : "#CFD11A"
                                        }
                                        strokeDasharray="2000"
                                        strokeDashoffset={
                                            window.innerWidth > 450
                                                ? "2000"
                                                : "0"
                                        }
                                        style={{
                                            animationDelay: "0.8s",
                                            animationDuration: "5s",
                                        }}
                                    />
                                </div>
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
                                className={`label text-[16px] md:text-xl ${
                                    window.innerWidth > 450
                                        ? contactScroll
                                            ? "opacity-100 transition-opacity duration-500 delay-[1.1s]"
                                            : "opacity-0"
                                        : ""
                                }`}
                            >
                                {language === "fr"
                                    ? datas.message.fr
                                    : datas.message.en}
                            </label>
                            <div className="container-message relative flex flex-col justify-start">
                                <textarea
                                    name="message"
                                    id="area-message"
                                    className="absolute w-[302px] h-[269px] sm2:w-[383px] sm2:h-[266px] md:w-[499px] md:h-[182px] bg-transparent outline-none p-2 resize-none z-[2]"
                                    aria-label="message input field"
                                    onBlur={checkInputMessage}
                                ></textarea>
                                <div className="z-[1] hidden md:block relative left-[-10px]">
                                    <FrameMessageLgTL
                                        className={`${
                                            contactScroll
                                                ? "svg-path shadow-active"
                                                : "opa-0"
                                        }`}
                                        stroke={
                                            theme === "light"
                                                ? isMessageRight
                                                    ? "#757780"
                                                    : "#E3170A"
                                                : isMessageRight
                                                ? "#E7DAE0"
                                                : "#CFD11A"
                                        }
                                        strokeDasharray="2000"
                                        strokeDashoffset="2000"
                                        style={{
                                            animationDelay: "1.1s",
                                            animationDuration: "5s",
                                        }}
                                    />
                                    <FrameMessageLgBR
                                        className={`absolute top-0 left-3 ${
                                            contactScroll
                                                ? "svg-path shadow-active"
                                                : "opa-0"
                                        }`}
                                        stroke={
                                            theme === "light"
                                                ? isMessageRight
                                                    ? "#757780"
                                                    : "#E3170A"
                                                : isMessageRight
                                                ? "#E7DAE0"
                                                : "#CFD11A"
                                        }
                                        strokeDasharray="2000"
                                        strokeDashoffset="2000"
                                        style={{
                                            animationDelay: "1.1s",
                                            animationDuration: "5s",
                                        }}
                                    />
                                </div>
                                <div className="z-[1] hidden sm2:block md:hidden ">
                                    <FrameMessageSm2TL
                                        className={`${
                                            contactScroll
                                                ? "svg-path shadow-active"
                                                : "opa-0"
                                        }`}
                                        stroke={
                                            theme === "light"
                                                ? isMessageRight
                                                    ? "#757780"
                                                    : "#E3170A"
                                                : isMessageRight
                                                ? "#E7DAE0"
                                                : "#CFD11A"
                                        }
                                        strokeDasharray="2000"
                                        strokeDashoffset="2000"
                                        style={{
                                            animationDelay: "1.1s",
                                            animationDuration: "5s",
                                        }}
                                    />
                                    <FrameMessageSm2BR
                                        className={`absolute top-0 left-3 ${
                                            contactScroll
                                                ? "svg-path shadow-active"
                                                : "opa-0"
                                        }`}
                                        stroke={
                                            theme === "light"
                                                ? isMessageRight
                                                    ? "#757780"
                                                    : "#E3170A"
                                                : isMessageRight
                                                ? "#E7DAE0"
                                                : "#CFD11A"
                                        }
                                        strokeDasharray="2000"
                                        strokeDashoffset="2000"
                                        style={{
                                            animationDelay: "1.1s",
                                            animationDuration: "5s",
                                        }}
                                    />
                                </div>
                                <div className="z-[1] block sm2:hidden">
                                    <FrameMessageSmTL
                                        stroke={
                                            theme === "light"
                                                ? isMessageRight
                                                    ? "#757780"
                                                    : "#E3170A"
                                                : isMessageRight
                                                ? "#E7DAE0"
                                                : "#CFD11A"
                                        }
                                        strokeDasharray="2000"
                                        strokeDashoffset="0"
                                    />
                                    <FrameMessageSmBR
                                        className={`absolute top-0 left-3`}
                                        stroke={
                                            theme === "light"
                                                ? isMessageRight
                                                    ? "#757780"
                                                    : "#E3170A"
                                                : isMessageRight
                                                ? "#E7DAE0"
                                                : "#CFD11A"
                                        }
                                        strokeDasharray="2000"
                                        strokeDashoffset="0"
                                    />
                                </div>
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
                            <div
                                className={
                                    window.innerWidth > 450
                                        ? contactScroll
                                            ? "opacity-100 transition-opacity duration-500 delay-[2.3s]"
                                            : "opacity-0"
                                        : ""
                                }
                            >
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
                            </div>
                            <FrameSubmit
                                className={`${
                                    isHovered
                                        ? theme === "light"
                                            ? "frame-submit-hovered-lt"
                                            : "frame-submit-hovered-dk"
                                        : theme === "light"
                                        ? "frame-submit-lt"
                                        : "frame-submit-dk"
                                } ${
                                    window.innerWidth > 450
                                        ? contactScroll
                                            ? "svg-path shadow-active"
                                            : "opa-0"
                                        : ""
                                } w-[124px]`}
                                strokeDasharray={
                                    window.innerWidth > 450 ? "2000" : "0"
                                }
                                style={{
                                    animationDelay: "1.8s",
                                    animationDuration: "5s",
                                }}
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
                <div className="sm:m-8 sm2:hidden">
                    <p className="sm2:hidden text-red dark:text-yellow">
                        <span className="font-bold">Note : </span>
                        {language === "fr"
                            ? datas.mobile_note.fr
                            : datas.mobile_note.en}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contact

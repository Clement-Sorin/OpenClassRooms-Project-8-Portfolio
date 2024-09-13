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

    const changeButtonColor = () => {
        setIsHovered(true)
    }
    const removeButtonColor = () => {
        setIsHovered(false)
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        setResult("Sending....")
        const formData = new FormData(event.target)

        formData.append("access_key", process.env.REACT_APP_WEB3FORM_KEY)

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        })

        const data = await response.json()

        if (data.success) {
            setResult("Form Submitted Successfully")
            event.target.reset()
        } else {
            console.log("Error", data)
            setResult(data.message)
        }
    }

    return (
        <section
            id="contact"
            className={`snap-proximity lg:snap-mandatory snap-start snap-always min-h-[80vh] h-full w-full ${
                theme === "light" ? "bg-light-grey" : "bg-dark-blue+"
            }`}
        >
            <div className="container-contact min-h-[80vh] w-full flex justify-center items-center pt-24">
                <form onSubmit={onSubmit} action="/submit" method="post">
                    <div
                        className={`container-form flex flex-col gap-5 pb-16 md:pb-0 ${
                            theme === "light" ? "text-black" : "text-dark-text"
                        }`}
                    >
                        <div className="contact-name flex sm:flex-col sm:gap-2 md:flex-row justify-between">
                            <label
                                htmlFor="input-name"
                                className="label text-lg md:text-xl"
                            >
                                {language === "fr"
                                    ? datas.name.fr
                                    : datas.name.en}
                            </label>
                            <div className="input-name md:w-[500px] relative flex justify-start">
                                <input
                                    type="text"
                                    name="name"
                                    id="input-name"
                                    required
                                    className="absolute w-[302px] h-[52px] bg-transparent outline-none p-2 h-[52px]"
                                    aria-label="name input field"
                                    aria-required="true"
                                ></input>
                                <FrameName
                                    stroke={
                                        theme === "light"
                                            ? "#757780"
                                            : "#E7DAE0"
                                    }
                                    width="302"
                                    height="52"
                                    className="frame-contact-name "
                                />
                            </div>
                        </div>
                        <div className="contact-email flex sm:flex-col sm:gap-2 md:flex-row justify-between">
                            <label
                                htmlFor="input-email"
                                className="label text-lg md:text-xl"
                            >
                                {language === "fr"
                                    ? datas.email.fr
                                    : datas.email.en}
                            </label>
                            <div className="input-name relative md:w-[500px] flex justify-start">
                                <input
                                    type="email"
                                    name="email"
                                    id="input-email"
                                    required
                                    className="absolute w-[302px] h-[52px] bg-transparent outline-none p-2 h-[52px]"
                                    aria-label="email input field"
                                    aria-required="true"
                                ></input>
                                <FrameName
                                    stroke={
                                        theme === "light"
                                            ? "#757780"
                                            : "#E7DAE0"
                                    }
                                    width="302"
                                    height="52"
                                    className="frame-contact-name "
                                />
                            </div>
                        </div>
                        <div className="contact-message flex sm:flex-col sm:gap-2 md:flex-row justify-between md:gap-10">
                            <label
                                htmlFor="area-message"
                                className="label text-lg md:text-xl"
                            >
                                {language === "fr"
                                    ? datas.message.fr
                                    : datas.message.en}
                            </label>
                            <div className="container-message relative flex justify-start">
                                <textarea
                                    name="message"
                                    id="area-message"
                                    required
                                    className="absolute w-[302px] h-[269px] sm2:w-[383px] sm2:h-[266px] md:w-[499px] md:h-[182px] bg-transparent outline-none p-2 resize-none"
                                    aria-label="message input field"
                                    aria-required="true"
                                ></textarea>
                                <FrameMessage
                                    stroke={
                                        theme === "light"
                                            ? "#757780"
                                            : "#E7DAE0"
                                    }
                                    width="499"
                                    height="182"
                                    className="frame-contact-message hidden md:block"
                                />
                                <FrameMessageSm2
                                    stroke={
                                        theme === "light"
                                            ? "#757780"
                                            : "#E7DAE0"
                                    }
                                    className="hidden sm2:block md:hidden"
                                />
                                <FrameMessageSm
                                    stroke={
                                        theme === "light"
                                            ? "#757780"
                                            : "#E7DAE0"
                                    }
                                    className="block sm2:hidden"
                                />
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
                                } text-md md:text-lg absolute w-[124px] h-[36px]`}
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
                        <span>{result}</span>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact

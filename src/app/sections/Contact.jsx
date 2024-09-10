import { useAppContext } from "../contexts/AppContext"
import { ReactComponent as FrameName } from "../../assets/svgs/frame-contact-name.svg"
import { ReactComponent as FrameMessage } from "../../assets/svgs/frame-contact-message.svg"
import { ReactComponent as FrameSubmit } from "../../assets/svgs/frame-submit.svg"
import { useRef } from "react"
import datas from "../../assets/datas/Contact.json"

function Contact() {
    const { theme, language } = useAppContext()
    const formRef = useRef(null)

    return (
        <section
            id="contact"
            className={`snap-start snap-always min-h-[80vh] h-full w-full ${
                theme === "light" ? "bg-light-grey" : "bg-dark-blue+"
            }`}
        >
            <div className="container-contact min-h-[80vh] w-full flex justify-center items-center pt-24">
                <form ref={formRef} action="/submit" method="post">
                    <div
                        className={`container-form flex flex-col gap-5 ${
                            theme === "light" ? "text-black" : "text-dark-text"
                        }`}
                    >
                        <div className="contact-name flex justify-between">
                            <label
                                htmlFor="input-name"
                                className="label sm:text-sm sm2:text-lg md:text-xl"
                            >
                                {language === "fr"
                                    ? datas.name.fr
                                    : datas.name.en}
                            </label>
                            <div className="input-name relative w-[500px] flex justify-start">
                                <input
                                    type="text"
                                    id="input-name"
                                    required
                                    className="absolute w-[302px] h-[52px] bg-transparent outline-none p-2"
                                    aria-label="name input field"
                                    aria-required="true"
                                ></input>
                                <FrameName
                                    stroke={
                                        theme === "light"
                                            ? "#757780"
                                            : "#E7DAE0"
                                    }
                                    className="frame-contact-name sm:w-[180px] sm2:w-[200px] md:w-[302px]"
                                />
                            </div>
                        </div>
                        <div className="contact-email flex justify-between">
                            <label
                                htmlFor="input-email"
                                className="label sm:text-sm sm2:text-lg md:text-xl"
                            >
                                {language === "fr"
                                    ? datas.email.fr
                                    : datas.email.en}
                            </label>
                            <div className="input-name relative w-[500px] flex justify-start">
                                <input
                                    type="email"
                                    id="input-email"
                                    required
                                    className="absolute w-[302px] h-[52px] bg-transparent outline-none p-2"
                                    aria-label="email input field"
                                    aria-required="true"
                                ></input>
                                <FrameName
                                    stroke={
                                        theme === "light"
                                            ? "#757780"
                                            : "#E7DAE0"
                                    }
                                    className="frame-contact-name sm:w-[180px] sm2:w-[200px] md:w-[302px]"
                                />
                            </div>
                        </div>
                        <div className="contact-message flex justify-between gap-10">
                            <label
                                htmlFor="area-message"
                                className="label sm:text-sm sm2:text-lg md:text-xl"
                            >
                                {language === "fr"
                                    ? datas.message.fr
                                    : datas.message.en}
                            </label>
                            <div className="container-message relative w-[500px] flex justify-start">
                                <textarea
                                    type="text"
                                    id="area-message"
                                    required
                                    className="absolute w-[499px] h-[182px] bg-transparent outline-none p-2 resize-none"
                                    aria-label="message input field"
                                    aria-required="true"
                                ></textarea>
                                <FrameMessage
                                    stroke={
                                        theme === "light"
                                            ? "#757780"
                                            : "#E7DAE0"
                                    }
                                    className="frame-contact-message sm:w-[200px] sm2:w-[250px] md:w-[499px]"
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
                                className="input-submit sm:text-xs sm2:text-sm md:text-xl absolute w-[124px] h-[36px]"
                            ></input>
                            <FrameSubmit
                                className="frame-submit sm:w-[80px] sm2:w-[100px] md:w-[124px]"
                                stroke={
                                    theme === "light" ? "#757780" : "#E7DAE0"
                                }
                                fill={theme === "light" ? "#FAFAFA" : "#0B3847"}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact

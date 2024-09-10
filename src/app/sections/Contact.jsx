import { useAppContext } from "../contexts/AppContext"
import { ReactComponent as FrameName } from "../../assets/svgs/frame-contact-name.svg"
import { ReactComponent as FrameMessage } from "../../assets/svgs/frame-contact-message.svg"
import { ReactComponent as FrameSubmit } from "../../assets/svgs/frame-submit.svg"
import datas from "../../assets/datas/Contact.json"

function Contact() {
    const { theme, language } = useAppContext()

    return (
        <section
            id="contact"
            className={`snap-start snap-always min-h-[80vh] h-full w-full ${
                theme === "light" ? "bg-light-grey" : "bg-dark-blue+"
            }`}
        >
            <div className="container-contact min-h-[80vh] w-full flex justify-center items-center pt-24">
                <form action="/submit" method="post">
                    <div
                        className={`flex flex-col gap-5 ${
                            theme === "light" ? "text-black" : "text-dark-text"
                        }`}
                    >
                        <div className="contact-name flex justify-between">
                            <label for="input-name" className="text-xl">
                                {language === "fr"
                                    ? datas.name.fr
                                    : datas.name.en}
                            </label>
                            <div className="relative w-[500px] flex justify-start">
                                <input
                                    type="text"
                                    id="input-name"
                                    className="absolute w-[302px] h-[52px] bg-transparent outline-none p-2"
                                    aria-label="name input field"
                                    aria-required="true"
                                ></input>
                                <FrameName
                                    width="302"
                                    height="52"
                                    stroke={
                                        theme === "light"
                                            ? "#757780"
                                            : "#E7DAE0"
                                    }
                                />
                            </div>
                        </div>
                        <div className="contact-email flex justify-between">
                            <label for="input-email" className="text-xl">
                                {language === "fr"
                                    ? datas.email.fr
                                    : datas.email.en}
                            </label>
                            <div className="relative w-[500px] flex justify-start">
                                <input
                                    type="email"
                                    id="input-email"
                                    className="absolute w-[302px] h-[52px] bg-transparent outline-none p-2"
                                    aria-label="email input field"
                                    aria-required="true"
                                ></input>
                                <FrameName
                                    width="302"
                                    height="52"
                                    stroke={
                                        theme === "light"
                                            ? "#757780"
                                            : "#E7DAE0"
                                    }
                                />
                            </div>
                        </div>
                        <div className="contact-message flex justify-between gap-10">
                            <label for="area-message" className="text-xl">
                                {language === "fr"
                                    ? datas.message.fr
                                    : datas.message.en}
                            </label>
                            <div className="relative w-[500px] flex justify-start">
                                <textarea
                                    type="text"
                                    id="area-message"
                                    className="absolute w-[499px] h-[182px] bg-transparent outline-none p-2 resize-none"
                                    aria-label="message input field"
                                    aria-required="true"
                                ></textarea>
                                <FrameMessage
                                    width="499"
                                    height="182"
                                    stroke={
                                        theme === "light"
                                            ? "#757780"
                                            : "#E7DAE0"
                                    }
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
                                className="input-submit absolute w-[124px] h-[36px]"
                            ></input>
                            <FrameSubmit
                                className="frame-submit"
                                width="124"
                                height="36"
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

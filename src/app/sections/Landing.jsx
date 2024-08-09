import text from "../../assets/texts/Landing.json"
import photoLanding from "../../assets/photos/ZFC_3183.jpg"
import { useAppContext } from "../contexts/AppContext"
import Particles from "../vendors/particles"
import IconScroll from "../components/IconScroll"

function Landing() {
    const { language } = useAppContext()

    return (
        <section className="relative h-screen bottom-[96px] bg-gradient-to-tr from-light-grey to-gradient+ dark:bg-gradient-to-tr dark:from-dark-blue dark:to-dark-gradient+">
            <Particles className="particles" />
            <div className="absolute h-screen bottom-[96px] w-full flex-col justify-center items-between">
                <div className="flex pt-56 items-center justify-evenly h-full w-full">
                    <div className="container-title flex-col">
                        <h1 className="text-5xl text-red dark:text-yellow">
                            {text.title}
                        </h1>
                        <h2 className="text-3xl dark:text-dark-text flex justify-end">
                            {language === "fr"
                                ? text.subtitle.fr
                                : text.subtitle.en}
                        </h2>
                        <p className="dark:text-dark-text mt-10">
                            {language === "fr"
                                ? text.description.fr
                                : text.description.en}
                        </p>
                    </div>
                    <div className="container-photo-landing">
                        <div className="custom-border-box">
                            <img
                                src={photoLanding}
                                alt="Clement Sorin holding a laptop in his hands"
                                className="p-3 photo-landing"
                            />
                        </div>
                    </div>
                </div>
                <IconScroll className="" />
            </div>
        </section>
    )
}

export default Landing

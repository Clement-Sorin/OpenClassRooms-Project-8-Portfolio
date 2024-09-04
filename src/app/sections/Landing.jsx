import text from "../../assets/datas/Landing.json"
import photoLanding from "../../assets/photos/ZFC_3183.webp"
import { useAppContext } from "../contexts/AppContext"
import useScrollAnchor from "../hooks/useScrollAnchor"
import Particles from "../vendors/particles"
import IconScroll from "../components/IconScroll"

function Landing() {
    const { language } = useAppContext()
    const firstScroll = useScrollAnchor("technologies")

    const handleWheel = (event) => {
        if (event.deltaY > 0) {
            document.querySelector("#technologies").scrollIntoView({
                behavior: "smooth",
            })
        }
    }

    return (
        <section
            onWheel={handleWheel}
            id="landing"
            className={`absolute h-screen w-full bg-gradient-to-tr from-light-grey to-gradient+ dark:bg-gradient-to-tr dark:from-dark-blue dark:to-dark-gradient+ snap-start`}
        >
            <div className="fixed">
                <Particles
                    className={`${firstScroll ? "hidden" : ""} particles top-0`}
                />
            </div>
            <div className="content-landing fixed sm:top-3 md:top-0 h-screen mw-auto flex-col justify-center pb-24">
                <div className="flex md:flex-nowrap flex-wrap md:gap-10 gap-5  justify-center items-center md:justify-evenly  w-full h-full sm:p-6 sm:mb-20 sm:mt-10">
                    <div className="container-title flex-col md:ml-10 max-w-96 lg:min-w-80 md:min-w-64">
                        <h1 className="text-4xl lg:text-5xl text-red dark:text-yellow">
                            {text.title}
                        </h1>
                        <h2 className="dark:text-dark-text flex md:justify-end">
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
                    <div className="container-photo-landing md:mr-10">
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

import text from "./text.json"
import "./styles.css"
import photoLanding from "../../../assets/photos/ZFC_3183.jpg"
import { useAppContext } from "../../contexts/AppContext"

function Landing() {
    const { language } = useAppContext()

    return (
        <section className="h-screen-minus-header bg-gradient-to-tr from-light-grey to-gradient+ dark:bg-gradient-to-tr dark:from-dark-blue dark:to-dark-gradient+ p-10">
            <div className="h-full flex items-center justify-center">
                <div className="flex items-center justify-evenly w-full">
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
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing

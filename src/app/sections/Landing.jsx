import text from "../../assets/datas/Landing.json"
import photoLandingLarge from "../../assets/photos/ZFC_3183_large.webp"
import photoLandingMedium2 from "../../assets/photos/ZFC_3183_medium2.webp"
import photoLandingMedium1 from "../../assets/photos/ZFC_3183_medium1.webp"
import { useAppContext } from "../contexts/AppContext"
import Particles from "../vendors/particles"
import IconScroll from "../components/IconScroll"
import { useState, useEffect } from "react"

function Landing() {
    const { language } = useAppContext()
    const [size, setSize] = useState("")

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth

            if (width < 450) {
                setSize("small1")
            } else if (width < 768) {
                setSize("small2")
            } else if (width < 900) {
                setSize("medium1")
            } else if (width < 1024) {
                setSize("medium2")
            } else {
                setSize("large")
            }
        }
        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"

        // Déterminer quelle image précharger en fonction de la largeur de la fenêtre
        if (window.innerWidth < 450) {
            link.href = photoLandingMedium1
            document.head.appendChild(link)
        }

        // Fonction de nettoyage pour retirer le lien au démontage du composant
        return () => {
            if (link.href) {
                document.head.removeChild(link)
            }
        }
    }, [])

    return (
        <section
            id="landing"
            className={`relative h-screen w-full bg-gradient-to-tr from-light-grey to-gradient+ dark:bg-gradient-to-tr dark:from-dark-blue dark:to-dark-gradient+ snap-start snap-always`}
        >
            <Particles className={`particles absolute`} />
            <div className="absolute w-full sm:top-3 md:top-5 ">
                <div className="content-landing w-full h-screen mw-auto flex-col justify-center pb-24">
                    <div className=" w-full flex md:flex-nowrap flex-wrap md:gap-10 gap-5  justify-center items-center md:justify-evenly  w-full h-full sm:p-6 sm:mb-20 sm:mt-10">
                        <div className="container-title  flex-col md:ml-10 max-w-96 lg:min-w-80 md:min-w-64">
                            <h1 className="text-4xl lg:text-5xl text-red dark:text-yellow">
                                {text.title}
                            </h1>
                            <h2 className="dark:text-dark-text flex md:justify-end text-[22px]">
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
                            <div className="custom-border-box before:border-lines-light before:dark:border-lines-dark after:border-lines-light after:dark:border-lines-dark">
                                <img
                                    src={
                                        size === "small1"
                                            ? photoLandingMedium1
                                            : size === "small2"
                                            ? photoLandingLarge
                                            : size === "medium1"
                                            ? photoLandingMedium1
                                            : size === "medium2"
                                            ? photoLandingMedium2
                                            : photoLandingLarge
                                    }
                                    alt="Clement Sorin holding a laptop in his hands"
                                    className="p-3 photo-landing sm:w-[400px] md:w-[550px]"
                                />
                            </div>
                        </div>
                    </div>
                    <IconScroll />
                </div>
            </div>
        </section>
    )
}

export default Landing

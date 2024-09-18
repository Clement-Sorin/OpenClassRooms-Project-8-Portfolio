import { useAppContext } from "../contexts/AppContext"

function Language({ menuMobileOn }) {
    const { language, changeLanguage, theme } = useAppContext()

    const toggleMobileFR = () => {
        const html = document.querySelector("html")
        if (menuMobileOn) {
            changeLanguage("fr")
            setTimeout(() => {
                html.classList.add("overflow-y-hidden")
            }, 0)
        } else {
            setTimeout(() => {
                html.classList.remove("overflow-y-hidden")
            }, 0)
        }
    }

    const toggleMobileEN = () => {
        const html = document.querySelector("html")
        if (menuMobileOn) {
            changeLanguage("en")
            setTimeout(() => {
                html.classList.add("overflow-y-hidden")
            })
        } else {
            setTimeout(() => {
                html.classList.remove("overflow-y-hidden")
            })
        }
    }

    return (
        <div className="flex gap-2 items-center dark:text-dark-text">
            <button
                className={`${
                    language === "fr" ? "font-bold" : "font-normal"
                } ${
                    theme === "light"
                        ? "transition-hover-light"
                        : "transition-hover-dark"
                }`}
                onClick={() => toggleMobileFR()}
            >
                FR
            </button>
            <p>/</p>
            <button
                className={`${
                    language === "en" ? "font-bold" : "font-normal"
                } ${
                    theme === "light"
                        ? "transition-hover-light"
                        : "transition-hover-dark"
                }`}
                onClick={() => toggleMobileEN()}
            >
                EN
            </button>
        </div>
    )
}

export default Language

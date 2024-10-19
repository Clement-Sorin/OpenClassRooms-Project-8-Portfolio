import { useAppContext } from "../contexts/AppContext"

function Toolbox() {
    const { theme, language } = useAppContext()

    return (
        <section
            className={`relative h-full pt-16 md:pt-20 lg:pt-24 ${
                theme === "light"
                    ? "bg-light-grey text-black"
                    : "bg-dark-blue+ text-dark-text"
            }`}
        >
            <h1 className="text-2xl sm2:text-3xl md:text-[2.875rem]">
                Toolbox
            </h1>
        </section>
    )
}

export default Toolbox

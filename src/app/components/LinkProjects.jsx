import { useAppContext } from "../contexts/AppContext"

function LinkProjects({ links }) {
    const { theme, language } = useAppContext()

    return (
        <div className="flex gap-4 aligns-end h-full">
            {links.map((item, index) => {
                return (
                    <a
                        href={item.url}
                        key={index}
                        className="h-full transition-transform duration-500 transform hover:scale-110 "
                    >
                        <img
                            src={theme === "light" ? item.logo : item.logo_dark}
                            alt={"logo " + item.logo}
                            className="max-h-8"
                        ></img>
                    </a>
                )
            })}
        </div>
    )
}

export default LinkProjects

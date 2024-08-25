import { useAppContext } from "../contexts/AppContext"

function ProjectsTechnos({ technos }) {
    const { theme } = useAppContext()

    return (
        <div className="flex w-full gap-2">
            {technos.map((item, index) => {
                return (
                    <div className="flex gap-1 " key={index}>
                        <img
                            src={theme === "light" ? item.logo : item.logo_dark}
                            alt={"logo" + item.name}
                            className="max-h-5 "
                        ></img>
                        <p className="">{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectsTechnos

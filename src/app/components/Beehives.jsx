import { ReactComponent as Beehive } from "../../assets/svgs/beehive.svg"

function Beehives({ logo, title }) {
    return (
        <div className="flex flex-col">
            <div className="relative flex items-center justify-center">
                <Beehive className="w-full" />
                <img
                    src={logo}
                    alt={title + " logo"}
                    className="absolute max-w-[60%] max-h-[60%]"
                />
            </div>
            <p>{title}</p>
        </div>
    )
}

export default Beehives

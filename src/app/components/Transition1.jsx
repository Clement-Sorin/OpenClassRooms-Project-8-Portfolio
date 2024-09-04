import { useAppContext } from "../contexts/AppContext"

function Transition1() {
    const { theme } = useAppContext()

    return (
        <div className="relative mt-[100vh] h-full w-full" id="transition-1">
            <div
                className={`absolute top-[96px] w-full h-screen h- z-1 ${
                    theme === "light" ? "bg-light-grey+" : "bg-dark-blue"
                } `}
            ></div>
            <div
                className={`absolute top-20 w-full h-screen z-9 ${
                    theme === "light" ? "bg-light-grey" : "bg-dark-blue+"
                } `}
            ></div>
        </div>
    )
}

export default Transition1

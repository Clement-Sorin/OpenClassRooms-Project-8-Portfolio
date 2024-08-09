import { ReactComponent as IconSetting } from "../../assets/icons/settings.svg"
import { useAppContext } from "../contexts/AppContext"

function Settings() {
    const { theme } = useAppContext()

    return (
        <button className="hidden md:block lg:hidden">
            <IconSetting
                width={25}
                height={25}
                fill={theme === "light" ? "black" : "#F7F3F5"}
                className={
                    theme === "light"
                        ? "transition-hover-svg-light"
                        : "transition-hover-svg-dark"
                }
            />
        </button>
    )
}

export default Settings

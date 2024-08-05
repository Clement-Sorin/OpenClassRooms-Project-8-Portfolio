import { ReactComponent as IconSun } from "../../../assets/icons/sun.svg"
import { ReactComponent as IconDark } from "../../../assets/icons/dark.svg"

function Theme() {
    return (
        <div className="flex gap-2 items-center">
            <IconSun width={25} height={25} fill="black" />
            <p>/</p>
            <IconDark
                width={20}
                height={20}
                stroke="black"
                strokeWidth="5px"
                fill="black"
            />
        </div>
    )
}

export default Theme

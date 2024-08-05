import { ReactComponent as IconSun } from "../../../assets/icons/sun.svg"
import { ReactComponent as IconDark } from "../../../assets/icons/dark.svg"
import { Link } from "react-router-dom"

function Theme() {
    return (
        <div className="flex gap-2 items-center">
            <Link to="">
                <IconSun width={25} height={25} fill="black" />
            </Link>
            <p>/</p>
            <Link to="">
                <IconDark
                    width={20}
                    height={20}
                    stroke="black"
                    strokeWidth="5px"
                    fill="black"
                />
            </Link>
        </div>
    )
}

export default Theme

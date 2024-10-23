import { useState } from "react"
import { useAppContext } from "../contexts/AppContext"

function Cursor({ maxLength, defaultValue }) {
    const { theme } = useAppContext()
    const [value, setValue] = useState(defaultValue)

    const handleChangeValue = (event) => {
        setValue(event.target.value)
    }

    return (
        <input
            type="range"
            min="1"
            max={maxLength}
            value={value}
            onChange={handleChangeValue}
            className={`w-[180px] ${
                theme === "light" ? "input-range-light" : "input-range-dark"
            }`}
        />
    )
}

export default Cursor

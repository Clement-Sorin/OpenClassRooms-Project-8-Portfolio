import { useEffect, useState } from "react"
import { useAppContext } from "../contexts/AppContext"

function Cursor({
    dataName,
    maxLength,
    defaultValue,
    dataArray,
    setRangeValue,
}) {
    const { theme } = useAppContext()
    const [value, setValue] = useState(defaultValue)
    const [dataValue, setDataValue] = useState(dataArray[defaultValue - 1])

    useEffect(() => {
        setRangeValue({
            name: dataName,
            value: dataValue,
        })
    }, [setRangeValue, dataName, dataValue])

    const handleChangeValue = (event) => {
        setValue(event.target.value)
        setDataValue(dataArray[event.target.value - 1])
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

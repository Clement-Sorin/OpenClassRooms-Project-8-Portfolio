import { useState, useEffect } from "react"

const useScrollAnchor = (anchorId) => {
    const [anchorReached, setAnchorReached] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const anchorElement = document.getElementById(anchorId)
            if (!anchorElement) return

            const anchorPosition = anchorElement.getBoundingClientRect().top
            const viewportHeight = window.innerHeight

            if (anchorPosition <= viewportHeight && anchorPosition >= 0) {
                setAnchorReached(true)
            } else {
                setAnchorReached(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [anchorId])

    return anchorReached
}

export default useScrollAnchor

import { useState, useEffect } from "react"
import { throttle } from "lodash"

const useScrollAnchor = (anchorId) => {
    const [anchorReached, setAnchorReached] = useState(false)

    useEffect(() => {
        const handleScroll = throttle(() => {
            const anchorElement = document.getElementById(anchorId)
            if (!anchorElement) return

            const anchorPosition = anchorElement.getBoundingClientRect().top
            const viewportHeight = window.innerHeight

            const adjustedViewportHeight = window.innerWidth
                ? viewportHeight * 0.9
                : viewportHeight

            if (anchorPosition > adjustedViewportHeight) {
                setAnchorReached(false)
            } else if (
                anchorPosition <= adjustedViewportHeight &&
                anchorPosition >= 0
            ) {
                setAnchorReached(true)
            }
        },200)

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [anchorId])

    return anchorReached
}

export default useScrollAnchor

import { useState, useEffect } from "react"

const useScrollAnchor = (anchorId) => {
    const [anchorReached, setAnchorReached] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const anchorElement = document.getElementById(anchorId)
            if (!anchorElement) return

            const anchorPosition = anchorElement.getBoundingClientRect().top
            const viewportHeight = window.innerHeight

            const isMobile = window.innerWidth <= 1024
            const adjustedViewportHeight = isMobile
                ? viewportHeight * 0.9
                : viewportHeight

            if (
                anchorPosition <= adjustedViewportHeight - 1 &&
                anchorPosition >= +1
            ) {
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

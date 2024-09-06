import { useEffect, useState } from "react"

function useIntersectionObserver(id) {
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        const element = document.getElementById(id)
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting)
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        )

        observer.observe(element)

        return () => {
            observer.unobserve(element)
        }
    }, [id])

    return isIntersecting
}

export default useIntersectionObserver

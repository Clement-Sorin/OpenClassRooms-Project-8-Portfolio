import useScrollAnchor from "../hooks/useScrollAnchor"
import { useAppContext } from "../contexts/AppContext"
import { useState, useEffect, useRef } from "react"

function ImagesProjects({ images, title }) {
    const scrollSingleProject = useScrollAnchor("transition-2")
    const { theme, language } = useAppContext()
    const [heightDiv, setHeightDiv] = useState(0)
    const divRoundRef = useRef(null)

    const updateHeight = () => {
        if (divRoundRef.current && !divRoundRef.current <= 0) {
            const heightDivRound = divRoundRef.current.offsetWidth
            setHeightDiv(heightDivRound)
        }
    }

    useEffect(() => {
        updateHeight()
        window.addEventListener("resize", updateHeight)

        return () => {
            window.removeEventListener("resize", updateHeight)
        }
    }, [])

    console.log(heightDiv)

    return (
        <div className="container-image relative sm:max-w-[250px] sm:max-h-[150px] sm2:max-w-[350px] sm2:max-h-[350px] lg:max-w-[500px] lg:max-h-[500px]">
            <div
                className={`${
                    images.length <= 1 ? "hidden" : ""
                } filter-more absolute z-10 w-full h-full flex justify-center`}
            >
                <div
                    className={`more-left border-b-2 w-[40%] h-1/2 border-lines-light border-dotted`}
                ></div>
                <div
                    ref={divRoundRef}
                    className={`see-more flex flex-col justify-center w-[20%] h-full`}
                >
                    <button
                        className={`text-[10px] sm2:text-[14px] bg-light-grey w-full h-[${heightDiv}px] rounded-full border border-lines-light`}
                        style={{ height: `${heightDiv}px` }}
                    >
                        {language === "fr" ? "Voir plus" : "See More"}
                    </button>
                </div>
                <div
                    className={`more-right border-b-2 w-[40%] h-1/2 border-lines-light border-dotted`}
                ></div>
            </div>
            <img
                src={images[0]}
                className={`images-projects fade-in w-full h-full ${
                    scrollSingleProject ? "images-projects" : ""
                }`}
                style={{
                    boxShadow: `${
                        theme === "light"
                            ? "0px 0px 15px rgba(0,0,0,0.25)"
                            : "0px 0px 15px rgba(247,243,245,0.6)"
                    }`,
                }}
                alt={"landing screenshot of " + title}
            ></img>
        </div>
    )
}

export default ImagesProjects

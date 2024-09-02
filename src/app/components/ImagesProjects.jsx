import useScrollAnchor from "../hooks/useScrollAnchor"
import { useAppContext } from "../contexts/AppContext"

function ImagesProjects({ images, title, scrollLeft }) {
    const scrollSingleProject = useScrollAnchor("transition-2")
    const { theme, language, openModal } = useAppContext()

    return (
        <div className="container-image relative sm:max-w-[250px] sm:max-h-[150px] sm2:max-w-[350px] sm2:max-h-[350px] lg:max-w-[500px] lg:max-h-[500px]">
            <div
                className={`${
                    images.length <= 1 ? "hidden" : ""
                } filter-more absolute z-10 w-full h-full flex justify-center bg-[rgba(0,0,0,0.1)] transition duration-800 ease-linear`}
            >
                <div
                    className={`more-left absolute top-1/2 left-0 right-1/2 sm:mr-[25px] sm2:mr-[40px] lg:mr-[50px] border-b-2 border-lines-light border-dotted transition duration-600 ease-linear`}
                ></div>
                <div className={`see-more flex flex-col justify-center h-full`}>
                    <button
                        onClick={openModal}
                        className={`btn-see-more text-[10px] sm2:text-[14px] bg-light-grey sm:w-[50px] sm:h-[50px] sm2:w-[80px] sm2:h-[80px] lg:w-[100px] lg:h-[100px] rounded-full border border-lines-light transition duration-400 ease-linear`}
                    >
                        {language === "fr" ? "Voir plus" : "See More"}
                    </button>
                </div>
                <div
                    className={`more-right absolute top-1/2 right-0 left-1/2 sm:ml-[25px] sm2:ml-[40px] lg:ml-[50px] border-b-2  border-lines-light border-dotted transition duration-600 ease-linear`}
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

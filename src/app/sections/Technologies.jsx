import Transition1 from "../components/Transition1"
import useScrollAnchor from "../hooks/useScrollAnchor"
import { ReactComponent as VectorFront } from "../../assets/svgs/vector-front-end.svg"
import { ReactComponent as VectorBack } from "../../assets/svgs/vector-back-end.svg"
import { useAppContext } from "../contexts/AppContext"

function Technologies() {
    const firstScroll = useScrollAnchor("transition-1")
    const { theme } = useAppContext()

    return (
        <section>
            <Transition1 />
            <div className={`${firstScroll ? "technologies" : "hidden"} `}>
                <div id="front-end" className="mb-10">
                    <h2
                        id="title-front-end"
                        className="fade-in relative left-[8%] top-3 md:top-7 dark:text-dark-text"
                    >
                        Front-end
                    </h2>
                    <VectorFront
                        id="vector-front-end"
                        className=" fade-in w-[70%] md:w-[50%] stroke-lines-light dark:stroke-lines-dark"
                    />
                </div>
                <div id="back-end" className="flex flex-col items-end">
                    <VectorBack
                        id="vector-back-end"
                        className="fade-in w-[70%] md:w-[50%] stroke-lines-light dark:stroke-lines-dark"
                    />
                    <h2
                        id="title-back-end"
                        className="fade-in relative right-[8%] bottom-3 md:bottom-7 dark:text-dark-text"
                    >
                        Back-end
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Technologies

import useScrollAnchor from "../hooks/useScrollAnchor"
import { useAppContext } from "../contexts/AppContext"
import { ReactComponent as VectorFront } from "../../assets/svgs/vector-front-end.svg"
import { ReactComponent as VectorBack } from "../../assets/svgs/vector-back-end.svg"
import technologiesFront from "../../assets/datas/TechnologiesFront.json"
import technologiesBack from "../../assets/datas/TechnologiesBack.json"
import Beehives from "../components/Beehives"

function Technologies() {
    const firstScroll = useScrollAnchor("technologies")
    const { theme } = useAppContext()

    const chunkArray = (array, chunkSize) => {
        const result = []
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize))
        }
        return result
    }

    console.log(firstScroll)

    const groupedTechnologiesFront = chunkArray(technologiesFront, 3)
    const groupedTechnologiesBack = chunkArray(technologiesBack, 3)

    return (
        <section
            id="technologies"
            className={`absolute top-0 h-full w-full snap-start snap-always mt-[100vh] ${
                theme === "light" ? "bg-light-grey" : "bg-dark-blue+"
            }`}
        >
            <div
                className={`${
                    firstScroll ? "technologies" : "hidden"
                } mw-auto overflow-x-hidden h-full`}
            >
                <div id="front-end" className="mb-20 md:mb-0 mt-20">
                    <h2
                        id="title-front-end"
                        className="fade-in relative left-[8%] top-3 md:top-7 dark:text-dark-text"
                    >
                        Front-end
                    </h2>
                    <VectorFront
                        id="vector-front-end"
                        className="fade-in w-[70%] md:w-[50%] stroke-lines-light dark:stroke-lines-dark"
                    />
                    <div className=" relative w-full flex flex-col md:flex-row md:flex justify-center flex-wrap md:pt-10">
                        {groupedTechnologiesFront.map((group, groupIndex) => (
                            <div
                                key={groupIndex}
                                className="chunk-technos flex flex-col md:flex-row relative md:mb-16"
                            >
                                {group.map((item, index) => {
                                    const globalIndex = groupIndex * 3 + index
                                    return (
                                        <Beehives
                                            logo={item.logo}
                                            logo_dark={item.logo_dark}
                                            title={item.title}
                                            key={globalIndex}
                                            className={
                                                globalIndex % 2 === 0
                                                    ? "even"
                                                    : "odd"
                                            }
                                            delayAnim={800}
                                            index={globalIndex}
                                        />
                                    )
                                })}
                            </div>
                        ))}
                    </div>
                </div>
                <div id="back-end" className="flex flex-col items-end mt-10">
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
                    {groupedTechnologiesBack.map((group, groupIndex) => (
                        <div
                            key={groupIndex}
                            className="chunk-technos w-full flex justify-center flex-col md:flex-row relative mb-[150px] md:mb-16"
                        >
                            {group.map((item, index) => {
                                const globalIndex = groupIndex * 3 + index
                                return (
                                    <Beehives
                                        logo={item.logo}
                                        logo_dark={item.logo_dark}
                                        title={item.title}
                                        key={globalIndex}
                                        className={
                                            globalIndex % 2 === 0
                                                ? "even"
                                                : "odd"
                                        }
                                        delayAnim={2800}
                                        index={globalIndex}
                                    />
                                )
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Technologies

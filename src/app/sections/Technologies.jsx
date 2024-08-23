import React from "react"
import useScrollAnchor from "../hooks/useScrollAnchor"
import { ReactComponent as VectorFront } from "../../assets/svgs/vector-front-end.svg"
import { ReactComponent as VectorBack } from "../../assets/svgs/vector-back-end.svg"
import technologiesFront from "../../assets/texts/TechnologiesFront.json"
import technologiesBack from "../../assets/texts/TechnologiesBack.json"
import Transition1 from "../components/Transition1"
import Beehives from "../components/Beehives"

function Technologies() {
    const firstScroll = useScrollAnchor("transition-1")

    // Fonction pour diviser les éléments en groupes de taille 3
    const chunkArray = (array, chunkSize) => {
        const result = []
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize))
        }
        return result
    }

    // Divisez les technologies en groupes de 3
    const groupedTechnologiesFront = chunkArray(technologiesFront, 3)
    const groupedTechnologiesBack = chunkArray(technologiesBack, 3)

    return (
        <section id="technologies">
            <Transition1 />
            <div
                className={`${
                    firstScroll ? "technologies" : "hidden"
                } mw-auto left-1/2 transform -translate-x-1/2 overflow-x-hidden`}
            >
                <div id="front-end" className="mb-20 md:mb-0">
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
                                            delayAnim={1300}
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
                                        delayAnim={3000}
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

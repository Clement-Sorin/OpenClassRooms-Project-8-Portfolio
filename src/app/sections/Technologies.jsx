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

    const groupedTechnologiesFront = chunkArray(technologiesFront, 3)
    const groupedTechnologiesBack = chunkArray(technologiesBack, 3)

    return (
        <section
            id="technologies"
            className={`h-full w-full snap-start snap-always  ${
                theme === "light" ? "bg-light-grey" : "bg-dark-blue+"
            }`}
        >
            <div className={`mw-auto h-full pt-16 lg:pt-28 overflow-hidden`}>
                <div id="front-end" className="pb-20 md:pb-0 ">
                    <h2
                        id="title-front-end"
                        className={`relative top-3 md:top-6 ${
                            firstScroll ? "fade-in" : "opacity-0"
                        } ml-[8%] dark:text-dark-text text-[22px] sm2:text-[24px] md:text-[28px] lg:text-[32px]`}
                    >
                        Front-end
                    </h2>
                    <VectorFront
                        id="vector-front-end"
                        className={`relative ${
                            firstScroll ? "fade-in" : "opacity-0"
                        } w-[70%] md:w-[50%] stroke-lines-light dark:stroke-lines-dark`}
                    />
                    <div className=" relative w-full flex flex-col md:flex-row md:flex justify-center flex-wrap md:pt-10">
                        {groupedTechnologiesFront.map((group, groupIndex) => (
                            <div
                                key={groupIndex}
                                className="chunk-technos flex flex-col md:flex-row md:mb-16"
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
                                            delayAnim={500}
                                            index={globalIndex}
                                        />
                                    )
                                })}
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    id="back-end"
                    className="flex flex-col items-end md:mt-10 md:mb-16"
                >
                    <VectorBack
                        id="vector-back-end"
                        className={`${
                            firstScroll ? "fade-in" : "opacity-0"
                        } w-[70%] md:w-[50%] stroke-lines-light dark:stroke-lines-dark`}
                    />
                    <h2
                        id="title-back-end"
                        className={`${
                            firstScroll ? "fade-in" : "opacity-0"
                        } relative right-[8%] bottom-3 md:bottom-7 dark:text-dark-text text-[22px] sm2:text-[24px] md:text-[28px] lg:text-[32px]`}
                    >
                        Back-end
                    </h2>
                    {groupedTechnologiesBack.map((group, groupIndex) => (
                        <div
                            key={groupIndex}
                            className="chunk-technos w-full flex justify-center flex-col md:flex-row relative mb-[100px] md:mb-16"
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
                                        delayAnim={2500}
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

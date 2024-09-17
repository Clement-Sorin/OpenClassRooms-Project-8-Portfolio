import datas from "../../assets/datas/PrivacyPolicy.json"
import { useAppContext } from "../contexts/AppContext"

function PrivacyPolicy() {
    const { theme, language } = useAppContext()

    return (
        <section
            className={`h-full pt-16 md:pt-20 lg:pt-24 ${
                theme === "light"
                    ? "bg-light-grey text-black"
                    : "bg-dark-blue+ text-dark-text"
            }`}
        >
            <div className="flex justify-center p-5 md:p-8">
                <h1 className="text-2xl sm2:text-3xl md:text-[2.875rem] text-center">
                    {language === "fr" ? datas.title.fr : datas.title.en}
                </h1>
            </div>
            <div className="datas flex flex-col gap-8 px-3 pt-5 pb-8 sm2:p-10">
                {Object.entries(datas.data).map(([key, value], index) => (
                    <div key={index} id={key} className="flex flex-col gap-4">
                        <h2 className="text-[20px] sm2:text-[22px] ">
                            {language === "fr"
                                ? value?.title.fr
                                : value?.title.en}
                        </h2>
                        <div className="">
                            {language === "fr"
                                ? value?.text.fr.map((item, index) => (
                                      <p key={index}>{item}</p>
                                  ))
                                : value?.text.en.map((item, index) => (
                                      <p key={index}>{item}</p>
                                  ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PrivacyPolicy

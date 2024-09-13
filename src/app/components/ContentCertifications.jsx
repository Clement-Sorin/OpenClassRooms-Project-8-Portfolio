import { useAppContext } from "../contexts/AppContext"

function Certifications({ datas }) {
    const { theme, language } = useAppContext()
    const dataCertif = datas.certifications
    const certifDetails = dataCertif.data

    return (
        <div
            className={`content-certif absolute top-3 sm2:top-0 pt-3 pl-9 pr-7 flex flex-col gap-3 ${
                theme === "light" ? "" : "text-dark-text"
            }`}
        >
            <h2>{dataCertif.title}</h2>
            <div className="flex flex-col gap-2">
                {Object.entries(certifDetails).map(([key, value], index) => (
                    <div key={index} className="text-sm flex flex-col gap-1">
                        {Array.isArray(value?.certificate.fr) ||
                        Array.isArray(value?.certificate.en) ? (
                            <>
                                {Array.isArray(value?.certificate.fr) &&
                                    language === "fr" &&
                                    value.certificate.fr.map((cert, idx) => (
                                        <p
                                            key={`fr-${idx}`}
                                            className="text-content-profile"
                                        >
                                            {cert}
                                        </p>
                                    ))}
                                {Array.isArray(value?.certificate.en) &&
                                    language === "en" &&
                                    value.certificate.en.map((cert, idx) => (
                                        <p
                                            key={`en-${idx}`}
                                            className="text-content-profile"
                                        >
                                            {cert}
                                        </p>
                                    ))}
                            </>
                        ) : (
                            <p className="text-content-profile">
                                {language === "fr" ? value?.certificate.fr : ""}
                                {language === "en" ? value?.certificate.en : ""}
                            </p>
                        )}
                        <p className="font-bold text-content-profile">
                            {language === "fr" ? value?.school.fr : ""}
                            {language === "en" ? value?.school.en : ""}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certifications

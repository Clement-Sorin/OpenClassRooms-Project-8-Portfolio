import { useAppContext } from "../contexts/AppContext"
import { ReactComponent as GitHubLogo } from "../../assets/icons/github.svg"
import { ReactComponent as LinkedInLogo } from "../../assets/icons/linkedin.svg"
import { Link } from "react-router-dom"
import datas from "../../assets/datas/Footer.json"

function Footer() {
    const { language } = useAppContext()

    return (
        <footer
            className={`snap-proximity lg:snap-mandatory snap-end min-h-[20vh] w-full bg-black flex flex-col justify-center items-center`}
        >
            <a
                href="/#landing"
                className={`text-xl sm2:text-2xl text-dark-text font-heading`}
            >
                Clément_Sorin
            </a>
            <div className="link-footer flex gap-4 mt-3">
                <a
                    href="https://github.com/Clement-Sorin"
                    target="_blank"
                    rel="noreferrer"
                    className="h-full transition-transform duration-500 transform hover:scale-110 "
                >
                    <GitHubLogo className="sm:max-h-6 sm:max-w-6  md:max-h-8 md:max-w-8" />
                </a>
                <a
                    href="https://linkedin.com/in/clément-sorin"
                    target="_blank"
                    rel="noreferrer"
                    className="h-full transition-transform duration-500 transform hover:scale-110 "
                >
                    <LinkedInLogo className="sm:max-h-6 sm:max-w-6  md:max-h-8 md:max-w-8" />
                </a>
            </div>
            <div className="other-link-footer flex gap-5 mt-5">
                <Link
                    to="/legal-notice"
                    className={`text-sm sm2:text-base md:text-lg text-dark-text underline underline-offset-2`}
                >
                    {language === "fr"
                        ? datas.legal_notice.fr
                        : datas.legal_notice.en}
                </Link>
                <Link
                    to="/privacy-policy"
                    className={`text-sm sm2:text-base md:text-lg text-dark-text underline underline-offset-2`}
                >
                    {language === "fr"
                        ? datas.privacy_policy.fr
                        : datas.privacy_policy.en}
                </Link>
            </div>
        </footer>
    )
}

export default Footer

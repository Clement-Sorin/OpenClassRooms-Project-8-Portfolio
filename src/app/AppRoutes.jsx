import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppProvider } from "./contexts/AppContext"
import Default from "./layout/Default"
import Home from "./pages/Home"
import LegalNotice from "./pages/LegalNotice"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Error404 from "./pages/Error404"
import ScrollToTop from "./components/ScrollToTop"

function AppRoutes() {
    return (
        <AppProvider>
            <BrowserRouter>
                <ScrollToTop />
                <div className="cursor-custom-light dark:cursor-custom-dark">
                    <Routes>
                        <Route element={<Default />}>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/legal-notice"
                                element={<LegalNotice />}
                            />
                            <Route
                                path="/privacy-policy"
                                element={<PrivacyPolicy />}
                            />
                            <Route path="*" element={<Error404 />} />
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </AppProvider>
    )
}

export default AppRoutes

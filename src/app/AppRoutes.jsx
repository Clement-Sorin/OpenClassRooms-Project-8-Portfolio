import "../style/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Default from "./layout/Default"
import Home from "./pages/Home"
import LegalNotice from "./pages/LegalNotice"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Error404 from "./pages/Error404"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Default />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/legal-notice" element={<LegalNotice />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes

import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const Default = () => {
    return (
        <div className="main-container">
            <Header />
            <main className="mt-24">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Default

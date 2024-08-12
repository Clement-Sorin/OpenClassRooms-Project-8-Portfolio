import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const Default = () => {
    return (
        <div className="main-container">
            <Header />
            <main className="relative overflow-scroll h-[105vh] w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Default

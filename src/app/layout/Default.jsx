import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const Default = () => {
    return (
        <>
            <Header />
            <main className="mt-24">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Default

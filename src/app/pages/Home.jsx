import React, { Suspense } from "react"

import Landing from "../sections/Landing"
const Technologies = React.lazy(() => import("../sections/Technologies"))
const Projects = React.lazy(() => import("../sections/Projects"))
const Profile = React.lazy(() => import("../sections/Profile"))
const Contact = React.lazy(() => import("../sections/Contact"))

function Home() {
    return (
        <>
            <Landing />
            <Suspense fallback={null}>
                <Technologies />
                <Projects />
                <Profile />
                <Contact />
            </Suspense>
        </>
    )
}

export default Home

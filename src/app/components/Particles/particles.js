import Particles, { initParticlesEngine } from "@tsparticles/react"
import { useEffect, useMemo, useState } from "react"
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim" // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import { useAppContext } from "../../contexts/AppContext"

const ParticlesComponent = (props) => {
    const { theme } = useAppContext()
    const [init, setInit] = useState(false)
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine)
            //await loadBasic(engine);
        }).then(() => {
            setInit(true)
        })
    }, [])

    const particlesLoaded = (container) => {
        console.log(container)
    }

    const options = useMemo(
        () => ({
            fullScreen: {
                enable: false,
            },
            fps_limit: 60,
            particles: {
                number: {
                    value: 170,
                    density: {
                        enable: true,
                        value_area: 1890.508074044899,
                    },
                },
                color: {
                    value: "#757780",
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 4,
                        color: theme === "light" ? "#757780" : "#fff",
                    },
                    polygon: {
                        nb_sides: 4,
                    },
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 10,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                links: {
                    enable: true,
                    distance: 230,
                    color: theme === "light" ? "#757780" : "#fff",
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 0.7,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    push: {
                        distance: 250,
                        duration: 15,
                    },
                    grab: {
                        distance: 200,
                    },
                },
            },
            retina_detect: true,
        }),
        [theme]
    )

    return <Particles id={props.id} init={particlesLoaded} options={options} />
}

export default ParticlesComponent

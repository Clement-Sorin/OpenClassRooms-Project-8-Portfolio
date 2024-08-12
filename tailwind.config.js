module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                base: ["Chakra Petch", "sans-serif"],
                heading: ["Orbitron", "sans-serif"],
            },
            colors: {
                //light mode
                "light-grey": "#FAFAFA",
                "light-grey+": "#F5F5F5",
                "gradient+": "#c2c2c2",
                "lines-light": "#757780",
                red: "#E3170A",
                //Dark mode
                "dark-blue": "#082a35",
                "dark-blue+": "#0B3847",
                "dark-gradient+": "#166C88",
                "lines-dark": "#E7DAE0",
                yellow: "#CFD11A",
                "dark-text": "#F7F3F5",
            },
            height: {
                "screen-minus-header": "calc(100vh - 96px)",
            },
            screens: {
                sm: "320px",
                md: "768px",
                lg: "1024px",
                xl: "1440px",
                "2xl": "1920px",
            },
        },
    },
    plugins: [],
}

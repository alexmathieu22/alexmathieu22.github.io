/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./pages/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            tablet: "640px",
            // => @media (min-width: 640px) { ... }

            laptop: "1024px",
            // => @media (min-width: 1024px) { ... }

            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            fontFamily: {
                main: ['"Kite One"', "sans-serif"],
                roboto: ['"Roboto"', "sans-serif"],
                curlybrace: ['"Kiwi Maru"', "serif"],
                londrinasketch: ['"Londrina Sketch"', "cursive"],
            },
            colors: {
                lightMode: "#FFE8C6",
                lightMode2: "#D38919",
                lightMode3: "#DBB171",
                darkMode: "#00131E",
                darkMode2: "#1E2529",
                darkMode3: "#43545D",
            },
        },
    },
    plugins: [],
};

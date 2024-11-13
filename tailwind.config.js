/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                grein_prima: {
                    DEFAULT: "#93a5a2",
                    50: "rgba(147, 165, 162, 0.5)",
                    60: "rgba(147, 165, 162, 0.6)",
                    75: "rgba(147, 165, 162, 0.75)",
                },
                grei_sec: {
                    DEFAULT: "#b0b0b0",
                    20: "rgba(176, 176, 176, 0.2)",
                    60: "rgba(176, 176, 176, 0.6)",
                    75: "rgba(176, 176, 176, 0.75)",
                },
            },
        },
    },
    plugins: [],
};

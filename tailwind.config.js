/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#171717",
                    secondary: "#6a6f7a",
                    "base-100": "#FFFFFF" /* background image */,
                },
            },
            "dark",
        ],
    },
    theme: {
        extend: {
            colors: {
                primary: "#171717",
                secondary: "#6a6f7a",
            },
        },
        container: {
            padding: "2rem",
        },
    },
    plugins: [require("daisyui")],
};

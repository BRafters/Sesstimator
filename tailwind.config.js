/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,vue,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui")
    ],
    daisyui: {
        themes: [
            {
                sesstimator_light: {
                    "primary": "#0B2027",
                    "secondary": "#40798C",
                    "accent": "#70A9A1",
                    "neutral": "#CFD7C7",
                    "base-100": "#f6f1d1",
                    "info": "#06b6d4",
                    "success": "#a3e635",
                    "warning": "#fb923c",
                    "error": "#f87171",
                },
            },
            {
                sesstimator_dark: {
                    "primary": "#f6f1d1",
                    "secondary": "#40798C",
                    "accent": "#70A9A1",
                    "neutral": "#CFD7C7",
                    "base-100": "#0b2027",
                    "info": "#06b6d4",
                    "success": "#a3e635",
                    "warning": "#fb923c",
                    "error": "#f87171",
                },
            },
        ],
    },
}


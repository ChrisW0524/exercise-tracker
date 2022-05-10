module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "custom-primary": "#FFFFFF",
                "custom-primary-hue": "#F4F4F5",
                "custom-secondary": "#272626",
                "custom-secondary-hue": "#302F2F",
                "custom-accent": "#FA735A",
            },
            spacing: {
                100: "25rem",
            },
        },
    },
    plugins: [],
};

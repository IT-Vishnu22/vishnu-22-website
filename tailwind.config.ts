import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        backgroundImage: {
            "login-gradient":
                "linear-gradient(180deg, #92A697 29.42%, #1F2A4B 100%)",
        },
        fontFamily: {
            "roboto-condensed": ["Roboto Condensed", "sans-serif"],
            athiti: ["Athiti", "sans-serif"],
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain",
            "50": "50%",
            "40": "40%",
            "16": "4rem",
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                cream: "#ECD8C1",
                pink: {
                    DEFAULT: "#FECCCC",
                    1: "#FECCCC",
                    2: "#FEEBED",
                    3: "#F45868",
                    4: "#BA7494",
                },
                green: {
                    DEFAULT: "#B0C6B5",
                    1: "#B0C6B5",
                    2: "#506A53",
                },
                blue: {
                    DEFAULT: "#2A334E",
                    1: "#2A334E",
                    2: "#3E4C68",
                    3: "#00557C",
                    4: "#427383",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            dropShadow: {
                white: "0px 4px 4px rgba(255, 255, 255, 1)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

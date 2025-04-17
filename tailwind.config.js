export const content = ["./src/**/*.{js,jsx,ts,tsx}"];

export const theme = {
  extend: {
    colors: {
      brand: "var(--color-brand)",
      brandLight: "var(--color-brand-light)",
      secondary: "var(--color-secondary)",
      danger: "var(--color-danger)",
    },
    button: {
      primary: {
        text: "var(--button-primary-text-color, white)",
        bg: "var(--button-primary-bg-color, #00BA8D)",
        border: "var(--button-primary-border-color, #00BA8D)",
        hoverBg: "var(--button-primary-hover-bg-color, white)",
        hoverText: "var(--button-primary-hover-text-color, #00BA8D)",
      },
      outline: {
        text: "var(--button-outline-text-color, #00BA8D)",
        bg: "var(--button-outline-bg-color, white)",
        border: "var(--button-outline-border-color, #00BA8D)",
        hoverBg: "var(--button-outline-hover-bg-color, #00BA8D)",
        hoverText: "var(--button-outline-hover-text-color, white)",
      },
      borderRadius: "var(--button-border-radius, 0.375rem)",
    },
  }
};

export const variants = {
  extend: {
    translate: ["peer-checked", "after", "hover", "focus"],
    borderColor: ["peer-checked", "hover", "focus"],
    backgroundColor: ["peer-checked", "hover", "focus"],
    content: ["after"],
    transitionProperty: ["after"],
  },
};

export const safelist = [
  "fixed", "absolute", "z-50", "border", "shadow-lg",
  "top-full", "bottom-full", "right-full", "left-full",
  "mt-2", "mb-2", "ml-2", "mr-2",
  "after:content-['']",
  "after:transition-all",
  "peer-checked:after:translate-x-full",
  "after:absolute",
  "after:top-[2px]",
  "after:start-[2px]",
];

export const corePlugins = {
  preflight: false, // Prevents Tailwind from overriding `h1`, `h2`, etc.
};

export const plugins = [];

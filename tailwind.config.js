module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#FF5464',
        secondary: '#FC9547',
        dark: '#000F2D',
        gray: '#C2C2C2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    ({
      addComponents,
      theme
    }) => {
      addComponents({
        ".container": {
          marginInline: "auto",
          paddingInline: theme("spacing.4"),
          maxWidth: theme("screens.sm"),

          // Breakpoints
          "@screen sm": {
            maxWidth: theme("screens.sm"),
          },
          "@screen md": {
            maxWidth: theme("screens.md"),
          },

          "@screen lg": {
            maxWidth: theme("screens.lg"),
          },

          "@screen xl": {
            maxWidth: '1140px',
          },

          "@screen 2xl": {
            maxWidth: '1280px',
          },
        },
      });
    },
  ],
  corePlugins: {
    container: false,
  },
}

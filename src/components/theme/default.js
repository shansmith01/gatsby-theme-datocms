// declare variables here

export default {
  id: "base",
  colors: {
    white: "#FFFEFB",
    black: "#252526",
    text: "#333",
    primary: "#BEAF87",
    primaryDark: "#A19276",
    primaryDarkest: "#695a41",
    primaryLight: "#fbf5e4",
    lightGrey: "#efede8",
    darkGrey: "#5f5e5b",
    secondary: "#f86d70",
    link: "#252526",
    footer: "black",
    navLink: "black"
  },
  shadows: {
    default: "0px 2px 4px rgba(0,0,0,0.18)",
    card: "0 0 4px rgba(0, 0, 0, .125)"
  },
  fonts: {
    mainFont:
      '"Oakes Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading:
      '"Typold Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    subheading: '"Barlow Semi Condensed", sans-serif;'
  },
  fontSizes: [
    "0.6667rem",
    "0.7778rem",
    "0.8889rem",
    "1rem", // 18px base font - #4
    "1.111rem", // 20px - #5
    "1.333rem", // 24px - #6
    "1.778rem", // 32px - #7
    "2.667rem", // 48px - #8
    "3.556rem", // 64px - #9
    "5.333rem" // 96px - #10
  ],
  fontWeights: [300, 400, 500, 600, 700],
  sizes: {
    maxWidth: "1100px"
  },
  borders: {
    borderWidths: "1px"
  },
  borderWidths: {
    default: "1px"
  },
  borderStyles: {
    default: "solid"
  },
  radii: {
    default: 0,
    round: 15
  },
  styles: {
    shadow: "9px 8px 7px -2px rgba(227,224,227,0.84)",
    linkDecoration: "underline"
    // linkDecorationColor
  },
  space: [0, 4, 8, 16, 32, 64],
  breakpoints: ["40em", "52em", "64em"],
  text: {
    bigHeading: {
      textTransform: "uppercase"
    },
    subHeading: {
      fontWeight: 2,
      fontFamily: "subheading",
      textTransform: "uppercase"
    }
  },
  buttons: {
    primary: {
      bg: "primary",
      color: "black",
      cursor: "pointer",
      "&:hover": {
        bg: "primaryDark"
      },
      textTransform: "uppercase"
      // fontWeight: "500"
    },
    ghost: {
      background: "transparent",
      color: "white",
      cursor: "pointer",
      "&:hover": {
        bg: "primaryDark"
      },
      border: "1px solid white",
      textTransform: "uppercase"
      // fontWeight: "500"
    },

    secondary: {
      color: "text",
      backgroundColor: "secondary"
    }
  },
  variants: {
    leadBox: {
      p: 4,
      color: "primaryLight",
      bg: "black",
      borderRadius: "default",
      borderWidth: 3,
      borderColor: "primary",
      borderStyle: "default",
      boxShadow: "default"
    },
    tinted: {
      bg: "lightGrey"
    },
    card: {
      a: { color: "text", textDecoration: "none" },
      transition: "transform .2s",
      bg: "white",
      "&:hover": {
        transform: "scale(1.05)"
      },
      flex: "1 1 300px",
      m: 2
    }
  }
};

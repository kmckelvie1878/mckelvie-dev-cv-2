import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const styles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    body: {
      bg: mode("#f8fafc", "#030712")(props),
      overflowX: "hidden",
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 2,
        marginTop: 3,
        marginBottom: 4,
      },
      "hero-title": {
        fontSize: 60,
      },
    },
  },
  Link: {
    baseStyle: (props: StyleFunctionProps | Record<string, any>) => ({
      color: mode("#14b8a6", "#8b5cf6")(props),
      textUnderlineOffset: 3,
      "&:hover": { textDecoration: "none" },
    }),
  },
  Modal: {
    baseStyle: (props: StyleFunctionProps | Record<string, any>) => ({
      dialog: {
        bg: mode("#e2e8f0", "#111827")(props),
      },
    }),
  },
};

const colors = {
  glassTeal: "#88ccca",
  twTeal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    400: "#2dd4bf",
    500: "#14b8a6",
    800: "#115e59",
  },
  twViolet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    400: "#a78bfa",
    500: "#8b5cf6",
    800: "#5b21b6",
  },
  green: {
    200: "#23b21c",
    500: "#23b21c",
  },
  yellow: {
    200: "#f0be2f",
    500: "#f0be2f",
  },
  red: {
    200: "#df183b",
    500: "#df183b",
  },
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
});

export default theme;

import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
  textPrimary: "#3a3c43",
  textEmphasis: "#676a78",
  textSecondary: "#9fa0a5",
  textTertiary: "#1a1b1e",
  textQuaternary: "#606062",
  primary: "#2864FF",
  success: "#69CD9D",
  disabled: "#EBECEE",
  neutral: "#ECEDEE",
  placeholder: "#9f9f9f",
  danger: "#f44336",
  borderPrimary: "#DDDEE2",
  globalBackground: "#FFFFFF",
  textSubtitle: "#3A465C",
  themeColor: "#0AB3FF",
  logo: "#3f3f3f",
  tooltipColor: "#1f2032",
  recorderBorder: "#eeeeee"
};

export const color = c => colors[c];

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: color("themeColor"),
    }
  },
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: color("textPrimary"),
        height: 48,
        padding: "0 30px"
        // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
      }
    }
  }
});

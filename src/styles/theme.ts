export const theme = {
  colors: {
    // brand
    primary: "#137fec",

    // surfaces
    "background-light": "#f6f7f8",
    "background-dark": "#101922",
    "surface-light": "#ffffff",
    "surface-dark": "#192633",

    // semantic
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",

    // neutrals
    "muted-light": "#6c757d",
    "muted-dark": "#92adc9",
    textDark: "#0b1220",
    textLight: "#ffffff",

    // reusable overlays / shadow tones (8-digit hex: #RRGGBBAA)
    "overlay-light": "#0000000A", // ~4% black
    "overlay-dark": "#192633", // ~3% white
    "shadow-primary": "#137fec14", // primary with ~8% alpha
    "shadow-primary-strong": "#137fec1E", // primary with ~12% alpha
    "shadow-weak": "#0206170A",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  radii: {
    DEFAULT: "0.25rem",
    lg: "0.5rem",
    xl: "0.75rem",
    full: "9999px",
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
    wide: "1200px",
  },
  fonts: {
    display:
      'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  },
};

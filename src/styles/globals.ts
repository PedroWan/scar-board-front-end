import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: ${theme.fonts.display};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors["background-light"]};
    color: ${theme.colors.textDark};
    -webkit-tap-highlight-color: transparent;
  }

  /* dark mode via html.dark (keeps parity with your snippet) */
  html.dark body {
    background-color: ${theme.colors["background-dark"]};
    color: ${theme.colors.textLight};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  img { display: block; max-width: 100%; }
`;

import "styled-components";
import { theme } from "./theme";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    // allow access without restricting to exact Theme shape in some places
    [key: string]: unknown;
  }
}

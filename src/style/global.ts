import { createGlobalStyle } from "styled-components";
import { ThemeName } from "./theme";

interface Props {
  themeName: ThemeName;
}

export const GlobalStyle = createGlobalStyle<Props>`
    *{
        box-sizing: 'border-box';
        margin: 0;
        padding: 0;
        color: ${(props) => (props.themeName === "light" ? "black" : "white")}
    }

`;

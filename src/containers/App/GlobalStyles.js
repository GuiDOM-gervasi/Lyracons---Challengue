import { createGlobalStyle } from "styled-components";
export let orange = "#CA5310";
export let grey = "#C4C4C4";
export let lightgrey = "#EAEAEA";
export let black = "#000000";
export let white = "#FFFFFF";

export const GlobalStyles = createGlobalStyle`
    body, * {
        margin: 0;
        padding: 0;
        font-family: "Lato";
        box-sizing: border-box;
        transition: all 500ms ease;        
    }
`;

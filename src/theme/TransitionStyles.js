import { createGlobalStyle } from "styled-components";

// Sets all the global styles based on the currently selected theme
export const TransitionStyles = createGlobalStyle`
    body {
        transition-property: background-color, color;
        transition-duration: 2s;
    }
    button {
        transition-property: background-color, color, border-color;
        transition-duration: 2s;
    }
    button:hover{
        transition-property: background-color;
        transition-duration: 2s;
    }
    .mainPane{
        transition-property: background-color;
        transition-duration: 2s;
    }
    .listingPane{
        transition-property: background-color;
        transition-duration: 2s;
    }
    .listingRow{
        transition-property: background-color;
        transition-duration: 2s;
    }
`;

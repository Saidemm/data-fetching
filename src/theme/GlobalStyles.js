import { createGlobalStyle } from "styled-components";

// Sets all the global styles based on the currently selected theme
export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        background : ${({ theme }) => theme.colors.body.background};
        color : ${({ theme }) => theme.colors.body.text};
    }
    button {
        background : ${({ theme }) => theme.colors.button.background};
        color : ${({ theme }) => theme.colors.button.text};
        border-color : ${({ theme }) => theme.colors.button.border};
    }
    button:hover{
        background : ${({ theme }) => theme.colors.button.backgroundHover};
    }
    .mainPane{
        background: ${({ theme }) => theme.colors.mainPane.background};
    }
    .listingPane{
        background: ${({ theme }) => theme.colors.listingPane.background};
    }
    .listingRow{
        color: ${({ theme }) => theme.colors.listingRow.text};
    }
`;

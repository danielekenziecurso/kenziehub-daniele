import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0 auto;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    outline: none;
    }
    
    :root{
    --Color-primary: #FF577F;
    --Color-primary-Focus: #FF427F;
    --Color-primary-Negative: #59323F;

    --white: #ffffff;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;

    --font-inter:font-family: 'Inter', sans-serif;
}
button{
    cursor: pointer;
}
span{
    cursor: pointer;
}
body{
    background: var(--grey-4);
}

`;

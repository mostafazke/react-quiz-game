import styled, { createGlobalStyle } from 'styled-components'
import bgImage from './images/bg.jpeg'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }

    body {
        background-image: url(${bgImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
    }
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        color: #fff;
    }

    h1 {
        font-size: 5rem;
        font-weight: 400;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%cover;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        text-align: center;
        margin: 20px;
    }
    
    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }
    .start, 
    .next {
        cursor: pointer;
        background-image: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }
    .start {
        max-width: 200px
    }
`
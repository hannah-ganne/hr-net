import { createGlobalStyle } from "styled-components"
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --dark-blue: #002f6c;
        --light-blue: #4f83cc;
        --blue: #01579b;
        --dark-gray-blue: #aec4c7;
        --white: #f4f4f4;
        --light-mint: #e0f7fa;
    }

    html {
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    body {        
        width: 100vw;
        margin: 0;
        font-family: 'Noto Serif', serif;
        background-color: var(--white);
    }
`

export default GlobalStyle

export const Ul = styled.ul`
    display: flex;
    padding: 0;
`

export const Li = styled.li`
    list-style: none;
`

export const A = styled.a`
    text-decoration: none;
    color: inherit;
`
export const Main = styled.main`
    padding: 3rem 5rem;
`

export const Row = styled.div`
    display: flex;
    width: 100%;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column; 
    width: 45%;
`

export const Button = styled.button`
    margin-top: 1rem;
    align-self: center;
    border: none;
    padding: 1rem 2rem;
    background-color: var(--blue);
    color: var(--white);
    text-transform: uppercase;
    border-radius: 5rem;
`
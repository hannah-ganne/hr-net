import styled from 'styled-components'
import { Ul, Li, A } from '../styles/GlobalStyle'

export const HeaderContainer = styled.header`
    background-color: var(--dark-gray);
    color: var(--white);
    font-family: 'Oxygen', sans-serif;
    padding: 2rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderLogo = styled.h1`
    font-weight: 300;
    margin: 0;
`

export const Nav = styled.nav`

`

export const NavLi = styled(Li)`
    &:nth-of-type(1) {
        margin-right: 5rem;
    }
`

export const NavA = styled(A)`
    &:hover {
        text-decoration: underline;
    }
`

export const SubHeader = styled.div`
    background-color: var(--dark-gray-blue);
    padding: 1rem 5rem;

    & h2 {
        font-size: 1.2rem;
        margin: 0;
    }
`

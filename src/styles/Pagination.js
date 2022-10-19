import styled from "styled-components";

export const PaginationNav = styled.nav`

`

export const NavButton = styled.button`
    font-family: 'Noto Serif', serif;
    border: none;
    background-color: transparent;
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`

export const PageNum = styled.span`
    margin: 0 0.5rem;
`
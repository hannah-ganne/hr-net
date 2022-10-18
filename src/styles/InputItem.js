import styled from "styled-components"

export const InputContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;

    &:not(:nth-of-type(1)) {
        margin-top: 2rem;
    }
`

export const Label = styled.label`

`

export const Input = styled.input`
    padding: 0.3rem 2rem 0.3rem 0;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid var(--dark-blue);
    margin-top: 0.4rem;

    &:focus {
        outline: none;
        border-bottom: 2px solid var(--light-blue);
    }
`

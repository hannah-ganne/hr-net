import styled from "styled-components";

export const ModalContainer = styled.dialog`
    border: none;
    padding: 1rem;
    position: absolute;
    top: 50%;
    display: flex;
    flex-direction: column;
    visibility: ${({open}) => open ? 'visible': 'hidden'}
`

export const ModalText = styled.p`

`

export const CloseModal = styled.button`
    border: none;
    background-color: transparent;
    align-self: flex-end;
    cursor: pointer;

    & img {
        width: 1rem;
    }
`
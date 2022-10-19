import { CloseModal, ModalContainer, ModalText } from "../styles/Modal";
import close from '../assets/images/close.svg'
import { useState } from 'react'

export default function Modal({ open, setOpen }) {

    return (
        <ModalContainer open={open}>
            <CloseModal onClick={() => setOpen(false)}>
                <img src={close} />
            </CloseModal>
            <ModalText>
                Employee Created!
            </ModalText>
        </ModalContainer>
    )
}
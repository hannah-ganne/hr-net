import { InputContainer, Label, Input } from "../styles/InputItem"

export default function InputItem({ label, type, value, setValue }) {

    return (
        <InputContainer>
            <Label>{label}</Label>
            <Input type={type} value={value} onChange={(e) => setValue(e.target.value)} />
        </InputContainer>
    )
}
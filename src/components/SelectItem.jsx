import { InputContainer, Label } from "../styles/InputItem";
import { Select, Option } from "../styles/SelectItem";

export default function SelectItem({ label, list, setValue }) {
    return (
        <InputContainer>
            <Label>{label}</Label>
            <Select as="select" onChange={(e) => setValue(e.target.value)}>
                <Option>select your department</Option>
                {list.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
            </Select>
        </InputContainer>
    )
}
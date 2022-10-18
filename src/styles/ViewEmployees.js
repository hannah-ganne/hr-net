import styled from "styled-components";
import { Select } from './SelectItem'
import { Row } from './GlobalStyle'
import { Input } from './InputItem'

export const EntryNum = styled(Select)`
    margin: 0 0.5rem;
`

export const Wrapper = styled(Row)`
    width: fit-content;
    align-items: center;
`

export const SearchInput = styled(Input)`
    margin-left: 0.5rem;
`

export const RowWrapper = styled(Row)`
width: 100%;
    justify-content: space-between;
`
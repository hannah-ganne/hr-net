import styled from "styled-components";

export const TableContainer = styled.table`
    margin: 2rem 0;
    width: 100%;
    text-align: center;
    border-spacing: 0;
`

export const TableHead = styled.thead`
    background-color: var(--dark-gray);
    color: var(--white);
`

export const TableRow = styled.tr`

`

export const TableHeader = styled.th`
    padding: 0.8rem 1rem;
    cursor: pointer;

    & img {
        margin-left: 0.5rem;
        margin-bottom: 0.1rem;
        ${({ sortOrder, column, abbr }) => (sortOrder === 'asc' && column === abbr) && 'transform: rotate(0.5turn)'};
    }
`

export const TableData = styled.td`
    padding: 0.8rem 1rem;
    border-bottom: 1px solid lightgray;
`

export const TableBody = styled.tbody`

`
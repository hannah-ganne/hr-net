import { Main } from '../styles/GlobalStyle'
import { EntryNum, Wrapper, SearchInput, RowWrapper } from '../styles/ViewEmployees'
import Table from './Table'
import Pagination from './Pagination'
import { useState, useMemo } from 'react'

export default function ViewEmployees() {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const employees = JSON.parse(localStorage.getItem('employees'))

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return employees.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, pageSize]);

    const firstEntry = 1 + ((currentPage - 1) * pageSize)
    const lastEntry = firstEntry + currentTableData.length -1
    const totalEntries = employees.length
    
    return (
        <Main>
            <RowWrapper>
                <Wrapper>
                    Show
                    <EntryNum as="select" onChange={(e) => setPageSize(parseInt(e.target.value))}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </EntryNum>
                    entries
                </Wrapper>
                <Wrapper>
                    Search
                    <SearchInput />
                </Wrapper>
            </RowWrapper>
            <Table data={currentTableData} />
            <RowWrapper>
                <Wrapper>
                    Showing {firstEntry} to {lastEntry}  of {totalEntries} entries
                </Wrapper>
                <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
            </RowWrapper>
        </Main>
    )
}
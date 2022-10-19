import { Main } from '../styles/GlobalStyle'
import { EntryNum, Wrapper, SearchInput, RowWrapper } from '../styles/ViewEmployees'
import Table from './Table'
import Pagination from './Pagination'
import { useState, useMemo, useEffect } from 'react'

export default function ViewEmployees() {
    const employees = JSON.parse(localStorage.getItem('employees'))

    // sort by column
    const [column, setColumn] = useState('')
    const [sortOrder, setSortOrder] = useState('')
    const [sortedData, setSortedData] = useState([...employees])

    const handleClick = (e) => {
        setSortOrder(prev => (prev === '' || prev === 'desc') ? 'asc' : 'desc' )
        setColumn(e.target.abbr)
    }

    // pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        if (employees === null) {
            return []
        } else {
            const sliced = [...sortedData]
            return sliced.slice(firstPageIndex, lastPageIndex);
        }
    }, [currentPage, pageSize, sortedData]) 

    const firstEntry = 1 + ((currentPage - 1) * pageSize)
    const lastEntry = firstEntry + currentTableData.length -1
    const totalEntries = employees === null ? 0 : employees.length
    
    // Search by keyword
    const [keyword, setKeyword] = useState('')
    const handleSearch = (e) => {
        setKeyword(e.target.value)
    }
    
    useEffect(() => {
        const filtered = employees.filter(employee => Object
            .keys(employee)
            .some(key => employee[key]
                .toLowerCase()
                .includes(keyword.toLowerCase()
            )))

        setSortedData(filtered)
    }, [keyword])

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
                    <SearchInput value={keyword} onChange={handleSearch}/>
                </Wrapper>
            </RowWrapper>
            <Table data={currentTableData} column={column} setColumn={setColumn} sortOrder={sortOrder} setSortOrder={setSortOrder} handleClick={handleClick} setSortedData={setSortedData} />
            <RowWrapper>
                <Wrapper>
                    Showing {firstEntry} to {lastEntry}  of {totalEntries} entries
                </Wrapper>
                <Pagination currentPage={currentPage} onPageChange={setCurrentPage} totalEntries={totalEntries} pageSize={pageSize} />
            </RowWrapper>
        </Main>
    )
}
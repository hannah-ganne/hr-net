import { PaginationNav, NavButton, PageNum } from "../styles/Pagination"

export default function Pagination({ onPageChange, currentPage, totalEntries, pageSize }) {
    const numOfPage = Math.ceil(totalEntries / pageSize)

    return (
        <PaginationNav>
            <NavButton
                onClick={() => onPageChange(currentPage => currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </NavButton>
            <PageNum>{currentPage}</PageNum>
            <NavButton
                onClick={() => onPageChange(currentPage => currentPage + 1)}
                disabled={currentPage === numOfPage}
            >
                Next
            </NavButton>
        </PaginationNav>
    )
}
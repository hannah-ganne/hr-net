import { PaginationNav, NavButton, PageNum } from "../styles/Pagination"

export default function Pagination({ onPageChange, currentPage }) {

    return (
        <PaginationNav>
            <NavButton onClick={() => onPageChange(currentPage => currentPage - 1)}>Previous</NavButton>
            <PageNum>{currentPage}</PageNum>
            <NavButton onClick={() => onPageChange(currentPage => currentPage + 1)}>Next</NavButton>
        </PaginationNav>
    )
}
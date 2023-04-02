import React from "react";
import '../styles/TableLook.css'

interface Props {
    postsPerPage: number,
    totalPosts: number,
    paginate: (pageNumber: number) => void
}

export const Pagination = (props: Props) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => props.paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
import React, {useEffect, useState} from "react";
import {MathEntity} from "types";
import {Spinner} from "../common/Spinner/Spinner";
import {ExpressionsTable} from "./ExpressionsTable";
import {Pagination} from "./Pagination";

export const ExpressionList = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(6);
    const [mathList, setMathList] = useState<MathEntity[] | null>(null);

    const refreshMath = async () => {
        setMathList(null)
        const res = await fetch('http://localhost:3001/math');
        const data = await res.json();
        console.log(data.mathHistory)
        setMathList(data.mathHistory)
    };

    useEffect(() => {
        refreshMath()
    }, [])

    if (mathList === null) {
        return <Spinner/>
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = mathList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return <>
        <h1>History</h1>
        <ExpressionsTable expressions={currentPosts} refresh={refreshMath}></ExpressionsTable>
        <Pagination
            paginate={paginate}
            totalPosts={mathList.length}
            postsPerPage={postsPerPage}
        />
    </>
}
import React, {useEffect, useState} from "react";
import {MathEntity} from "types";
import {Spinner} from "../common/Spinner/Spinner";
import {ExpressionsTable} from "./ExpressionsTable";

export const ExpressionList = () => {
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

    return <>
        <h1>History</h1>
        <ExpressionsTable expressions={mathList} refresh={refreshMath}></ExpressionsTable>
    </>
}
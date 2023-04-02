import React from "react";
import {MathEntity} from "types";
import {ExpressionsRow} from "./ExpressionsRow";
import '../styles/TableLook.css'
import {NavLink} from "react-router-dom";

interface Props {
    expressions: MathEntity[],
    refresh: () => void
}

export const ExpressionsTable = (props: Props) => {

    const response = <>
        <table className='tabel'>
            <thead>
            <tr className="headers">
                <th>First Number</th>
                <th>Operator</th>
                <th>Second Number</th>
                <th>Solution</th>
                <th>Date</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                props.expressions
                    .map(el => (
                        <ExpressionsRow expression={el} key={el.id} refresh={props.refresh}/>
                    ))
            }
            </tbody>
        </table>
    </>
    return (
        props.expressions.length !== 0 ? response : <b>History is empty go to <NavLink
            to="/math/create">"Add expression"</NavLink> Tab to add new expressions</b>
    )
}
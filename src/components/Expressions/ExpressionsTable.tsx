import React from "react";
import {MathEntity} from "types";
import {ExpressionsRow} from "./ExpressionsRow";
import '../styles/TableLook.css'

interface Props {
    expressions: MathEntity[],
    refresh: () => void
}

export const ExpressionsTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>ID</th>
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
)
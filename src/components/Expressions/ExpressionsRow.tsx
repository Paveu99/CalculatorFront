import React, {MouseEvent} from "react";
import {MathEntity} from "types";

interface Props {
    expression: MathEntity,
    refresh: () => void
}

export const ExpressionsRow = (props: Props) => {

    const deleteExpression = async (e: MouseEvent) => {
        e.preventDefault()
        if (!window.confirm(`Are you sure you want to remove this expression?`)) {
            return;
        }

        const res = await fetch(`http://localhost:3001/math/${props.expression.id}`, {
            method: 'DELETE',
        });

        if ([400, 500].includes(res.status)) {
            const error = await res.json();
            alert(`Error occured: ${error.message}`);
            return
        }

        props.refresh()
    }

    return (
        <tr>
            <td>{props.expression.id}</td>
            <td>{props.expression.firstNum}</td>
            <td>{props.expression.operator}</td>
            <td>{props.expression.secondNum}</td>
            <td>{props.expression.solution}</td>
            <td>{props.expression.dateAdded}</td>
            <td>
                <a href="#" onClick={deleteExpression}>🗑</a>
            </td>
        </tr>
    )
}
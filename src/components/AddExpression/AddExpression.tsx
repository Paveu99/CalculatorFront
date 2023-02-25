import React, {FormEvent, useState} from "react";
import {CreateMathReq, MathEntity} from "types";
import {Spinner} from "../common/Spinner/Spinner";
import '../styles/AddExpression.css'

export const AddExpression = () => {

    const [form, setForm] = useState<CreateMathReq>({
        firstNum: 0,
        operator: '',
        secondNum: 0,
        solution: null,
    })
    const [warning, setWarning] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null);

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value
        }))
    };

    const checkTheResult = () => {
        setWarning(false)
        if (form.operator) {
            switch (form.operator) {
                case '+':
                    return setForm(form => ({
                        ...form,
                        solution: Number(form.firstNum) + Number(form.secondNum)
                    }));
                case '-':
                    return setForm(form => ({
                        ...form,
                        solution: Number(form.firstNum) - Number(form.secondNum)
                    }));
                case '*':
                    return setForm(form => ({
                        ...form,
                        solution: Number(form.firstNum) * Number(form.secondNum)
                    }));
                case '/':
                    if (Number(form.secondNum) === 0) {
                        setWarning(true)
                        return
                    }
                    return setForm(form => ({
                        ...form,
                        solution: Number(form.firstNum) / Number(form.secondNum)
                    }));
                default:
                    console.log('Eeeee')
                    return 'Error';
            }
        } else {
            console.log('hahaha')
        }
    }

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (form.solution === null) return setLoading(false);
        try {
            const res = await fetch('http://localhost:3001/math', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            })
            const data: MathEntity = await res.json() // ZBIERAMY ODPOWIEDŹ OD BE
            console.log(data)
            setResultInfo(`Expression ${data.firstNum} ${data.operator} ${data.secondNum} = ${data.solution} with id: ${data.id} was added to the list`)
        } finally {
            setLoading(false);
        }
    }

    const addAnotherOneFromScratch = () => {
        setWarning(false)
        setResultInfo(null);
        setForm({
            firstNum: 0,
            operator: '',
            secondNum: 0,
            solution: null,
        })
    }

    if (loading) return <Spinner/>

    const war = <p>You cannot do that</p>


    if (resultInfo !== null) {
        return <div>
            <p><strong>{resultInfo}</strong></p>
            <button className='submitbutton' onClick={addAnotherOneFromScratch}>Add another one</button>
        </div>
    }
    return (
        <>
            <form className="formik" onSubmit={sendForm}>
                <h2>Add equation</h2>
                <p>
                    <label>
                        First Number: <br/>
                        <input
                            type="number"
                            value={form.firstNum}
                            onChange={e => updateForm('firstNum', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Operator: <br/>
                        <select
                            value={form.operator}
                            onChange={e => updateForm('operator', e.target.value)}
                        >
                            <option value="">Choose operator</option>
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        Second Number: <br/>
                        <input
                            type="number"
                            value={form.secondNum}
                            onChange={e => updateForm('secondNum', e.target.value)}
                        />
                    </label>
                </p>
                {warning && war}
                <p>
                    <button className='submitbutton' type="button" onClick={checkTheResult}>Check the answer</button>
                    | <button className='submitbutton' onClick={addAnotherOneFromScratch}>Reset</button>
                </p>
                <h3>{form.solution}</h3>
                <button className='submitbutton' type="submit">Add to the list</button>
            </form>
        </>

    )
}
import React, {FormEvent, useState} from 'react'
import {CreateUserReq, UserEntity} from '../../../../project-back/types/user'
import {Spinner} from "../common/Spinner/Spinner";

export const RegForm = () => {
    const [form, setForm] = useState<CreateUserReq>({
        name: '',
        surname: '',
        email: '',
        password: '',
    })
    const [correct, setCorrect] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState<boolean>(false)
    const [inputType1, setInputType1] = useState<string>('password')
    const [inputType2, setInputType2] = useState('password')
    const [resultInfo, setResultInfo] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const showPassword1 = (e: FormEvent) => {
        e.preventDefault()
        setInputType1('text')
    }
    const showPassword2 = (e: FormEvent) => {
        e.preventDefault()
        setInputType2('text')
    }

    const hidePassword1 = (e: FormEvent) => {
        e.preventDefault()
        setInputType1('password')
    }
    const hidePassword2 = (e: FormEvent) => {
        e.preventDefault()
        setInputType2('password')
    }


    const change = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value
        }))
    };

    const checkInput = async (e: FormEvent) => {
        e.preventDefault()
        console.log(form)
        setSubmitted(true)
        if (form.email.includes('@') && form.password.length >= 8 && form.name.length >= 3 && form.surname.length >= 3) {
            setCorrect(true)
            try {
                const res = await fetch('http://localhost:3001/user/reg', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                })
                const data: UserEntity = await res.json() // ZBIERAMY ODPOWIEDŹ OD BE
                console.log(data)
                setResultInfo(`User ${data.name} ${data.surname} was added to the list now try to log in`)
            } finally {
                setLoading(false);
            }
        } else {
            setCorrect(false)
        }
    }

    if (loading) return <Spinner/>


    const box = <p className="checkAnswer"
                   style={
                       {
                           backgroundColor: `${correct ? 'green' : 'red'}`,
                       }}>
        {
            correct
                ? 'All good now'
                : 'Something is bad try again'
        }
    </p>


    if (resultInfo !== null) {
        return <div>
            <p><strong>{resultInfo}</strong></p>
        </div>
    }

    return <form autoComplete='off' className="form" onSubmit={checkInput}>
        {submitted && box}
        <p>
            <label>
                Name: <br/>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={e => change('name', e.target.value)}
                />
            </label>
        </p>
        <em style={{fontSize: 'x-small'}}>must be at least 3 characters long</em>
        <p>
            <label>
                Surname: <br/>
                <input
                    type="text"
                    name="surname"
                    value={form.surname}
                    onChange={e => change('surname', e.target.value)}
                />
            </label>
        </p>
        <em style={{fontSize: 'x-small'}}>must be at least 3 characters long</em>
        <p>
            <label>
                e-mail: <br/>
                <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={e => change('email', e.target.value)}
                />
            </label>
        </p>
        <em style={{fontSize: 'x-small'}}>must contain "@"</em>
        <p>
            <label>
                Password: <br/>
                <input
                    type={inputType1}
                    name="password"
                    value={form.password}
                    onChange={e => change('password', e.target.value)}
                />
                <button type="reset" onMouseDown={showPassword1} onMouseUp={hidePassword1} onMouseOut={hidePassword1}
                        style={{height: '26px'}}>
                    {inputType1 === 'password' ? '👁' : '🧿'}
                </button>
            </label>
        </p>
        <em style={{fontSize: 'x-small'}}>must be at least 8 characters long</em>
        {/*<p>*/}
        {/*  <label>*/}
        {/*    Hasło - potwierdzenie: <br/>*/}
        {/*    <input*/}
        {/*      type={inputType2}*/}
        {/*      name="passwordConfirmation"*/}
        {/*      value={form.passwordConfirmation}*/}
        {/*      onChange={e => change('?', e.target.value)}*/}
        {/*    />*/}
        {/*    <button type="reset" onMouseDown={showPassword2} onMouseUp={hidePassword2} onMouseOut={hidePassword2}*/}
        {/*            style={{ height: '26px' }}>*/}
        {/*      {inputType2 === 'password' ? '👁' : '🧿'}*/}
        {/*    </button>*/}
        {/*  </label>*/}
        {/*  <em style={{fontSize: 'x-small'}}>musi być identyczne jak hasło</em>*/}
        {/*</p>*/}
        <button type="submit" className="submitbutton">Zarejestruj</button>
    </form>

}
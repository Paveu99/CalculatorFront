import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import '../styles/Header.css'
import {LocalView} from "./LocalView";

export const Header = () => {

    const [test, setTest] = useState<boolean>(false);
    const [logged, setLogged] = useState<boolean>(false)
    const colorOfLink = ({isActive}: {
        isActive: boolean
    }) => ({color: isActive ? 'green' : 'red'})


    useEffect(() => {
        (async () => {
            if (await localStorage.getItem('token')) {
                setTest(true)
            }
        })()
    }, [])

    const login = <NavLink style={colorOfLink} to="/user">Login</NavLink>

    const user = <LocalView/>

    return (
        <div className='header'>
            <div className='subdiv'>
                <h1>Math website</h1>
                {/*<div style={{fontWeight: "bold", margin: "15px"}}>Login</div>*/}
                {test ? user : login}
            </div>
            <div>
                <NavLink className='link1' style={colorOfLink} to="/">Main page </NavLink>
                | <NavLink className='link2' style={colorOfLink} to="/mathIns">Instruction </NavLink>
                {test && <>
                    | <NavLink className='link3' style={colorOfLink} to="/mathHis">Expression history </NavLink>
                    | <NavLink className='link4' style={colorOfLink} to="/math/create">Add new expression</NavLink>
                </>}
                <hr/>
            </div>
        </div>
    )
}
import React from "react";
import {NavLink} from "react-router-dom";
import '../styles/Header.css'

export const Header = () => {
    const colorOfLink = ({isActive}: {
        isActive: boolean
    }) => ({color: isActive ? 'green' : 'red'})

    return (
        <div className='header'>
            {/*<div className='subdiv'>*/}
            <h1>Math website</h1>
            {/*<div style={{fontWeight: "bold", margin: "15px"}}>Login</div>*/}
            {/*<NavLink style={colorOfLink} to="/">Login</NavLink>*/}
            {/*</div>*/}
            <div>
                <NavLink className='link1' style={colorOfLink} to="/">Main page </NavLink>
                | <NavLink className='link2' style={colorOfLink} to="/mathIns">Instruction </NavLink>
                | <NavLink className='link3' style={colorOfLink} to="/mathHis">Expression history </NavLink>
                | <NavLink className='link4' style={colorOfLink} to="/math/create">Add new expression</NavLink>
                <hr/>
            </div>
        </div>
    )
}
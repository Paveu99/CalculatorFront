import React from "react";
import {NavLink} from "react-router-dom";
import '../styles/Header.css'

export const Header = () => {
    const colorOfLink = ({isActive}: {
        isActive: boolean
    }) => ({color: isActive ? 'green' : 'red'})

    return (
        <div className='header'>
            <h1>Math website</h1>
            <div>
                Menu: <NavLink style={colorOfLink} to="/">Main page</NavLink> | <NavLink style={colorOfLink}
                                                                                         to="/mathHis">Expression
                history</NavLink> | <NavLink style={colorOfLink} to="/math/create">Add new expression</NavLink>
                <hr/>
            </div>
        </div>
    )
}
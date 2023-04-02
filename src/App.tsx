import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from './components/Header/Header';
import {NotFoundView} from './views/NotFoundView';
import {MathHistoryView} from "./views/MathHistoryView";
import {CreateFormView} from './views/CreateFormView';
import {MainPageView} from "./views/MainPageView";
import './components/styles/Styles.css'
import {InstructionView} from "./views/InstructionView";
import {LogForm} from "./components/LogRegForms/LoginForm";
import {LogOutForm} from "./components/Header/LogOutForm";

export const App = () => {
    const refreshMath = () => {
        window.location.replace("http://localhost:3000");
    }
    return (
        <div className="App">
            <div className="theWholeThing">
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPageView/>}/>
                    <Route path="/mathIns" element={<InstructionView/>}/>
                    <Route path="/mathHis" element={<MathHistoryView/>}/>
                    <Route path="/math/create" element={<CreateFormView/>}/>
                    <Route path="/user" element={<LogForm refresh={refreshMath}/>}/>
                    <Route path="/logout" element={<LogOutForm/>}/>
                    <Route path="*" element={<NotFoundView/>}/>
                </Routes>
            </div>
        </div>
    );
}


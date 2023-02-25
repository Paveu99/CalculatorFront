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

export const App = () => {
    return (
        <div className="App">
            <div className="theWholeThing">
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPageView/>}/>
                    <Route path="/mathIns" element={<InstructionView/>}/>
                    <Route path="/mathHis" element={<MathHistoryView/>}/>
                    <Route path="/math/create" element={<CreateFormView/>}/>
                    <Route path="*" element={<NotFoundView/>}/>
                </Routes>
            </div>
        </div>
    );
}


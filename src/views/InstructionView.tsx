import React from "react";
import '../components/styles/InstructionView.css'

export const InstructionView = () => {
    return <>
        <h2>Instruction</h2>
        <p>In this tab you can see answers to some questions bugging you about functionality of this app.</p>
        <h3>Main Page</h3>
        <p>Apart from information about what the app actually does you can read a math joke right at the bottom! By
            clicking "Click me to see a random joke!" you will see a question, then after clicking "See the answer" you
            will see the punchline of the joke. Have fun with that!</p>
        <ol>
            <li>
                <img className='main1' src={require("./1.png")} alt='Explanation'/>
            </li>
            <li>
                <img className='mainpage' src={require("./2.png")} alt='Explanation'/>
            </li>
            <li>
                <img className='mainpage' src={require("./3.png")} alt='Explanation'/>
            </li>
        </ol>
        <h3>Expression History</h3>
        <p>It is a place where you can see your past math expressions. You can see its id first, second number, operator
            and solution. If you feel embarrassed by what you calculated your can delete unwanted expression by clicking
            on garbage can!</p>
        <ol>
            <li>
                <img className='history' src={require("./4.png")} alt='Explanation'/>
            </li>
        </ol>
        <h3>Add New Expression</h3>
        <p>It is a place where you can calculate expressions and later on you can add them to the history tab.</p>
        <ol>
            <li>
                <img className='addexpression' src={require("./AddExpression.png")} alt='Explanation'/>
            </li>
        </ol>
    </>
}
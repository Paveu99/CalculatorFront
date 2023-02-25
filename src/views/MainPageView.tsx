import React, {useState} from "react";
import '../components/styles/Main.css'

interface Joke {
    question: string,
    answer: string,
}

export const MainPageView = () => {
    const [joke, setJoke] = useState<Joke>({
        question: '',
        answer: '',
    })
    const [wantedQ, setWantedQ] = useState<boolean>(false);
    const [wantedA, setWantedA] = useState<boolean>(false);
    const jokesArr = [
        {
            question: 'Do you know why seven eight nine?',
            answer: 'Because you’re supposed to eat three squared meals a day!'
        },
        {
            question: 'What is the butterfly’s favorite subject in school?',
            answer: 'Mothematics.'
        },
        {
            question: 'How do you make seven even?',
            answer: 'Subtract the “S.”'
        },
        {
            question: 'What did the triangle say to the circle?',
            answer: 'You’re pointless.'
        },
        {
            question: 'How are a dollar and the moon similar?',
            answer: 'They both have four quarters!'
        },
        {
            question: 'What is a math teacher’s favorite season?',
            answer: 'SUMmer.'
        },
        {
            question: 'What’s a swimmer’s favorite math?',
            answer: 'Dive-ision.'
        },
        {
            question: 'Why did the obtuse angle go to the beach?',
            answer: 'Because it was over 90 degrees.'
        },
        {
            question: 'What is a bird’s favorite type of math?',
            answer: 'Owl-gebra.'
        },
        {
            question: 'Which tables do you not have to learn?',
            answer: 'Dinner tables!'
        },
        {
            question: 'What did the acorn say when it grew up?',
            answer: 'Ge-om-e-try! (Gee, I’m a tree!)'
        },
        {
            question: 'Teacher: Why are you turning in a blank sheet of paper?',
            answer: 'Student: Because all my answers are imaginary numbers.'
        },
        {
            question: 'Student One: I saw my math teacher with a piece of graph paper yesterday.',
            answer: 'Student Two: She must be plotting something.'
        },
        {
            question: 'What is a math teacher’s favorite snake?',
            answer: 'A pi-thon.'
        },
        {
            question: 'What did the zero say to the eight?',
            answer: 'Nice belt!'
        },
        {
            question: 'What do you call an empty parrot cage?',
            answer: 'A polygon. (A polly gone.)'
        },
        {
            question: 'What do you get when you take the sun and divide its circumference by its diameter?',
            answer: 'Pi in the sky.'
        },
        {
            question: 'Why was the equal sign so humble?',
            answer: 'He knew he wasn’t less than or greater than anyone else.'
        },
        {
            question: 'Why doesn’t anybody talk to circles?',
            answer: 'Because there’s no point!'
        },
        {
            question: 'What do you call a man who spent all summer at the beach?',
            answer: 'A tangent. (A tan gent.)'
        },
        {
            question: 'Who invented arithmetic?',
            answer: 'Henry the 1/8.'
        },
        {
            question: 'Why did the two fours skip lunch?',
            answer: 'Because they already 8!'
        },
        {
            question: 'What do baby parabolas drink?',
            answer: 'Quadratic formula.'
        },
        {
            question: 'You know what seems odd to me?',
            answer: 'Numbers that can’t be divided by two.'
        },
        {
            question: 'What is a math teacher’s favorite vacation destination?',
            answer: 'Times Square!'
        },
        {
            question: ' What do you call a number that just can’t stand still?',
            answer: 'A “roamin” numeral.'
        },
        {
            question: 'Why didn’t the quarter roll down the hill with the nickel?',
            answer: 'Because it had more sense.'
        },
        {
            question: 'Have you heard the latest statistics joke?',
            answer: 'Probably.'
        },
        {
            question: 'What do you call friends who love math?',
            answer: 'Algebros!'
        },
        {
            question: 'I’ll do algebra, I’ll do trig, I’ll even do statistics.',
            answer: 'But graphing is where I draw the line!'
        },
        {
            question: 'Why is it sad that parallel lines have so much in common?',
            answer: 'Because they’ll never meet.'
        },
        {
            question: 'Why should you never mention the number 288?',
            answer: 'Because it’s “two” gross.'
        },
        {
            question: 'Why couldn’t the angle get a loan?',
            answer: 'Its parents wouldn’t cosine.'
        },
        {
            question: 'Why do plants hate math?',
            answer: 'Because it gives them square roots.'
        },
        {
            question: 'Why did the student get upset when his teacher called him average?',
            answer: 'It was a mean thing to say!'
        },
        {
            question: 'Did you hear that old math teachers never die?',
            answer: 'They just lose some of their functions.'
        },
        {
            question: 'How do you keep warm in a cold room?',
            answer: 'You go to the corner. It’s always 90 degrees!'
        },
        {
            question: 'What did one math book say to the other?',
            answer: 'Don’t bother me. I’ve got my own problems!'
        },
        {
            question: 'Why is the obtuse triangle always upset?',
            answer: 'Because it is never right!'
        },
        {
            question: 'A farmer counted 396 cows in his field.',
            answer: 'But when he rounded them up, he had 400.'
        },
    ]
    const randomFunc = () => {
        const randomNum = Math.floor(Math.random() * jokesArr.length)
        setJoke(jokesArr[randomNum])
        setWantedQ(true)
        setWantedA(false)
    }
    const setAnswer = () => {
        setWantedA(true)
    }
    const answer = <p className='A'>Answer: {joke.answer}</p>
    const question = <>
        <p className='Q'>Question: {joke.question}</p>
        <button className='submitbutton' onClick={setAnswer}>See the answer</button>
        {wantedA && answer}
    </>
    return (
        <div className='main'>
            <h1 style={{textAlign: 'center'}}>Welcome to this website where you will be able to solve simple
                equations</h1>
            <p>This webpage provides you with opportunity to:
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Addition" target='_blank'>add</a>,
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Subtraction" target='_blank'>subtract</a>,
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Multiplication" target='_blank'>multiply</a>,
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Division_(mathematics)" target='_blank'>divide</a>.
                    </li>
                </ul>
            </p>
            <p>If you have any question how to interact with app click on 'Instruction' tab to see more</p>
            <br/>
            <hr/>
            <p className='joke'>
                <h2>MATH JOKES</h2>
                <p>This section is only for entertainment purposes only! If you would like to see a joke click button
                    below and if you would like to see an answer click next button!</p>
                <div>
                    <button className='submitbutton' onClick={randomFunc}>Click me to see a random joke!</button>
                    {wantedQ && question}
                </div>
            </p>
        </div>
    )
}
import Die from "./Die.jsx";
import { useState, useEffect,useRef } from "react";
import { nanoid } from "nanoid";
// import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti'


export default function App() {

    const [dice, setDice] = useState(() => generateNewDice());
    const [rolls, setRolls] = useState(1)
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const newFocus = useRef(null)
    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)


    useEffect(()=>{
        if (gameWon){
            newFocus.current.focus()
        }
        
    }
    ,[gameWon]

    )

    console.log(newFocus)

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, [])



    function generateNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()

            }));
    }

    // useEffect(
    //     ()=>{
    //         let won = true;

    //      if(
    //         dice.every(die => die.isHeld) && 
    //         dice.every(die => die.value=== dice[0].value)
    //      ){
    //         console.log("won")
    //      }
    //     }
    // ,[dice])

    
    function ifHold(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? { ...die, isHeld: !die.isHeld } : die
        }))
    }

    const diceElements = dice.map((die) => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            ifHold={() => ifHold(die.id)}

        />
    ));

    function rollDice() {
        if( !gameWon){
            setDice(oldDice => {
            setRolls(prev => prev + 1)
            console.log("rolled", rolls)
            return oldDice.map(die => {
                return die.isHeld ? die : {
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false,
                    id: nanoid()
                }
            })
        }
        )
        }else{
            setRolls(1)
            setDice(generateNewDice())
        }
        
    }


    return (
        <main>
            {gameWon && <Confetti
                width={size.width}
                height={size.height}
            />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <div className="header">
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>

            <div className="dice-container">
                {diceElements}

            </div>

            {
                gameWon &&
                <p className="instructions">
                    You rolled {rolls} times.
                </p>
            }

            <button className="roll-dice" onClick={rollDice} ref= {newFocus}>
                {gameWon ? "New Game" : "Roll"}
            </button>

        </main>
    )
}

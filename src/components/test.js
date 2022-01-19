import React from "react";
import { useEffect, useState, useRef } from "react";
import Text from "./text";
import Timer from "./timer";
import useIsActive from '../hooks'
import NumWordsSelector from "./numWordsSelector";
import getWords from "../words";

function getWpm(time, charArray, charInput) {
    let correctChars = 0;
    charArray = charArray.join("");
    charInput = charInput;
    for (let i = 0; i < charArray.length; i++) {
        if (charArray[i] === charInput[i])
            correctChars++;
    }
    let correctWords = correctChars / 5;
    return Math.round(correctWords / time * 60);
}

function Test() {
    let numWordsOptions = [15, 20, 25];

    
    //hooks
    const [charArray, setCharArray] = useState([]);
    const [charInput, setCharInput] = useState("");
    const [timerState, setTimerState] = useState({ time: 0, state: "paused" });
    const [cursorClass, setCursorClass] = useState("cursor-move-right");
    const [numWords, setNumWords] = useState(numWordsOptions[0]);
    const [wpm, setWpm] = useState(0);
    const inputRef = useRef();
    const isActive = useIsActive("hidden-input");


    useEffect(newText, [numWords]);
    function newText() {
        let words = getWords(numWords);
        setCharArray(words);
        setTimerState({ time: 0, state: "paused" });
        setCharInput("");
        setWpm(0);
        inputRef.current.focus();
    }
    function handleCharInput(e) {
        if (charInput.length !== charArray.length)
            setCharInput(e.target.value);
        if (charInput.length === 0 && timerState.state === "paused") {
            setTimerState((prevState) => {
                return { ...prevState, state: "resumed" };
            })
        }
        if (charInput.length === charArray.length - 1) {
            setTimerState((prevState) => {
                return { ...prevState, state: "paused" };
            })
            setWpm(getWpm(timerState.time, charArray, charInput))
        }
    }
    function handleKeyDown(e) {
        if (e.keyCode === 8)
            setCursorClass("cursor-move-left");
        else
            setCursorClass("cursor-move-right");
    }
    return (
        <div
            className="test"
            style={!isActive ? { cursor: "pointer" } : {}}
            onClick={() => inputRef.current.focus()}
        >
            <div >
                <input
                    value={charInput}
                    className="hidden-input"
                    onChange={handleCharInput}
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
                    id="hidden-input"
                />
                {
                    isActive ?
                        <Text charArray={charArray} charInput={charInput} cursorClass={cursorClass} />
                        : "click here to activate the test"
                }

            </div>

            <br />
            <div className="controls">
                <div>
                    <Timer timerState={timerState} setTimerState={setTimerState} />
                    <span className="partition no-select"></span><span>wpm: {wpm}</span>
                </div>
                <div className="num-words-selector">
                    <NumWordsSelector numWords={numWords} setNumWords={setNumWords} numWordsOptions={numWordsOptions} />
                </div>
                <button onClick={newText}>New Test</button>
            </div>

        </div>
    );
}

export default Test;
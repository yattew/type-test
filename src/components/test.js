import React from "react";
import { useEffect, useState, useRef } from "react";
import Text from "./text";
import Timer from "./timer";
import useIsActive from '../hooks'

async function getWords() {
    let res = await fetch("https://random-word-api.herokuapp.com/word?number=10");
    let data = await res.json();
    data = data.join(" ").split("");
    return data;
}

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
    const [charArray, setCharArray] = useState([]);
    const [charInput, setCharInput] = useState("");
    const [timerState, setTimerState] = useState({ time: 0, state: "paused" });
    const [cursorClass, setCursorClass] = useState("cursor-move-right");
    const [wpm, setWpm] = useState(0);
    const inputRef = useRef();
    const active = useIsActive("hidden-input");
    useEffect(() => {
        getWords().then((data) => setCharArray(data));
        inputRef.current.focus();
    }, []);
    function newText() {
        getWords().then((data) => setCharArray(data));
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
        if (e.keyCode === 8) {
            setCursorClass("cursor-move-left");
        }
        else {
            setCursorClass("cursor-move-right");
        }
    }
    return (
        <>
            <div onClick={() => inputRef.current.focus()}>
                <input
                    value={charInput}
                    className="hidden-input"
                    onChange={handleCharInput}
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
                    id="hidden-input"
                />
                <Text charArray={charArray} charInput={charInput} cursorClass={cursorClass} />
            </div>

            <br />
            <div>
                <Timer timerState={timerState} setTimerState={setTimerState} />
                <span>| wpm: {wpm}</span>
            </div>
            <button onClick={newText}>New text</button>

        </>
    );
}
export default Test;
import Text from "./text";
import { useState, useEffect, useRef } from "react";
import Timer from "./timer";

async function getWords() {
    let res = await fetch("https://random-word-api.herokuapp.com/word?number=10");
    let data = await res.json();
    data.forEach((item)=>{
        return item.split("");
    });
    console.log(data);
    return data;
}

function App() {
    const [wordsArray, setWordsArray] = useState({ words: [], currWord: 0, wordsStatus: 0 });
    const [wordInput, setWordInput] = useState("");
    const [timerState, setTimerState] = useState({ time: 0, state: "paused" });
    const [wpm,setWpm] = useState(0);
    const textInput = useRef();

    useEffect(() => {
        getWords().then((data) => setWordsArray({ words: data, currWord: 0, wordsStatus: [] }));
    }, []);

    function newText() {
        getWords().then((data) => setWordsArray({ words: data, currWord: 0, wordsStatus: [] }));
        setTimerState({ time: 0, state: "paused" });
        setWpm(0);
    }

    function handleWordInput(e) {
        let val = e.target.value;
        if (val.slice(-1) === " ") {
            if (wordsArray.words[wordsArray.currWord] == val.slice(0, -1)) {
                wordsArray.wordsStatus.push(true);
            }
            else {
                wordsArray.wordsStatus.push(false);
            }
            wordsArray.currWord += 1;
            val = "";
        }
        if (val.length === 1 && wordsArray.currWord === 0) {
            setTimerState((prevState) => {
                return { ...prevState, state: "resumed" };
            });
        }
        else if(wordsArray.currWord==wordsArray.words.length)
        {
            setTimerState((prevState) => {
                return { ...prevState, state: "paused" };
            });
            let wpm = 0;
            for(let i of wordsArray.wordsStatus)
            {
                if(i)
                    wpm++;
            }
            wpm/=timerState.time;
            wpm*=60;
            setWpm(wpm);
        }
        setWordInput(val);
    }
    return (
        <>
            <br />
            <Text wordsArray={wordsArray} />
            <br />
            <div>
                <input value={wordInput} onChange={handleWordInput} ref={textInput}/>
                {/* <Timer timerState={timerState} setTimerState={setTimerState} /> */}
                {/* <span>| wpm: {wpm}</span> */}
            </div>
            <button onClick={newText}>New text</button>

        </>
    );
}

export default App;
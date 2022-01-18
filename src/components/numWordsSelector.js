import React from "react";

function NumWordsSelector({numWords,setNumWords}) {
    function handleClick(numWords){
        setNumWords(numWords);
    }
    // let numWordsOptions = [10,15,20];
    return <>
        <div className={numWords === 10 ? "active-num-words" : ""} onClick={()=>handleClick(10)}>
            10
        </div>
        <span className="no-select">|</span>
        <div className={numWords === 15 ? "active-num-words" : ""} onClick={()=>handleClick(15)}>
            15
        </div>
        <span className="no-select">|</span>
        <div className={numWords === 20 ? "active-num-words" : ""} onClick={()=>handleClick(20)}>
            20
        </div>
    </>;
}

export default NumWordsSelector
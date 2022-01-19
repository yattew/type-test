import React from "react";

function NumWordsSelector({ numWords, setNumWords }) {
    function handleClick(numWords) {
        setNumWords(numWords);
        // console.log(numWords)
    }
    let numWordsOptions = [10, 15, 20];
    return <>
        {
            numWordsOptions.map((num, idx) => {
                return <>
                    <div className={numWords === num ? "active-num-words" : ""} onClick={() => handleClick(num)}>{num}</div>
                    {idx === numWordsOptions.length - 1 ? null : <span className="no-select partition"></span>}
                </>;
            })
        }
    </>;
}

export default NumWordsSelector
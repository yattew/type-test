import React from "react";
import { v4 as uuidv4 } from "uuid";
function NumWordsSelector({ numWords, setNumWords, numWordsOptions }) {
    function handleClick(numWords) {
        setNumWords(numWords);
    }

    return <>
        {
            numWordsOptions.map((num, idx) => {
                return <React.Fragment key={uuidv4()}>
                    <div className={numWords === num ? "active-num-words" : ""} onClick={() => handleClick(num)}>
                        <span className="no-select">{num}</span>
                    </div>
                    {
                        idx === numWordsOptions.length - 1 ?
                            null
                            : <span className="no-select partition"></span>
                    }
                </React.Fragment>;
            })
        }
    </>;
}

export default NumWordsSelector
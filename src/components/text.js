import React from "react";
function Text(props) {
    let text = props.charArray;
    let userText = props.charInput.split("");
    function getDisplayText(text, userText) {
        let res = [];
        let i = 0;
        let temp = [];
        for (; i < userText.length; i++) {
            if(text[i] === " ")
            {
                res.push(<span key={i+"word"}className="word">{temp}</span>);
                res.push(<span className="letter" key={i}> </span>)
                temp = [];
                continue;
            }
            if (text[i] === userText[i]) {
                temp.push(<span className="letter correct" key={i}>{text[i]}</span>)
            }
            else {
                temp.push(<span className="letter wrong" key={i}>{text[i]}</span>)
            }
        }
        temp.push(<span key={i++} className={props.cursorClass}></span>);
        i--;
        for (; i < text.length; i++) {
            if(text[i] === " ")
            {
                res.push(<span key={i+"word"} className="word">{temp}</span>);
                res.push(<span className="letter" key={i}> </span>)
                temp = [];
                continue;
            }
            temp.push(<span className="letter" key={i+1}>{text[i]}</span>)
        }
        res.push(<span key={i+"word"} className="word">{temp}</span>);
        return res;
    }
    return (
        <div className="text no-select">
            {
                getDisplayText(text, userText)
            }
        </div>
    );
}

export default Text;
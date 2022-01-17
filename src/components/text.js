import React from "react";
function Text(props) {
    let text = props.charArray;
    let userText = props.charInput.split("");
    function getDisplayText(text, userText) {
        let res = [];
        let i = 0;
        for (; i < userText.length; i++) {
            if (text[i] === userText[i]) {
                res.push(<span className="letter" key={i} style={{ color: "green" }}>{text[i]}</span>)
            }
            else {
                res.push(<span className="letter" key={i} style={{ color: "red" }}>{text[i]}</span>)
            }
        }

        res.push(<span key={i++} className={props.cursorClass}></span>);
        i--;
        for (; i < text.length; i++) {
            res.push(<span className="letter" key={i+1}>{text[i]}</span>)
        }
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
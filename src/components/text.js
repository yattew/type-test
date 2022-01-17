import React from "react";
function Text(props) {
    let text = props.charArray;
    let userText = props.charInput.split("");
    function getDisplayText(text, userText) {
        let res = [];
        for (let i = 0; i < userText.length; i++) {
            if (text[i] === userText[i]) {
                res.push(<span className="letter" key={i} style={{ color: "green" }}>{text[i]}</span>)
            }
            else {
                res.push(<span className="letter" key={i} style={{ color: "red" }}>{text[i]}</span>)
            }
        }
        res.push( <span key="cursor" className="cursor"></span>);
        for (let i = userText.length; i < text.length; i++) {
            res.push(<span className="letter" key={i}>{text[i]}</span>)
        }
        return res;
    }
    return (
        <div className="text no-select">
            {
                getDisplayText(text,userText)
            }
        </div>
    );
}

export default Text;
function Text(props) {
    let { words, currWord, wordsStatus } = props.wordsArray;
    console.log(props.wordsArray);
    return (
        <div>
            {
                words.map((word, idx) => {
                    let style = {};
                    if (idx < wordsStatus.length) {
                        if (wordsStatus[idx] === true) {
                            style = { color: "green" };
                        }
                        else {
                            style = { color: "red" };
                        }
                    }
                    return <span style={style} key={idx}>{`${word} `}</span>
                })
            }
        </div>
    );
}

export default Text;
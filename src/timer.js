import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function Timer(props) {
    let { timerState, setTimerState } = props;
    useEffect(() => {
        setInterval(() => {
            setTimerState((prevState) => {
                if (prevState.state === "resumed")
                    return { ...prevState, time: prevState.time + 1 };
                return { ...prevState };
            })
        }, 1000);
    }, []);
    return (
        <span>time: {timerState.time} </span>
    );
}

export default Timer;
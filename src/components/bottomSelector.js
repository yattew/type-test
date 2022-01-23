import React, { useReducer, useState } from "react";
import Help from "./help";
import About from "./about";

const OPTIONS = {
    help: <Help />,
    about: <About />,
};

function getDefaultOptions() {
    let state = {};
    for (let i in OPTIONS)
        state[i] = false;
    return state;
}

function reducer(prevState, action) {
    let newState = { ...getDefaultOptions(), [action.clicked]: !prevState[action.clicked] };
    return newState;
}

function renderOption(optionsState) {
    let option;
    for (let key in optionsState) {
        if (optionsState[key]) {
            option = OPTIONS[key];
        }
    }
    return option;
}

function BottomSelector() {
    const [optionsState, dispatch] = useReducer(reducer, getDefaultOptions());
    return (
        <>
            {
                renderOption(optionsState)
            }
            {
                Object.keys(OPTIONS).map((key, idx) => {
                    return (
                        <button
                            key={idx}
                            style={{ margin: "0.5rem" }}
                            onClick={() => dispatch({ clicked: key })}
                        >
                            {key}
                        </button>
                    )
                })
            }
        </>
    )
}

export default BottomSelector;
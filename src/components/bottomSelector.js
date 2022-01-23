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
    if (action.clicked === "theme") {
        return getDefaultOptions();
    }
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

function toggleTheme(prevTheme, setTheme) {
    if (prevTheme === "light")
        setTheme("dark");
    else if (prevTheme === "dark")
        setTheme("light");
}

function BottomSelector({ theme, setTheme }) {
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
            <button
                style={{ margin: "0.5rem" }}
                onClick={() => { 
                    toggleTheme(theme, setTheme);
                    dispatch({clicked:"theme"}) 
                }}
            >
                {
                    (() => {
                        if (theme === "light") {
                            return "dark mode";
                        }
                        else if (theme === "dark") {
                            return "light mode";
                        }
                    })()
                }
            </button>
        </>
    )
}

export default BottomSelector;
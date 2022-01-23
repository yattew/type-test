import { useState } from "react";

function Help() {
    let helps = [
        "Select the Number of words from the selector below the test",
        "WPM: Words Per Minute",
        "New Test: Tab + Enter"
    ];

    return (
        <>
            <div className="bottom-box-container">
                <div className="bottom-box-wrapper">
                    <div>
                        {
                            helps.map((item, idx) =>
                                <li className="help" key={idx}>
                                    {item}
                                </li>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Help;
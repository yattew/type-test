import { useState } from "react";

function Help({ helps }) {
    const [isOpen, setIsOpen] = useState(false);
    function handleHelp() {
        if (isOpen) {
            setIsOpen(false);
        }
        else {
            setIsOpen(true);
        }
    }
    return (
        <>
            <div className="helps-container">
                <button onClick={handleHelp}>Help</button>
                {
                    isOpen ?
                        <div className="helps">
                            <div>
                                {helps.map((item, idx) => <li className="help" key={idx}>{item}</li>)}
                            </div>
                        </div>
                        : null
                }
            </div>
        </>
    );
}

export default Help;
import "./app.css";
import Help from "./components/help";
import Contact from "./components/contact";
import Test from "./components/test";


function App() {
    let helps = [
        "Select the Number of words from the selector below the test",
        "WPM: Words Per Minute",
        "New Test: Tab + Enter"
    ];
    let contacts = [
        ["github","yattew"]
    ]
    return (
        <>
            <Test />
            <div className="bottom-container">
                <Help helps={helps} />
                <Contact contacts={contacts}/>
            </div>

        </>
    );
}

export default App;
import "./app.css";
import Help from "./components/help";
import Test from "./components/test";


function App() {
    let helps = [
        "Select the Number of words from the selector below the test",
        "WPM: Words Per Minute",
        "New Test: Tab + Enter"
    ];
    return (
        <>
            <Test />
            <div className="bottom-container">
                <Help helps={helps} />
            </div>

        </>
    );
}

export default App;
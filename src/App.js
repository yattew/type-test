import "./app.css";
import Hints from "./components/hints";
import Test from "./components/test";


function App() {
    let hints= ["New Test: Tab + Enter"];
    return (
        <>
            <Test />
            <Hints hints={hints} />
        </>
    );
}

export default App;
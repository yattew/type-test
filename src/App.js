import "./app.css";
import BottomSelector from "./components/bottomSelector";
import Help from "./components/help";
import Test from "./components/test";


function App() {
    return (
        <>
            <Test />
            <div className="bottom-container">
                <div>
                    <BottomSelector />
                </div>
            </div>

        </>
    );
}

export default App;
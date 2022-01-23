import { useEffect, useState } from "react";
import "./app.css";
import BottomSelector from "./components/bottomSelector";
import Test from "./components/test";


function App() {
    const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    useEffect(() => {
        let root = document.getElementById("root");
        if (theme === "light")
            root.classList = "light-mode";
        else if (theme === "dark")
            root.classList = "dark-mode";
    }, [theme]);
    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", e => {
            if (e.matches)
                setTheme("dark");
            else
                setTheme("light");
        })
    }, []);
    return (
        <>
            <Test />
            <div className="bottom-container">
                <div>
                    <BottomSelector theme={theme} setTheme={setTheme} />
                </div>
            </div>
        </>
    );
}

export default App;
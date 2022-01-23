import { useEffect, useState } from "react";
import "./app.css";
import BottomSelector from "./components/bottomSelector";
import Help from "./components/help";
import Test from "./components/test";
import ThemeToggle from "./components/themeToggle";


function App() {
    const [theme, setTheme] = useState("dark");
    useEffect(() => {
        let root = document.getElementById("root");
        if (theme === "light")
            root.classList = "light-mode";
        else if (theme === "dark")
            root.classList = "dark-mode";
    }, [theme]);
    return (
        <>
            <Test />
            <div className="bottom-container">
                <div>
                    <BottomSelector theme={theme} setTheme={setTheme}/>
                </div>
            </div>
        </>
    );
}

export default App;
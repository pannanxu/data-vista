import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@/App.css";

import {DynamicComponent, Runtime} from "@data-vista/runtime";
import {Core} from "@data-vista/core";
import {Components} from "@data-vista/components";

const runtime = new Runtime();
const core = new Core();
const components = new Components();

function App() {
    const [count, setCount] = useState(0);

    console.log("runtime.version", runtime.version);
    console.log("core.version", core.version);
    console.log("components.version", components.version);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => {
                    setCount((count) => count + 1);
                }}>
                    count is {count}
                </button>
                <DynamicComponent url={"/main.umd.js"} error={count} setError={setCount}/>
            </div>
        </>
    );
}

export default App;

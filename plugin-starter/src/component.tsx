import * as React from "react";


const PluginStarter: React.FC<{
    time: number,
    changeTime: (time: number) => void
}> = ({time, changeTime}) => {
    return (
        <div>
            <img src={'/vite.svg'}/>
            <h1>{time} Plugin Starter Hello</h1>
            <button onClick={() => {
                changeTime(new Date().valueOf());
            }}>changeTime</button>
        </div>
    )
}

export default PluginStarter;
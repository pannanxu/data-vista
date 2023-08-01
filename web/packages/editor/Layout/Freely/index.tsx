"use client";
import LoaderPlugin from "@data-vista/core/plugin/loaderPlugin";
import React, {useState} from "react";

const FreelyEditorLayout = () => {

    const [time, setTime] = useState(0);

    const changeTime = (time: number) => {
        console.log("time", time);
        setTime(time);
    };

    return <div className={"freely-layout-editor"}>
        <div>FreelyEditor: {time}</div>
        <LoaderPlugin
            url={"http://127.0.0.1:8081/main.js"}
            name={"PluginStarter"}
            props={{
                time: time,
                changeTime: changeTime
            }}/>
    </div>;
};

export default FreelyEditorLayout;
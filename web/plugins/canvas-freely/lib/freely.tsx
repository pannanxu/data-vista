import React from "react";
import Viewer from "./viewer";
import Ruler from "./ruler";

const FreelyEditorLayout = () => {

    return <div className={"freely-layout-editor"} style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 64px)",
    }}>
        <Ruler/>
        <Viewer/>
    </div>;
};

export default FreelyEditorLayout;
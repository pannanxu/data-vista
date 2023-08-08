"use client"
import React from "react";
import Viewer from "./Viewer";
import {withFreelyComponent} from "./withFreelyComponent";
import FreelyRuler from "./Ruler";

const Component = () => {
    return <div>component</div>
}

const FreelyEditorLayout = () => {
    let Element = withFreelyComponent(Component);

    return <div className={"freely-layout-editor"} style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 64px)",
    }}>
        <FreelyRuler/>
        <Viewer>
            <Element/>
        </Viewer>
    </div>;
};

export default FreelyEditorLayout;
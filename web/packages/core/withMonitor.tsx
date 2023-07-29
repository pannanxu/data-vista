import {observer} from "mobx-react-lite";
import React from "react";

function withMonitor<T = any>(fc: React.FC<T>) {
    return observer(fc)
}

export default withMonitor
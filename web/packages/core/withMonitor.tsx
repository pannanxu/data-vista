import {observer} from "mobx-react-lite";
import React from "react";

function withMonitor<T extends object = {}>(fc: React.FunctionComponent<T>): React.FunctionComponent<T> {
    return observer(fc as any) as React.FunctionComponent<T>
}

export default withMonitor
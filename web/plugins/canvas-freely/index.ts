import {definePlugin} from "@data-vista/plugin";
import React from "react";

export default definePlugin({
    id: '@data-vista/plugin-canvas-freely',
    name: 'DataVistaEditorCanvasFreely',
    components: [
        {
            name: 'freely',
            extensionPoints: 'Editor',
            component: React.lazy(() => import('./lib/freely'))
        }
    ]
})
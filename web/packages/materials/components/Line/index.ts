import {definePlugin} from "@data-vista/core/plugin/plugins";
import React from "react";

const Line = React.lazy(() => import('./component'))

export default definePlugin({
    name: "material-line",
    extensionPoints: 'MaterialComponent',
    components: [
        {
            name: 'material-component-line',
            component: Line,
            configMapSchema: {}
        }
    ]
})
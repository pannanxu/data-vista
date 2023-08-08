import {definePlugin} from "@data-vista/plugin";
import dynamic from "next/dynamic";
export default definePlugin({
    project: "@data-vista/material/component",
    components: [
        {
            name: 'line',
            component: dynamic(() => import('./Line')),
            extensionPoints: 'MaterialComponent',
        }
    ]
})
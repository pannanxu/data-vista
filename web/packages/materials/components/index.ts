import {definePlugin} from "@data-vista/plugin";
import dynamic from "next/dynamic";

export default definePlugin({
    id: "@data-vista/material/component",
    name: "DataVistaMaterials",
    components: [
        {
            name: 'line',
            component: dynamic(() => import('./Line')),
            extensionPoints: 'MaterialComponent',
        }
    ]
})
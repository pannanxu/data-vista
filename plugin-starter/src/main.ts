import React from "react";
import {definePlugin} from "@data-vista/plugin";

export default definePlugin({
    id: '@data-vista/plugin-starter',
    name: 'plugin-starter',
    components: [
        {
            name: 'plugin-line',
            extensionPoints: 'MaterialComponent',
            component: React.lazy(() => import('./component.tsx')),
        }
    ]
})
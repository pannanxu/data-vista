import React from "react";
import {definePlugin} from "@data-vista/core";

// 导出的组件必须采用 React.lazy 包装
const PluginStarter = React.lazy(() => import('./component.tsx'));

export default definePlugin({
    name: 'plugin-starter',
    extensionPoints: 'MaterialComponent' as any,
    components: [
        {
            name: 'plugin-line',
            component: PluginStarter,
        }
    ]
})
import React from "react";

// 导出的组件必须采用 React.lazy 包装
const PluginStarter = React.lazy(() => import('./component.tsx'));

const plugin = {
    name: 'plugin-starter',
    extensionPoints: 'MaterialComponent',
    components: [
        PluginStarter
    ]
}
export default plugin
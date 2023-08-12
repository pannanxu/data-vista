import {definePlugin} from "@data-vista/plugin";
import dynamic from "next/dynamic";

export default definePlugin({
    id: '@data-vista/material-antd-charts',
    name: 'MaterialAntdCharts',
    components: [
        {
            name: 'line',
            extensionPoints: 'MaterialComponent',
            component: dynamic(() => import('./libs/Line'), {ssr: false})
        }
    ]
})
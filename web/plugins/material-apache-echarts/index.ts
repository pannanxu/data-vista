import {definePlugin} from "@data-vista/plugin";
import dynamic from "next/dynamic";

export default definePlugin({
    id: '@data-vista/material-apache-echarts',
    name: 'MaterialApacheEcharts',
    components: [
        {
            name: 'line',
            extensionPoints: 'MaterialComponent',
            component: dynamic(() => import('./libs/Line'), {ssr: false})
        }
    ]
})
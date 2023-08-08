import dynamic from "next/dynamic";
import {definePlugin} from "@data-vista/plugin";

const editorLayout = definePlugin({
    project: '@data-vista/editor/layout',
    components: [
        {
            name: 'freely',
            component: dynamic(() => import('./Freely')),
            extensionPoints: 'Editor',
        },
        {
            name: 'grid',
            component: dynamic(() => import('./Grid')),
            extensionPoints: 'Editor',
        },
        {
            name: 'mobile',
            component: dynamic(() => import('./Mobile')),
            extensionPoints: 'Editor',
        }
    ]
})
export default editorLayout
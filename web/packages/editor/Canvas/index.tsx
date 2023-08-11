import dynamic from "next/dynamic";
import {definePlugin} from "@data-vista/plugin";

const editorLayout = definePlugin({
    id: '@data-vista/editor/layout',
    name: "DataVistaEditorLayout",
    components: [
        {
            name: 'freely',
            component: dynamic(() => import('./Freely/freely')),
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
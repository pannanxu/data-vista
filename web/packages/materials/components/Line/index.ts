import {Line} from "./component";
import {definePlugin} from "@data-vista/core/plugin/plugins";
import {ExtensionPoint} from "@data-vista/core/plugin/ExtensionPoint";

export default definePlugin({
    name: "material-line",
    extensionPoints: ExtensionPoint.MaterialComponent,
    components: [
        {
            name: 'material-component-line',
            component: Line,
            configMapSchema: {}
        }
    ]
})
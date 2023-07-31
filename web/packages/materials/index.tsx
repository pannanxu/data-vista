import {coreComponents} from "./components";
import {PluginStore} from "@data-vista/core/plugin/pluginStore";

const initLoadCoreMaterials = () => {
    coreComponents.forEach(plugin => PluginStore.getInstance().registerPlugin(plugin))
}

export {
    initLoadCoreMaterials
}
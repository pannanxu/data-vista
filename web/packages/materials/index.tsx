import {coreComponents} from "./components";
import {PluginContainer} from "@data-vista/core/plugin/PluginContainer";

const initRegisterCoreMaterials = () => {
    const container = PluginContainer.get();
    coreComponents.forEach(e => container.registerPlugin(e))
}

export {
    initRegisterCoreMaterials
};
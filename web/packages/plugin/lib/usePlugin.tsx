import {PluginContainer} from "./PluginContainer";

const usePlugin = (name: string) => {
    return PluginContainer.get().getPlugin(name);
}

export {
    usePlugin
}